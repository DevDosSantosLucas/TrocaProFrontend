import React ,{useState,useEffect}from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions ,ActivityIndicator} from 'react-native';

import { Feather, FontAwesome } from '@expo/vector-icons';

import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import {useRoute} from '@react-navigation/native'
// import api from '../services/api';
import api from '../services/api';

import {BorderScreen} from '../components';

import { useAuth } from '../contexts/auth'

import { showMessage } from "react-native-flash-message";


export default function ItemDetails({navigation}) {
  const {user} = useAuth();


    const route = useRoute();
    const [items,setItems] = useState([]);

    const [isSelected,setSelected] =useState(false);

    const params = route.params;


      useEffect(()=>{
        console.log(params.tenderTargedId),
        console.log(params.tenderItemId),
         api.get(`/items/showSwap/${params.tenderTargedId}/${params.tenderItemId}`)
        //  api.get(`/items/showSwap/${params.tenderItemId}/${params.tenderTargedId}`)

        .then(response => {
          setItems(response.data);
          console.log("teste: " ,items)

          })
        },[]);
    
    if(!items){
        return (
          <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
          <ActivityIndicator size = "large" color = "#999" />
        </View>
        );
    }
    
    
  return (   <>
    <View>
     {/* <Text style={styles.title}>{items.item_id}</Text> */}
      
    </View>
  </>
  
    // <ScrollView style={styles.container}>
    //    <BorderScreen>
    // <Text style={styles.title}>{items.targed_item_id.name_item}</Text>
    // <Text style={styles.title}>{items.item_id.name_item}</Text>


    //   <View style={styles.imagesContainer}>
    //     <ScrollView horizontal pagingEnabled>
    //         {items.targed_item_id.images.map(image => {
    //             return (
    //                 <Image 
    //                 key={image.id}
    //                 style={styles.image} 
    //                 source={{ uri: image.url }} />
    //             );
    //         })}
    //     </ScrollView>
    //   </View>

    //   <View style={styles.detailsContainer}>
     
        
    //     <View style={styles.separator} />

    //     <Text style={styles.title}>Instruções para visita</Text>
    //         <Text style={styles.description}>{items.targed_item_id.description}</Text>
    //         <Text style={styles.description}>{items.targed_item_id.category}</Text>
    //         {/* <Text style={styles.description}>{params.itemId}</Text>                 */}
            

           
    //     {items.targed_item_id.user.name?
    //       <>
    //       <Text style={styles.title}>CONTATO</Text>
    //       <Text style={styles.description}>{items.targed_item_id.user.name}</Text>

    //       <Text style={styles.description}>{items.targed_item_id.user.whatsapp}</Text>

              


    //       <RectButton style={styles.contactButton} onPress={() => {}}>
    //         <FontAwesome name="whatsapp" size={30} color="#FFF" />
    //         <Text style={styles.contactButtonText}>Entrar em contato</Text>
    //       </RectButton>
    //        <MineBox key = {items.item_id.item_id}>
    //            <MineImage>
    //                {items.item_id.images.map(image => {
    //                return (
    //                <ImgItem source={{ uri: image.url }} />
    //                );
    //            })}
    //           </MineImage>
           
    //        <DescriptionView >
    //            <InfoTextBlack >{items.item_id.name_item}</InfoTextBlack>
               
    //        </DescriptionView>    
    //        </MineBox>   
    //        </>        
    //       :
    //       <View/>
    //       }
  

   
        
        
    //    </View>
    //    </BorderScreen>
    //  </ScrollView>
   
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