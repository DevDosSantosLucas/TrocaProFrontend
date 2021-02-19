import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Login';
// import Main from '../pages/Main';
import NavTabs from './NavTabs';
import PerfilEdit from '../pages/PerfilEdit';

const  Stack = createStackNavigator();


function AppStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false}}  >
                <Stack.Screen name = "Login" component = {Login}/> 
                {/* <Stack.Screen name = "Main"  component = {Main}/> */}
                <Stack.Screen name = "NavTabs"  component = {NavTabs}/>
                
                <Stack.Screen name = "PerfilEdit"  component = {PerfilEdit}/>
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default AppStack;