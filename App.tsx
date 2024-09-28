import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import Feed from './src/screens/Feed';
import ModalScreen from './src/screens/ModalScreen';
import Market from './src/screens/Market';
import CalendarScreen from './src/screens/CalendarScreen';
import ComposeScreen from './src/screens/ComposeScreen';
import ExpensesScreen from './src/screens/ExpensesScreen';
import UserOptions from './src/screens/UserOptions';
import RatingScreen from './src/screens/RatingScreen';
import Profile from './src/screens/Profile';
const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} 
        />
        <Stack.Screen name='LogIn' component={LogIn}/> 
         <Stack.Screen name='Feed' component={Feed}/>
        <Stack.Screen name='ModalScreen' component={ModalScreen}/> 
        <Stack.Screen name='Market' component={Market}/>
       <Stack.Screen name='CalendarScreen' component={CalendarScreen}/>  
       <Stack.Screen name='ComposeScreen' component={ComposeScreen}/>
       <Stack.Screen name='ExpensesScreen' component={ExpensesScreen}/>
       <Stack.Screen name='UserOptions' component={UserOptions}/>
       <Stack.Screen name='RatingScreen' component={RatingScreen}/>
       <Stack.Screen name='Profile' component={Profile}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;