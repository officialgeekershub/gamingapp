import React from 'react';
import {LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import TabNavigator from './src/navigation/TabNavigator';
LogBox.ignoreLogs(['Reanimated 2']);
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
      {/* {<AuthStack />} */}
    </NavigationContainer>
  );
};


export default App;
