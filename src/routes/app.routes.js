import React from 'react';
import Dashboard from '../pages/Dashboard'
import NavTabs from './NavTabs'
import Filter from '../pages/Filter'
import ItemDetails from '../pages/ItemDetails'
import TendersItems from '../pages/TendersItems'
import LookingFor from '../pages/LookingFor'


import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AuthRoutes = ()=>(
    <AppStack.Navigator
    // mode="modal"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: "transparent" },
      cardOverlayEnabled: true,
      headerStyle: {
        backgroundColor: '#008B8B',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      }}    >
        {/* <AppStack.Screen name ="Dashboard" component = {Dashboard}/> */}
        <AppStack.Screen name ="NavTabs" component = {NavTabs}/>

        <AppStack.Screen name ="Filter" component = {Filter}/>

        <AppStack.Screen options={{ title: 'Detalhes',headerShown: true }}
          name ="ItemDetails" component = {ItemDetails}/>

        <AppStack.Screen options={{ title: 'Negociar',headerShown: true }}
          name ="TendersItems" component = {TendersItems}/>

        <AppStack.Screen options={{ title: 'Pesquisa',headerShown: true }} 
         name ="LookingFor"  component = {LookingFor}/>


        

    </AppStack.Navigator>
);
export default AuthRoutes;

