import React, { useEffect ,useState} from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity ,Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";

import * as ImagePicker from 'expo-image-picker';
import api from '../services/api';
import{Loading,Screen,Img,LoginBox,Input,ButtonSend,InputLong,ButtonText} from '../components'
import {useAuth} from '../contexts/auth';
import RNPickerSelect from 'react-native-picker-select'
import {update} from './LookingFor'
import { MaterialIcons } from '@expo/vector-icons';
import {BorderScreen} from '../components'



export default function AddItems() {
   const {user,signOut} = useAuth();

    const [name,setName] =useState('');
    const [description,setDescription] =useState('');
    const [price,setPrice] =useState('');
    const [category,setCategory] =useState('');
    const [images, setImages] = useState([]);
    
    const pickerRef = React.useRef()
    const navigation = useNavigation();

    const route = useRoute();
    const params = route.params ;
   
    async function handleCreateItem(){

    //   useEffect(()=>{
   
    

       
    // },[]);

        try{
        const data = new FormData();
        data.append('user_id',user.user_id);
        data.append('name_item',name);
        data.append('category', category);
        data.append('description', description);
        data.append('price', String(price));

        images.forEach((image, index) =>{
            data.append('images',{
                name: `image_${index}.jpg`,
                type: 'image/jpg',
                uri: image,
            })
        })
        await api.post('items/create',data)
        
        setName('')
        setDescription('')
        setPrice(0)
        setCategory('')
        setImages([])
        // setLoading(true)
        navigation.navigate('NavTabs');
        showMessage({
          message: 'item adicionado com sucesso!',
          type: 'success'
      })
      }
      catch(error){
        showMessage({
          message: 'Erro ao cadastrar! \nPor favor, informe os dados corretamente!',
          //error.response.data,
          type: 'warning'
      })
      }
    } 
  
  async function handleSelectImages(){
    const {status} = await ImagePicker.requestCameraRollPermissionsAsync();
    
    if(status !== 'granted'){
        alert ('Ops! Precisamos de acesso às suas fotos...');
        return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if(result.cancelled){
        return;
    }
   
    const{uri: image } = result;
    
    setImages([...images,image]);
}

  return (
    
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
    <BorderScreen>
      <Text style={styles.title}>Trocar um Produto</Text>

      {/* <Text style={styles.label}>Nome</Text>      */}
        
      <Text style={styles.label}>Fotos</Text>
      <View style = { styles.uploadedImagesContainer}>
          {
              images.map(image =>{
                  return(
                    <Image 
                     key = {image}
                     source = {{uri: image}}
                     style = {styles.uploadedImage}
                    />
                  );    
              })
          }
      </View>

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImages}>
      <MaterialIcons name="add-a-photo" size={30} color="#008B8B" />
      </TouchableOpacity>
        <Input
        name="itemName"
        placeholder="Nome de seu produto"
        value={name}
        onChangeText = {setName}
        />

<View>
       <TouchableOpacity
        onPress={() => {
           if (pickerRef.current) {
             pickerRef.current.togglePicker(true)
           }
        }}>
      </TouchableOpacity>
      <RNPickerSelect
          ref={r => pickerRef.current = r}
          value={price}
          placeholder={{ label: 'Insira um preço aproximado ', value: price }}
          onValueChange={price => setPrice(price)}

          items={[                       
             { label: '    0,00 R$ -   50,00 R$ ', value:  1 },
             { label: '   50,00 R$ -  100,00 R$ ', value:  2 }, 
             { label: '  100,00 R$ -  150,00 R$ ', value:  3 }, 
             { label: '  150,00 R$ -  200,00 R$ ', value:  4 }, 
             { label: '  200,00 R$ -  250,00 R$ ', value:  5 }, 
             { label: '  250,00 R$ -  300,00 R$ ', value:  6 }, 
             { label: '  300,00 R$ -  350,00 R$ ', value:  7 }, 
             { label: '  350,00 R$ -  400,00 R$ ', value:  8 }, 
             { label: '  400,00 R$ -  450,00 R$ ', value:  9 }, 
             { label: '  450,00 R$ -  500,00 R$ ', value: 10 }, 
             { label: '  500,00 R$ -  550,00 R$ ', value: 11 }, 
             { label: '  550,00 R$ -  600,00 R$ ', value: 12 }, 
             { label: '  600,00 R$ -  650,00 R$ ', value: 13 }, 
             { label: '  650,00 R$ -  700,00 R$ ', value: 14 }, 
             { label: '  700,00 R$ -  750,00 R$ ', value: 15 }, 
             { label: '  750,00 R$ -  800,00 R$ ', value: 16 }, 
             { label: '  800,00 R$ -  850,00 R$ ', value: 17 }, 
             { label: '  850,00 R$ -  900,00 R$ ', value: 18 }, 
             { label: '  900,00 R$ -  950,00 R$ ', value: 19 }, 
             { label: '  950,00 R$ - 1000,00 R$ ', value: 20 }, 
             { label: ' OUTRO VALOR ', value: 21 }, 

            
          ]} 
        />
      </View>
        <Input
        name="category"
        placeholder="Informe a categoria"
        value={category}
        onChangeText = {setCategory}
        />
        <InputLong
        name="description"
        placeholder="Descreva sobre seu Produto"
        value={description}
        onChangeText = {setDescription}
        multiline
        />

      


      <ButtonSend  onPress={handleCreateItem}>
        <ButtonText>Publicar</ButtonText>
      </ButtonSend>

      </BorderScreen>
    </ScrollView>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

  uploadedImagesContainer:{
    flexDirection: 'row',
  },
  uploadedImage:{
    width: 64,
    height: 64,
    borderRadius: 20 ,
    marginBottom: 32,
    marginRight:8
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
  }
})