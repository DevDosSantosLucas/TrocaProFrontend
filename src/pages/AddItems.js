import React, { useEffect ,useState} from 'react';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity ,Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import { showMessage, hideMessage } from "react-native-flash-message";

import * as ImagePicker from 'expo-image-picker';
import api from '../services/api';
import{UploadedImagesContainer,PlusScreen,UploadedImage,ImagesInput,InputPicker,TitleItem,Label,Separator,Input,ButtonSend,InputLong,ButtonText} from '../components'
import {useAuth} from '../contexts/auth';
import RNPickerSelect from 'react-native-picker-select'
import {update} from './LookingFor'
import { MaterialIcons ,AntDesign} from '@expo/vector-icons';



export default function AddItems() {
   const {user,signOut} = useAuth();

    const [count,setCount]=useState(0);
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

        try{
        const data = new FormData();
        data.append('user_id',user.user_id);
        data.append('name_item',name);
        data.append('category', category);
        data.append('description', description);
        data.append('price', price);

        images.forEach((image, index) =>{
            data.append('images',{
                name: `image_${index}.jpg`,
                type: 'image/jpg',
                uri: image,
            })
        })
        await api.post('items/create',data)

        setCount(0)
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setImages([])
        // setLoading(true)
        navigation.navigate('Search');
        showMessage({
          message: 'item adicionado com sucesso!',
          type: 'success'
      })
      }
      catch(error){
        console.log(error,name,price,category)
        showMessage({
          message: 'Erro ao cadastrar! \nPor favor, informe os dados corretamente!',
          // message: error.response.data,
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
    setCount(count+1)
    setImages([...images,image]);
  }
  function handleRemoveImages(){
  setImages([])
  setCount(0)
  }

  return (
    <>
    <Text/>
    <Separator/>
    <TitleItem>Trocar um Produto</TitleItem>
    <Separator/>
   
    <PlusScreen >
    
    
        
      <Label>Fotos {count}/5</Label>
      <UploadedImagesContainer horizontal paging>
          {
              images.map(image =>{
                  return(
                    
                    <UploadedImage 
                     key = {image}
                     source = {{uri: image}}
                    />
                  );    
              })
          }
      </UploadedImagesContainer>
      {count < 5 ?
      <ImagesInput  onPress={handleSelectImages}>
      <MaterialIcons name="add-a-photo" size={30} color="#008B8B" />
      </ImagesInput>
      :

      <ImagesInput  onPress={handleRemoveImages}>
      {/* <MaterialIcons name="add-a-photo" size={30} color="#CCC" /> */}
      <AntDesign name="delete" size={20} color="red" />
      <Label>Remover todas as imagens</Label>
      </ImagesInput>
      }

      <Label>Nome</Label>
        <Input
        name="itemName"
        placeholder="Nome de seu produto"
        value={name}
        onChangeText = {setName}
        />

      <Label>Preço</Label>
      <InputPicker>
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
          placeholder={{ label: 'Insira um preço aproximado: ', value: price }}
          onValueChange={price => setPrice(price)}

          items={[                       
             { label: 'De R$   0,00 até R$   49,00 ', value:'De-R$0,00-a-R$49,00'    },
             { label: 'De R$  50,00 até R$   99,00 ', value:'De-R$50,00-a-R$99,00'   }, 
             { label: 'De R$ 100,00 até R$  149,00 ', value:'De-R$100,00-a-R$149,00' }, 
             { label: 'De R$ 150,00 até R$  199,00 ', value:'De-R$150,00-a-R$199,00' }, 
             { label: 'De R$ 200,00 até R$  249,00 ', value:'De-R$200,00-a-R$249,00' }, 
             { label: 'De R$ 250,00 até R$  299,00 ', value:'De-R$250,00-a-R$299,00' }, 
             { label: 'De R$ 300,00 até R$  349,00 ', value:'De-R$300,00-a-R$349,00' }, 
             { label: 'De R$ 350,00 até R$  399,00 ', value:'De-R$350,00-a-R$399,00' }, 
             { label: 'De R$ 400,00 até R$  449,00 ', value:'De-R$400,00-a-R$449,00' }, 
             { label: 'De R$ 450,00 até R$  499,00 ', value:'De-R$450,00-a-R$499,00' }, 
             { label: 'De R$ 500,00 até R$  549,00 ', value:'De-R$500,00-a-R$549,00' }, 
             { label: 'De R$ 550,00 até R$  599,00 ', value:'De-R$550,00-a-R$599,00' }, 
             { label: 'De R$ 600,00 até R$  649,00 ', value:'De-R$600,00-a-R$649,00' }, 
             { label: 'De R$ 650,00 até R$  699,00 ', value:'De-R$650,00-a-R$699,00' }, 
             { label: 'De R$ 700,00 até R$  749,00 ', value:'De-R$700,00-a-R$749,00' }, 
             { label: 'De R$ 750,00 até R$  799,00 ', value:'De-R$750,00-a-R$799,00' }, 
             { label: 'De R$ 800,00 até R$  849,00 ', value:'De-R$800,00-a-R$849,00' }, 
             { label: 'De R$ 850,00 até R$  899,00 ', value:'De-R$850,00-a-R$899,00' }, 
             { label: 'De R$ 900,00 até R$  949,00 ', value:'De-R$900,00-a-R$949,00' }, 
             { label: 'De R$ 950,00 até R$ 1000,00 ', value:'De-R$950,00-a-R$1000,00'}, 
             { label: ' OUTRO VALOR ',             value:'OUTRO-VALOR' }, 

            
          ]} 
        />
      </InputPicker>

      <Label>Categoria</Label>
      <InputPicker>
       <TouchableOpacity
        onPress={() => {
           if (pickerRef.current) {
             pickerRef.current.togglePicker(true)
           }
        }}>
      </TouchableOpacity>
      <RNPickerSelect
          ref={r => pickerRef.current = r}
          value={category}
          placeholder={{ label: 'Selecione uma categoria: ', value: category }}
          onValueChange={category => setCategory(category)}

          items={[                       
             { label: ' ACESSÓRIOS '       ,value:' ACESSÓRIOS '       },
             { label: ' ELETRODOMÉSTICOS ' ,value:' ELETRODOMÉSTICOS ' }, 
             { label: ' ELETRONICOS '      ,value:' ELETRONICOS '      }, 
             { label: ' ESPORTE '          ,value:' ESPORTE '},  
             { label: ' INSTRUMENTOS '     ,value:' INSTRUMENTOS '     }, 
             { label: ' LIVROS E REVISTAS ',value:' LIVROS E REVISTAS '}, 
             { label: ' MATERIAL ESCOLAR ' ,value:' MATERIAL ESCOLAR ' }, 
             { label: ' MODA E BELEZA'     ,value:' MODA E BELEZA '    }, 
             { label: ' MÓVEIS '           ,value:' MÓVEIS '           }, 
             { label: ' ROUPAS E CALÇADOS ',value:' ROUPAS E CALÇADOS '},  
             { label: ' OUTRA  CATEGORIA ' ,value:' OUTRA  CATEGORIA ' }, 
          ]} 
        />
      </InputPicker>
      
       

      <Label>Descrição</Label>
        <InputLong
        name="description"
        placeholder="Descreva sobre seu Produto"
        value={description}
        onChangeText = {setDescription}
        multiline
        />

      


      <ButtonSend  onPress={handleCreateItem}>
        <ButtonText>Anunciar</ButtonText>
      </ButtonSend>
      <Separator/>

      
    </PlusScreen>
</>
  )
}
