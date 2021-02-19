import React ,{useState,useEffect}from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions,Linking } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import {useRoute} from '@react-navigation/native'
import api from '../services/api';

import {Screen,MineBox,MineImage,DescriptionView,InfoTextBlack} from '../components'

export default function Item() {
  // const [item,setItem] = useState(); 
  const [targedItem,setTargedItem] = useState();


    const route = useRoute();
    

    const params = route.params ;


    useEffect(()=>{
        api.get(`items/index/${params.item_id}`)
        .then(response => {
          // console.log(params.targedItem.name_item);
          setItem(response.data);
        })
    // },[]);
},[params.item_id]);


    // if(!targedItem){
    //     return (
    //         <View style = {styles.container}>
    //             <Text style = {styles.description}>Carregando ...</Text>
    //         </View>
    //     );
    // }

  return (
      <Screen>
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
      <Text style={styles.title}> {targedItem.name_item}</Text>
        <ScrollView horizontal pagingEnabled>
            {targedItem.images.map(image => {
                return (
                    <Image 
                    key={image.image_id}
                    style={styles.image} 
                    source={{ uri: image.url }} />
                );
            })}
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>

  <Text style={styles.description}>{targedItem.description}</Text>

            <Text style={styles.description}>{targedItem.price}</Text>
            <Text style={styles.description}>{targedItem.category}</Text>
            <View style={styles.separator} />
            <Text style={styles.title}>Contato:</Text>

            {/* <View style={styles.separator} /> */}

            <Text style={styles.description}>{targedItem.user.name}</Text>
            <Text style={styles.description}>{targedItem.user.uf}</Text>
            <Text style={styles.description}>{targedItem.user.city}</Text>


      

        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </ScrollView>

    {/* ITEM  */}
    {/* <RectButton onPress ={()=>handleFilterItem(item.item_id)}>                        */}

<MineBox >
 {/* key = {item.item_id}> */}
    <MineImage>
        {/* {item.images.map(image => {
        return (
        <ImgItem source={{ uri: image.url }} />
        );
    })} */}
   </MineImage>

<DescriptionView >
    {/* <InfoTextBlack >{item.name_item}</InfoTextBlack>              */}
</DescriptionView>    
     <Text >Alterar</Text>
</MineBox>           


{/* </RectButton> */}
    </Screen>
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

  routesText: {
    color: '#0089a5'
  },

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    marginVertical: 40,
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