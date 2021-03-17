import React from 'react';
import View,{ LogBox,StatusBar} from 'react-native';
import Header from './pages/Header';
// import Login  from './component/Login';
// import Routes from './routes';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './routes/AppStack';

import {AuthProvider} from './contexts/auth'
 

import Routes from './routes/';

console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
const App = () => {

  
  return (
  <NavigationContainer>
    <AuthProvider>
        <Routes/>
    </AuthProvider>
      
  </NavigationContainer>

  );
};





export default App;
