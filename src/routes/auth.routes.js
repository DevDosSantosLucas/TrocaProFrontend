import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = ()=>(
    <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown:false}}
        name = "SignIn" component = {SignIn}/>
        <AuthStack.Screen options={{headerShown:false,title :"Cadastrar"}}
         name = "SignUp" component = {SignUp}/>

    </AuthStack.Navigator>
);
export default AuthRoutes;