import React ,{useState,useEffect}from 'react';
import { Image,Linking, View, ScrollView, Text, StyleSheet, Dimensions ,ActivityIndicator} from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';

import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import {useRoute} from '@react-navigation/native'
// import api from '../services/api';
import api from '../services/api';


import {ButtonGreen,ViewDetail,InputSearch,ImageView,SearchBox,ScrollItemBox,MineBox,BorderScreen,ImageContainer,
  DescriptionText,MineImage,TendersPicture,TendersImage,TendersImage2,TitleItem,ImagesContainer,ButtonText,
  Separator,ViewRow,ImgItem,InfoTextBlack,InfoTextGrey,DescriptionView,TendersBox} from '../components'

import { useAuth } from '../contexts/auth'

import { showMessage } from "react-native-flash-message";


export default function ItemDetails({navigation}) {
  const {user} = useAuth();


    const route = useRoute();
    const [items,setItems] = useState([]);

    const [isMatch,setMatch] =useState(false);

    const params = route.params;


      useEffect(()=>{
        console.log(params.tenderTargedId),
        console.log(params.tenderItemId),
        //  api.get(`/items/showSwap/${params.tenderTargedId}/${params.tenderItemId}`)
         api.get(`/items/showSwap/${params.tenderItemId}/${params.tenderTargedId}`)

        .then(response => {
          setItems(response.data);
        
        })
         api.get(`/items/showMatchSwap/${params.tenderItemId}/${params.tenderTargedId}`)
         .then(response => {
          setMatch(response.data);


        })
        },[]);
    
    if(!items){
        return (
          <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
          <ActivityIndicator size = "large" color = "#999" />
        </View>
        );
    }
    function handleEnterWhatsApp(whatsapp) {
      Linking.openURL(`https://api.whatsapp.com/send?phone=${whatsapp}`)

    }
    
  return (   
  <>
    { items.map((item) => (
    //  <Text style={styles.title}>{item.item_id.name_item}</Text>
     
    
  
  
    <ScrollView>
       <BorderScreen>
    <TitleItem>{item.targed_item_id.name_item}</TitleItem>


      <ImagesContainer >
        <ScrollView horizontal pagingEnabled>
            {item.targed_item_id.images.map(image => {
                return (
                    <ImageContainer 
                    key={image.id}
                    source={{ uri: image.url }} />
                );
            })}
        </ScrollView>
      </ImagesContainer>
      <ViewDetail> 
      <TitleItem>Informações:</TitleItem>
      <Separator  />
            <DescriptionText>Descrição: {'\n '+ item.targed_item_id.description}</DescriptionText>
            <DescriptionText>Categoria: {item.targed_item_id.category}</DescriptionText>
            {/* <Text style={styles.description}>{params.itemId}</Text>                 */}
            

           
        {isMatch?
          <>
          <Text/>
          <TitleItem >Contato:</TitleItem>
          <Separator  />
          <DescriptionText>Nome: {item.targed_item_id.user.name}</DescriptionText>

          <DescriptionText>Telefone: +{item.targed_item_id.user.whatsapp}</DescriptionText>

              


          <ButtonGreen 
            onPress={()=>{handleEnterWhatsApp(item.targed_item_id.user.whatsapp)}}>
            <FontAwesome name="whatsapp" size={30} color="#FFF" />
            <ButtonText> Entrar em contato</ButtonText>
          </ButtonGreen>
    
          <DescriptionText >Entre em contato para trocar com seu</DescriptionText>
           </>        
          :
          <>
          <Separator  />
          <DescriptionText >Liberaremos o contato quando a outra pessoa também tiver interesse em seu</DescriptionText>
          </>
          }
          
          <MineBox key = {item.item_id.item_id}>
            <ViewRow>
               <MineImage>
                   {item.item_id.images.map(image => {
                   return (
                   <ImgItem source={{ uri: image.url }} />
                   );
               })}
              </MineImage>
           
           <DescriptionView >
               <InfoTextBlack >{item.item_id.name_item}</InfoTextBlack>
               
           </DescriptionView>   
           </ViewRow> 
           </MineBox>  
  

   
        
        
       </ViewDetail>
       </BorderScreen>
     </ScrollView>

    ))}
      
    
   </>
  )
}