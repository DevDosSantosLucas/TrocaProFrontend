import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, TextInput, StyleSheet, TouchableOpacity,Text} from 'react-native';
import  api from '../services/api';
// import {useNavigation} from '@react-navigation/native';

export default function Login({navigation}){

    // const navigation = useNavigation();
    
    const [email,setEmail  ]= useState('');
    const [password,setPassword]= useState('');

    useEffect(()=>{
        AsyncStorage.getItem('email').then(email =>{
            if(email){
                navigation.navigate('Main',{ email });
                navigation.navigate('NavTabs',{_id: _id});
                console.log('teste useEffect');
                console.log({_id});
            }
        })
    },[]);

    async function handleLogin(){
        const response = await api.post('/sessions',{
            email:email,
            password:password
        });
        const { _id } = response.data;
        console.log({_id});

        await  AsyncStorage.setItem('email',_id);

        navigation.navigate('NavTabs',{email: _id,password:_id});
        console.log('teste fora do useEffect');
        console.log('email: ');
        console.log({_id,email,password});
        // navigate('NavTabs');  
    }

    return (
        <View style = { styles.container}>
            
            <View style = { styles.form}>

                <TextInput style = {styles.input}
                placeholder = "Digite seu E-mail!"
                placeholderTextColor = "#999"
                keyboardType = "email-address"
                autoCapitalize = "none"
                autoCorrect = {false}
                    value = {email}
                    onChangeText= {setEmail}
                />

                <TextInput style = {styles.input}
                placeholder = "Digite sua Senha!"
                placeholderTextColor = "#999"
                type = "password"
                secure = {true}
                autoCapitalize = "none"
                autoCorrect = {false}
                secureTextEntry={true}
                    value = {password}
                    onChangeText= {setPassword}
                />

                <TouchableOpacity style = {styles.button}
                                     onPress = {handleLogin}>
                            <Text style = { styles.buttonText}>LOGAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 20
    },

    button: {
        height: 42,
        backgroundColor: "#008B8B",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})