import React from 'react';
import View,{ StatusBar} from 'react-native';
import Header from './pages/Header';
// import Login  from './component/Login';
// import Routes from './routes';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from './routes/AppStack';

import {AuthProvider} from './contexts/auth'
 

import Routes from './routes/';


const App = () => {


  return (
    // COMENTADO O QUE ESTAVA +- FUNCIONANDO
  //   <>
  //  <Header/>
  //  <AppStack/>
  //  {/* <StatusBar style = "auto"/>  ainda precisa arrumar */}
  //  </>

  // TESTANDO COM CONTEX T API
  <NavigationContainer>
    <AuthProvider>
        <Routes/>
    </AuthProvider>
      
  </NavigationContainer>

  );
};





export default App;
