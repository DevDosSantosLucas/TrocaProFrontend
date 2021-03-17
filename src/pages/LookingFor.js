import React,{useEffect,useState}from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,StyleSheet, ScrollView, TextInput,Image,
        Text,ActivityIndicator ,ImageStore,Dimensions,RefreshControl} from 'react-native';

import {ImageView,SearchBox,ScrollItemBox,MineBox,MineImage,TitleItem,
    ImgItem1,NameItemView,ImageContainer, ImageBox,ImgItem,InfoTextBlack,InfoTextGrey,DescriptionView, Separator} from '../components'
import Icon from 'react-native-vector-icons/Ionicons';

import Filter from './Filter'
import api from '../services/api';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import {useAuth} from '../contexts/auth';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import Search from './Search';
import { AntDesign } from '@expo/vector-icons';



export default function LookingFor({  navigation }) {
 

    const {user,signOut,loading} = useAuth();
    // const [update,setUpdate] = useState(true);
    // const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);

    const [isItemFound,setItemFound]= useState(false);
    
    const [targedItems,setTargedItems] = useState([]);
    // const [targedItem,setTargedItem] = useState([]);

    const route = useRoute();
    const params = route.params ;
            
        useEffect(()=>{
            api.get(`items/index/${params.item_id}`)
            .then(response => {
                setItem(response.data);
            })
        },[]);
        //   },[params.item_id]);
      
          if(!item){
              return (
                <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
                <ActivityIndicator size = "large" color = "#999" />
                <Text>NADA ENCONTRADO</Text>
                </View>
                     
              );
          }
         
          

            // const data = new FormData();
            // data.append('user_id',user.user_id);
            // data.append('price',item.price);
            // console.log(data)
            let user_id = user.user_id;
            let price = item.price;
            api.get(`items/showPrices/${user.user_id}/${item.price}`)///${user.city}`)
            // api.get("/items/showPrices",{user_id,price})
            // api.get("items/show?page=1")


            .then(response => {
            setTargedItems(response.data);
            // console.log("XXXeeeeeXD:",targedItems)
            
            }) 
          
    
  

  
    async function handleItem(targed_item_id){
        console.log("EnterItem");
        navigation.navigate("ItemDetails",{
            targedId:targed_item_id,
            itemId: item.item_id});
    }

    async function handleSelectFilterItem(){
        // setSelectedItem(false)
        navigation.navigate("Filter");
        

    }
    
    return (  
    <>
    
        
        <ScrollItemBox >  
        <TitleItem> Items Relacionados:</TitleItem>
            <View>
            
                
            { targedItems.map((targedItem) => (
                <>
                <MineBox >
           <DescriptionView >
               <InfoTextBlack >Selecionado:{'\n'}{item.name_item}</InfoTextBlack>
           </DescriptionView>    
           </MineBox> 
           <Separator />
            <RectButton onPress ={()=>handleItem(targedItem.item_id)}>     
                                  
                 <ImageBox key = {targedItem.item_id}>
                     
                     {/* <ImageBox1> */}
                    <ImageView>
                        {targedItem.images.map(image => {
                        return (
                        <ImgItem1 key ={image.image_id}source={{ uri: image.url }} />
                        );
                    })}
                    
                </ImageView>
              
                <DescriptionView >
                    <InfoTextBlack >{targedItem.name_item}</InfoTextBlack>
                    <InfoTextGrey numberOfLines = {1}>
                        {targedItem.description}
                    </InfoTextGrey>
                </DescriptionView>              
                {/* </ImageBox1> */}
                </ImageBox> 
            </RectButton>
            </>
            ))}

        </View>
    
        </ScrollItemBox>
     
            
    </>        
     
    );


}

