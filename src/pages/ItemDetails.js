import React ,{useState,useEffect}from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions ,ActivityIndicator} from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';

import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import {useRoute} from '@react-navigation/native'
// import api from '../services/api';
import api from '../services/api';

import {BorderScreen,TitleItem,ImagesContainer,ImageContainer,ViewDetail,
        ButtonGreen,TextButtonGreen} from '../components';

import { useAuth } from '../contexts/auth'

import { showMessage } from "react-native-flash-message";


export default function ItemDetails({navigation}) {
  const {user} = useAuth();


    const route = useRoute();
    const [targedItem,setTargedItem] = useState();
    const [item,setItem] = useState();

    const [isSelected,setSelected] =useState(false);

    const params = route.params;

 
    useEffect(()=>{
      api.get(`items/index/${params.targedId}`)
      .then(response => {
        setTargedItem(response.data);
        })
      },[]);
    // },[params.targedId]);
    
    if(!targedItem){
        return (
          <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
          <ActivityIndicator size = "large" color = "#999" />
      </View>
        );
    }
    async function handleTrySwapItem(){
      try{
        const request = await api.post('items/tryswap', {
          item_id : params.itemId,
	        targed_item_id:targedItem.item_id,
	        user_id : user.user_id,
          });

          // console.log("TESTE",
          //   "item_id" , params.itemId,
	        // "targed_item_id",targedItem.item_id,
	        // "user_id" , user.user_id,
          // )
          showMessage({
            message:  request.data,
            description:"Espero que façam um ótimo negócio!",
            type: "default",
            backgroundColor: "#008B8B", // background color
            color: "#FFF", // text color
          });
        // return request.data
        // navigation.navigate("Search"); 
          
      }catch(error){
        // console.log(error.request )
        
        showMessage({
            message: 'ALGO DEU ERRADO !',
            description: error.request,
            type: 'warning'
        })

      } 

    }
    
  return (
   
  
       <BorderScreen>
       
    <TitleItem> {targedItem.name_item}</TitleItem>

      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
            {targedItem.images.map(image => {
                return (
                    <ImageContainer 
                    key={image.image_id}    
                    source={{ uri: image.url }}/>
                );
            })}
        </ScrollView>
      </ImagesContainer>

      <ViewDetail>     
      <TitleItem style={styles.title}>Informações:</TitleItem>
        <View style={styles.separator} />

        
            <Text style={styles.description}>Descrição: {targedItem.description}</Text>
            <Text style={styles.description}>Categoria: {targedItem.category}</Text>
            <Text style={styles.description}>Faixa de Preço: {targedItem.price}</Text>

            


        {params.itemId?
        <ButtonGreen onPress={handleTrySwapItem}>

        <FontAwesome name="handshake-o" size={30} color="#FFF" />
          <TextButtonGreen style={styles.TextButtonGreen}>TENTAR TROCAR!</TextButtonGreen>
        </ButtonGreen>
        :
        <View/>
        }
 
      </ViewDetail>
      
      </BorderScreen>
  
    
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4D6F80',
    fontSize: 30,
  },

  description: {
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
    marginTop: 40,
    backgroundColor: '#E6F7FB',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },



  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    // marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },
  scheduleItemRed: {
    backgroundColor: '#FEF6F9',
    borderWidth: 1,
    borderColor: '#FFBCD4',
    borderRadius: 20,
  },

  scheduleText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: '#5C8599'
  },
  scheduleTextRed: {
    color: '#FF669D'
  },

  scheduleTextGreen: {
    color: '#37C77F'
  },

  contactButton: {
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 40,
  },

  contactButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  }
})