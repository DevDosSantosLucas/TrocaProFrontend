

import  React,{useState} from 'react'
// import { useState } from 'react'
// import styled from 'styled-components'
import { useFormik } from 'formik'
import RNPickerSelect from 'react-native-picker-select'


import{Separator,TitleItem,Label,InputPicker,HeaderCuston,Img,LoginBox,Input,ButtonSend,ButtonText, PlusScreen} from '../components'
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,CheckBox,Alert,
//   ActivityIndicator,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";

import { showMessage, hideMessage } from "react-native-flash-message";

import  api from '../services/api'
// import { useAuth } from '../context/auth'
import { useAuth } from '../contexts/auth'


export default function SignUp   ()  {
        // const {signIn} = useAuth();
        const [whatsapp,setWhatsapp] = useState('') ; 
        const [name,setName] = useState('') ;
        const [city,setCity] = useState('') ;
        const [password,setPassword] = useState('') ;
        const [uf,setUf] = useState('') ;

        const [isSelected, setSelection] = useState(false);

        const pickerRef = React.useRef()

        const navigation = useNavigation();
        function handleTerms(){
          Alert.alert('Temos de Uso',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'+
          'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'+
          ' when an unknown printer took a galley of type and scrambled it to make a type'+
          ' specimen book. It has survived not only five centuries, but also the leap into'+
          ' electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s'+
          ' with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with'+
          'desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum');
      }

      async function handleSubmit() {
        if(!isSelected){
          Alert.alert('Ops','Precisa aceitar os Termos de uso para cadastrar!');
          return
        }

        try {
        const data = new FormData();
        data.append('whatsapp',whatsapp);
        data.append('name',name);
        data.append('uf', uf);
        data.append('city', city);
        data.append('password', password);
      
     

        const  response = await api.post('signup',data)
        console.log("teste:",response.data)
        showMessage({
          message: 'Cadastro efetuado com sucesso!',
          type: 'success'
        })

        // signIn(data)
        navigation.navigate("SignIn");
        
      } catch (error) {
        // console.log("login Failed Test")
        // setState('whatsapp ou senha inválidos')
        showMessage({
          message: 'Erro ao cadastrar! \nPor favor, informe os dados corretamente!',
          //error.response.data,
          type: 'warning'
      })
      
    
    }}
    function goBack() {
      navigation.navigate("SignIn");
    }

  return (
    <>
      <Text/>
    <Separator/>
    <HeaderCuston>
      <TouchableOpacity onPress ={goBack}>
    <AntDesign name="back" size={40} color="#008B8B" />
    </TouchableOpacity>
    <TitleItem>  Cadastrar</TitleItem>
    </HeaderCuston>
    <Separator/>

      <PlusScreen>
        
      <Label>Número do WhatsApp (Só números)</Label>

        <Input
          keyboardType={'numeric'}
          name="whatsapp"
          placeholder="ex : ( 5516999999999 )"
          value={whatsapp}
          onChangeText={setWhatsapp}

          // value={formik.values.whatsapp}
          // onChangeText={formik.handleChange('whatsapp')}
        />
      <Label>Nome</Label>

        <Input
          name="name"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}/>
           {/* value={formik.values.name} */}
          {/*  onChangeText={formik.handleChange('name')} */}

      <Label>UF</Label>

      <InputPicker>
       <TouchableOpacity onPress={() => {
           if (pickerRef.current) {
             pickerRef.current.togglePicker(true)
           }
        }}>
      </TouchableOpacity>
      <RNPickerSelect
          ref={r => pickerRef.current = r}
          value={uf}//{formik.values.uf}
          // selectedValue={formik.values.uf}
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
      </InputPicker>
      <Label>Cidade</Label>
        <Input
          name="city"
          placeholder="Digite sua cidade"
          autoCapitalize= {'characters'}
          value={city}
          onChangeText={setCity}
          // value={formik.values.city}
          // onChangeText={formik.handleChange('city')}
        />
      <Label>Senha</Label>

        <Input
          name="password"
          placeholder="Digite sua senha"
          // value={formik.values.password}
          // onChangeText={formik.handleChange('password')}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        
        <Separator/>

        {/* <ButtonSend onPress={formik.handleSubmit}> */}
  
         <HeaderCuston>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
        />
        <TouchableOpacity onPress ={handleTerms}>
        <Label>Termos de Uso(clique aqui!)</Label>
        </TouchableOpacity>



        </HeaderCuston>
        <Separator/>

        <ButtonSend onPress={handleSubmit}>
       
            <ButtonText>CADASTRAR</ButtonText>
          
        </ButtonSend>
               
    <Separator/>

      </PlusScreen>
    </>
  )
}