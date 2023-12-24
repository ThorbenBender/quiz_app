import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Option } from 'react-native'
import question from '../mock/data'
export default ({ navigation, route }) => {
  // const { category } = route.params
  const [questionNumber, setQuestionNumber] = useState(0)
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState({})
  const [loading, setLoading] = useState(true)

  const shuffleAnswer = (answers) => {
    let shuffle = answers
    for (let i = shuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temporaryValue = shuffle[i]
      shuffle[i] = shuffle[j]
      shuffle[j] = temporaryValue
    }
    return shuffle
  }

  useEffect(() => {
    setQuestions(question)
  }, [])

  useEffect(() => {
    if (questions.length > 0) {
      let currentQ = questions[questionNumber]
      console.log(currentQ)
      setCurrentQuestion({
        ...currentQ,
        answers: shuffleAnswer([
          ...currentQ.incorrectAnswer,
          currentQ.correctAnswer,
        ]),
      })
    }
    setLoading(false)
  }, [questions])
  if (loading) {
    return <Text>Loading...</Text>
  } else {
    return (
      <View style={styles.questionPage}>
        <View style={styles.questionProgress}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                { width: `${((questionNumber + 1) / 10) * 100}%` },
              ]}
            />
          </View>
          <Text style={styles.progressDescription}>
            Question - {questionNumber + 1}/10
          </Text>
        </View>
        <View>
          <Text>{currentQuestion.question?.text || 'Test'}</Text>
          {currentQuestion.answers.map((answer) => (
            <Option>
              <Text>{answer}</Text>
            </Option>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  questionPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  questionProgress: {
    flex: 1,
    height: 5,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  progressBarBackground: {
    backgroundColor: 'grey',
    height: 20,
    width: '100%',
    borderRadius: 8,
  },
  progressBarFill: {
    backgroundColor: 'blue',
    height: '100%',
    borderRadius: 8,
  },
  progressDescription: {
    fontSize: 18,
    fontWeight: '800',
  },
})
