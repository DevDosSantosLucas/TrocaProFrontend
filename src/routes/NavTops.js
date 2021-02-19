import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddItems from '../pages/AddItems';
import Main from '../pages/LookingFor';
import Profile from '../pages/Profile';
import TendersList from '../pages/TendersList';
import AddedItems from '../pages/AddedItems';

import { FontAwesome ,Octicons} from '@expo/vector-icons';

import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
  //   ActivityIndicator,
  } from 'react-native'


import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Top = createMaterialTopTabNavigator();

function NavTops() {
  return (
    <>
        <Profile/>
    <Top.Navigator
    tabBarOptions={{
        showLabel: true,//mudar pra false para aparecer o icone (necessário arrumar)
        style:{
            // marginTop:'30%',
            elevation:0,
            shadownOpacity:0,
            // height:'10%',
        },
        tabStyle:{
            flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'center',
          
        },
        iconStyle:{
            flex: 1,
            // width:20,
            // height:20,
        },            
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor:'#008B8B'
    }}
        >
      {/* <Top.Screen name="Perfil" component={Perfil} /> */}
      <Top.Screen name="addedItems" component={AddedItems} 
      options={{title :"Itens Anunciados",
        tabBarIcon: ({ color}) => {
            return(
                
                <Octicons name="package" size={24} color="black" />
            );
        }
    }}/>
      <Top.Screen name="TendersList" component={TendersList} 
         options={{title :"Negociados",
            tabBarIcon: ({ color}) => {
                return(
                    
                    <FontAwesome name="handshake-o" size={50} color={color} />
                );
            }
        }}/>
    </Top.Navigator>
    </>
  );
}

export default NavTops;