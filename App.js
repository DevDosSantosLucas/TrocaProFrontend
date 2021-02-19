import { StatusBar } from 'expo-status-bar';
import FlashMessage from 'react-native-flash-message'

import React from 'react';
// import View,{ StatusBar} from 'react-native';
// import Header from './src/pages/Header';
// import Login  from './component/Login';
// import Routes from './routes';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/AppStack';

import {AuthProvider} from './src/contexts/auth'
 

import Routes from './src/routes/';


const App = () => {


  return (
      
  <NavigationContainer>
    <AuthProvider>
        <Routes/>
        <FlashMessage position ="bottom"/>
        <StatusBar style="auto" />
    </AuthProvider>
      
  </NavigationContainer>

  );
};





export default App;



