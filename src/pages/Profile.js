import React,{useEffect,useState} from 'react'; 
import { Alert , View, Text,StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

          import Icon from 'react-native-vector-icons/FontAwesome5';
          import Iconswap from 'react-native-vector-icons/MaterialCommunityIcons';
          import {RectButton, TouchableOpacity, FlatList} from'react-native-gesture-handler';
          import api from '../services/api';
import {useAuth} from '../contexts/auth';

import{ProfileBox,Screen,Img,LoginBox,Input,ButtonSend,
    InfoTextWhite,InputLong,ButtonText,IconsProfile} from '../components'
          
import { FontAwesome5,SimpleLineIcons,MaterialCommunityIcons } from '@expo/vector-icons';

export default function Perfil({route,navigation}){

        //  const  {user}  = route.params;
         const {user,signOut} = useAuth();
        
        //  const _id  = navigation.getParam('email');
        // const [users,setUsers] =useState([]);


    function handlePerfilEdit(){
    // navigation.navigate('PerfilEdit');
    Alert.alert('Editar Perfil');
    }
    function handleSignOut(){
        // signOut()
        // Alert.alert('CONFIGURAÇÃO');

        Alert.alert(
            "ALERTA ! ! ! ",
            "Você quer realmente Deslogar?",
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
              },
              { text: "Sair", onPress: () => signOut() }
            ],
            { cancelable: false }
          );
      
    }
    function handleSettings(){
        Alert.alert('Configuração');
    }

    // useEffect( () => {
    //     async function loadItems() {
    //         const response = await api.post('/sessions', {
    //             headers: {
    //                 email: _id
    //             }
    //         })

    //                  // NOT BEST SOLUTION
    //             // const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

    //              //setUsers(shuffleArray(response.data))
    //         setItems(response.data)
    //     }
    //     loadItems()
    // }, [_id]);

    return(
        
    // <Screen>
         <ProfileBox >
             
                <Icon name = 'user-circle' size = {80}/> 
            <View>
                <InfoTextWhite >{user.name}</InfoTextWhite>
                <InfoTextWhite >{user.whatsapp}</InfoTextWhite>
                <InfoTextWhite >{user.uf}</InfoTextWhite>
                <InfoTextWhite >{user.city}</InfoTextWhite>
            </View>
            <IconsProfile>
                <TouchableOpacity onPress={handleSignOut}>
                    <MaterialCommunityIcons name="logout" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSettings}>
                    <SimpleLineIcons name="settings" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePerfilEdit}>
                    <FontAwesome5 name="user-edit" size={30} color="black" />
                </TouchableOpacity>
            </IconsProfile>
        </ProfileBox>

    
    // </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    topPerfil:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#008B8B'
    },
    row:{
        flexDirection: 'row',
        // backgroundColor:'#ddd'
        // alignItems: 'flex-start'
    },
    rowButtons:{
        flexDirection: 'row',
        backgroundColor:'#ddd'
    },
    whatsApp:{
        justifyContent:'center'
    },
    icons:{
        // paddingTop: 0,
        // flexDirection: 'row',
        alignSelf:'baseline',
        justifyContent: 'space-around',
        
    },
    input:{
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize: 16,
        color: '#FFF',
        height: 30,
        fontWeight: 'bold', 
    },

    button: {
        // flex: 0,
        margin: 5,
        // paddingTop:-10,
        // height: 80,
        alignItems: 'flex-end',
        alignSelf: 'flex-start'
        // justifyContent: 'space-evenly',

        
    },
    optionButton: {
        
        margin: 10,
        paddingLeft:'10%',
        paddingRight:'10%',
        // justifyContent: '',
        alignItems: 'center',
        // borderRadius: 25,
        
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})