

import  React,{useState} from 'react'
// import { useState } from 'react'
// import styled from 'styled-components'
import { useFormik } from 'formik'
import RNPickerSelect from 'react-native-picker-select'


import{Loading,Screen,Img,LoginBox,Input,ButtonSend,ButtonText} from '../components'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
//   ActivityIndicator,
} from 'react-native'

import { useNavigation, useRoute } from "@react-navigation/native";

import { showMessage, hideMessage } from "react-native-flash-message";

import  api from '../services/api'
// import { useAuth } from '../context/auth'
import { useAuth } from '../contexts/auth'


export const SignUp  = () => {
        const {signIn} = useAuth();

        const [uf,setUf] =useState('') ;

        const pickerRef = React.useRef()

  const navigation = useNavigation();
  // const route = useRoute();


  const formik = useFormik({
    initialValues: {
      whatsapp: '',
      name:'',
      uf:'',
      city:'',
      password: '',
    },

    onSubmit: async data => {
      try {
        const  response = await api.post("signup",data)
        console.log("teste:",response.data)
        showMessage({
          message: 'Cadastro efetuado com sucesso!',
          type: 'success'
        })

        signIn(data)
        // navigation.navigate("Profile");
        
      } catch (error) {
        // console.log("login Failed Test")
        // setState('whatsapp ou senha inválidos')
        showMessage({
          message: 'Erro ao cadastrar! \nPor favor, informe os dados corretamente!',
          //error.response.data,
          type: 'warning'
      })
      }
    },
  })

  return (
    <Screen>
      <LoginBox>
        
        <Input
          keyboardType={'numeric'}
          name="whatsapp"
          placeholder="Digite seu whatsapp"
          value={formik.values.whatsapp}
          onChangeText={formik.handleChange('whatsapp')}
        />

        <Input
          name="name"
          placeholder="Digite seu nome"
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
        />

        {/* <Input
          name="uf"
          placeholder="Digite seu estado"
          value={formik.values.uf}
          onChangeText={formik.handleChange('uf')}
        /> */}

      <View>
       <TouchableOpacity onPress={() => {
           if (pickerRef.current) {
             pickerRef.current.togglePicker(true)
           }
        }}>
      </TouchableOpacity>
      <RNPickerSelect
          ref={r => pickerRef.current = r}
          value={uf}//{formik.values.uf}
          placeholder={{ label: 'Selecione seu Estado', value: uf }}
          onValueChange={uf => setUf(uf)}

          items={[                       
             {label: 'AC', value: 'AC'}, 
             {label: 'AL', value: 'AL'}, 
             {label: 'AP', value: 'AP'}, 
             {label: 'AM', value: 'AM'}, 
             {label: 'BA', value: 'BA'}, 
             {label: 'CE', value: 'CE'}, 
             {label: 'DF', value: 'DF'}, 
             {label: 'ES', value: 'ES'}, 
             {label: 'GO', value: 'GO'}, 
             {label: 'MA', value: 'MA'}, 
             {label: 'MT', value: 'MT'}, 
             {label: 'MS', value: 'MS'}, 
             {label: 'MG', value: 'MG'}, 
             {label: 'PA', value: 'PA'}, 
             {label: 'PB', value: 'PB'}, 
             {label: 'PR', value: 'PR'}, 
             {label: 'PE', value: 'PE'}, 
             {label: 'PI', value: 'PI'}, 
             {label: 'RJ', value: 'RJ'}, 
             {label: 'RN', value: 'RN'}, 
             {label: 'RS', value: 'RS'}, 
             {label: 'RO', value: 'RO'}, 
             {label: 'RR', value: 'RR'}, 
             {label: 'SC', value: 'SC'}, 
             {label: 'SP', value: 'SP'}, 
             {label: 'SE', value: 'SE'}, 
             {label: 'TO', value: 'TO'}, 
            
          ]} 
        />
      </View>

        <Input
          name="city"
          placeholder="Digite sua cidade"
          autoCapitalize= {'characters'}
          value={formik.values.city}
          onChangeText={formik.handleChange('city')}
        />

        <Input
          name="password"
          placeholder="Digite sua senha"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />

        

        <ButtonSend onPress={formik.handleSubmit}>
         
            
       
            <ButtonText>CADASTRAR</ButtonText>
          
        </ButtonSend>
      </LoginBox>
    </Screen>
  )
}
export default SignUp;