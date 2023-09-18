import * as React from 'react';
import Loading from './pages/Loading';
import SelectionPage from './pages/SelectionPage';
import Home from './pages/Home';
import DetailScreen from './pages/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopulerCourse from './components/PopulerCourse';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Loading" component={Loading} options={{ headerShown: false }} />
      <Stack.Screen name="SelectionPage" component={SelectionPage} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="PopulerCourse" component={PopulerCourse} options={{ headerShown: false }} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;