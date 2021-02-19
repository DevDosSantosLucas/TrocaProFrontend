import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddItems from '../pages/AddItems';
// import Main from '../pages/Main';
import Search from '../pages/Search'
import Perfil from '../pages/Profile';
import NavTops from './NavTops';

import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function NavTabs(){

    
    return(

        
        
        <Tab.Navigator
              
            tabBarOptions={{
                showLabel: false,
                style:{
                    elevation:0,
                    shadownOpacity:0,
                    height:'10%',
                },
                tabStyle:{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  
                },
                iconStyle:{
                    flex: 1,
                    width:20,
                    height:20,
                },            
                inactiveBackgroundColor: '#fafafc',
                // activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor:'#008B8B'
            }}
        >
            
            

            <Tab.Screen name = "Search"   component = { Search}  
                        options={{
                            tabBarIcon: ({ color}) => {
                                return(
                                    <Icon name ='ios-search-circle-sharp'
                                          color = {color} size = {50}/>
                                );
                            }
                        }} />
            <Tab.Screen name = "AddItems" component = { AddItems}
                    options={{
                        
                            tabBarIcon: ({ color}) => {
                                return(
                                    <Icon name ='md-add-circle-sharp'
                                            color = {color} size ={50}/>
                                );
                            }
                        }} />

            <Tab.Screen name = "Perfil"   component = {NavTops}//{ Perfil}
                        
                        options={{
                            
                            tabBarIcon: ({ color}) => {
                                return(
                                    <Icon name ='ios-person-circle-sharp'
                                        size = {50} color = {color}/>
                                );
                            }
                        }}>
                           
                        </Tab.Screen>
            
        </Tab.Navigator>
        
    );
}

export default NavTabs;