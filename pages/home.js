import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
export default ({ navigation }) => {
  const categories = [
    'Test',
    'Geographie',
    'Sprache',
    'Musik',
    'Kultur',
    'Geschichte',
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frohe Weihnachten Mama</Text>
      <View style={styles.categories}>
        {categories.map((category, i) => (
          <TouchableOpacity
            style={styles.category}
            key={i}
            onPress={() =>
              navigation.navigate('Category', {
                category,
              })
            }
          >
            <Text style={styles.category_title}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    fontSize: 32,
    fontWeight: '800',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categories: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 20,
  },
  category: {
    backgroundColor: '#ff0000',
    width: '80%',
    borderRadius: 6,
    height: '10px',
    paddingVertical: 10,
  },
  category_title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})
