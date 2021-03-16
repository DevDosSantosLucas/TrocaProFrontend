

import * as React from 'react'

// import styled from 'styled-components'
import { useFormik } from 'formik'

import{Loading,Label,ScreenLogin,Img,LoginBox,Input,ButtonSend,ButtonBack,ButtonText,ImageLogo} from '../components/index'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
//   ActivityIndicator,
} from 'react-native'

import { useNavigation, useRoute } from "@react-navigation/native";

import * as api from '../services/api'
// import { useAuth } from '../context/auth'
import { useAuth } from '../contexts/auth'

import { showMessage, hideMessage } from "react-native-flash-message";

export const SignIn  = () => {
        const {signed,user,signIn} = useAuth();
//   const [state, setState] = useState(false)
//   const [, { login }] = useAuth()
      

  const navigation = useNavigation();
  // const route = useRoute();

  const formik = useFormik({
    initialValues: {
      whatsapp: '',
      password: '',
    },

    
    onSubmit: async data => {
      try {
        // const  data = await api.login(values)
        console.log("teste:",data)
        // if( whatsapp == ''| password=='')
        //   showMessage({
        //     message: 'insira seu login corretamente',
        //     type: 'danger'
        //   })
        
        // else
         signIn(data)
        // navigation.navigate("Profile");
        // showMessage({
        //     message: `${user} login efetuado com sucesso!`,
        //     type: 'danger'
        // })
      } catch (error) {
        showMessage({
          message: 'insira seu usuário',
          type: 'danger' 
      })
        console.log("login Failed Test")
        // setState('whatsapp ou senha inválidos')
      }
    },
  })
  
  // function handleSignIn(){

  //   // const data = new FormData();
  //   // data.append('whatsapp',whatsapp);
  //   // data.append('password',password);

  //   signIn(whatsapp,password)
  // }
  function handleSignUp(){
    navigation.navigate("SignUp");
  }

  return (
    <ScreenLogin>
       <ImageLogo 
        source={require('../../assets/splash.png')}/>
        
      <LoginBox>
        

        {/* {state && <Text>{state}</Text>} */}
        <Label>Número do WhatsApp (Só números)</Label>
        <Input
          name="whatsapp"
          placeholder="ex : ( 5516999999999 )"
          keyboardType ={"numeric"}
          value={formik.values.whatsapp}
          onChangeText={formik.handleChange('whatsapp')}
        />
        
        <Label>Senha</Label>
        <Input
          name="password"
          placeholder="Digite sua senha"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />

        <ButtonSend onPress={formik.handleSubmit}>
         
            
       
            <ButtonText>Entrar</ButtonText>
          
        </ButtonSend>
        <ButtonBack onPress={handleSignUp}>
            <ButtonText>CADASTRAR</ButtonText>
          
        </ButtonBack>

      </LoginBox>
    </ScreenLogin>
  )
}
export default SignIn;