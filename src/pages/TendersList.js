import React,{useEffect,useState}from 'react';

import {View,Button,StyleSheet,Text,ScrollView, ActivityIndicator} from 'react-native';
// import {signIn} from '../services/auth';

import { AntDesign } from '@expo/vector-icons';

import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';

import {useAuth} from '../contexts/auth';

import api from '../services/api';

import {TenderBoxImages,ImageView,SearchBox,ScrollItemBox,MineBox,
    MineImage,TendersPicture,TendersImage,TendersImage2,
    ImageBox,ImgItem,InfoTextBlack,InfoTextGrey,DescriptionView,TendersBox} from '../components'

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems : 'center'},
});



const Tenders = ({navigation})=>{

    // const [items,setItems] = useState([]);
    const [targedItems,setTargedItems] = useState([]);

    const {user,signOut} = useAuth();
   
    async function handleItem(tenderItemId,tenderTargedId){
     console.log("VER PRODUTO NEGOCIADO");

     navigation.navigate("TendersItems",{
        tenderTargedId,
        tenderItemId,
        
     });
    
    }

    useEffect(()=>{
        api.get(`/items/showSwapUser/${user.user_id}`)
        .then(response => {
            setTargedItems(response.data);
        })
    },[targedItems]);
    //   },[params.item_id]);
  
      if(!targedItems){
          return (
            <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
            {/* <ActivityIndicator size = "large" color = "#999" /> */}
            <Text>NADA ENCONTRADO</Text>
            </View>
                 
          );
      }
    //   if(targedItems){
    //     api.get(`/items/showSwapUser/${user.user_id}`)
    //     .then(response => {
    //     setTargedItems(response.data);
    //     }) 
    //   }
    return(

    
         <ScrollView>
         { targedItems.map((targedItem) => (
            <RectButton 
                onPress ={()=>handleItem(targedItem.item_id.item_id,targedItem.targed_item_id.item_id)}>                       
                 <TendersBox key = {targedItem.item_id.item_id}>
                     <TenderBoxImages>
                    <TendersImage>
                        {targedItem.item_id.images.map(image => {
                            // <View key ={index}></View>
                        // if(index=0){
                        return (
                            <>
                        <TendersPicture source={{ uri: image.url }} />
                        {/* <InfoTextBlack > {targedItem.item_id.name_item}</InfoTextBlack> */}
                        </>
                        );
                        // }
                    })}
                </TendersImage>
                <AntDesign name="retweet" size={90} color="black" style={{marginTop:'10%'}}/>
                <TendersImage>
                        {targedItem.targed_item_id.images.map((image) => {
                            
                        return (
                            <View>
                            {/* //  key ={index} */}
                        <TendersPicture source={{ uri: image.url }} />
                        {/* <InfoTextBlack > {targedItem.targed_item_id.name_item}</InfoTextBlack> */}
                             </View>
                        );
                    
                    })}
                </TendersImage>

                {/* <AntDesign name="retweet" size={90} color="black"style={{right: '110%'}} /> */}

                </TenderBoxImages>
                </TendersBox> 
            </RectButton>

            ))}
        
    
         
        </ScrollView> 
    ); 
    
    

}
export default Tenders;