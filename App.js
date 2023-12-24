import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import home from './pages/home'
import category from './pages/category'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={home} />
        <Stack.Screen name='Category' component={category} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
