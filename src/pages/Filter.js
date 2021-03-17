import React, { useEffect ,useState} from 'react';
import { ScrollView, View, StyleSheet, Button, Text, TextInput, TouchableOpacity ,Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';


import * as ImagePicker from 'expo-image-picker';
import api from '../services/api';
import{ScreenModal,ViewRow,Img,LoginBox,Input,ButtonSend,
      MineBox,MineImage,ButtonText,OpacityButton} from '../components'
import {useAuth} from '../contexts/auth';
import RNPickerSelect ,{Picker }from 'react-native-picker-select'



import {ImageView,ScrollItemBox,NameItemView,
  ImageBox,ImgItem,InfoTextBlack,InfoTextGrey,DescriptionView} from '../components'
// import {  RectButton } from 'react-native-gesture-handler';

export default function Filter() {
   const {user,signOut} = useAuth();

    const [name,setName] =useState('');
    const [description,setDescription] =useState('');
    const [price,setPrice] =useState('');
    const [category,setCategory] =useState('');
    const [images, setImages] = useState([]);
    
    const [items, setItems] = useState([]);
    // const Picker = 
    const pickerRef = React.useRef()
    const navigation = useNavigation();

    const route = useRoute();
    const params = route.params ;
   

    useEffect(()=>{

      // const {user,signOut} = useAuth();
      api.get(`items/showUserToItem/${user.user_id}`).then(response => {
          setItems(response.data);
          // setUpdate(false)
      })
      // if(!items){
      //     return (
      //         <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
      //         <ActivityIndicator size = "large" color = "#999" />
      //         </View>
      //     );
      // }
  // },[]);
  },[items]);


  // setAdded(false)
  // }
 
  async function handleFilterItem(item_id){
      console.log("EnterItem");
      navigation.navigate("LookingFor",{item_id});
  }

  function handleNavigateBack() {
    navigation.goBack(null);
  }
  
  return (  
      <>
       <OpacityButton  onPress={handleNavigateBack}/>

      <ScreenModal >
        <ScrollView>
      {items.map(item => (
     <RectButton onPress ={()=>handleFilterItem(item.item_id)}>                       
            
         <MineBox key = {item.item_id}>
           <ViewRow>
             <MineImage>
                 {item.images.map(image => {
                 return (
                   <>

                 <ImgItem key ={image.image_id} source={{ uri: image.url }} />
                 </>
                 );
             })}
            </MineImage>
         
         <NameItemView >
             <InfoTextBlack >{item.name_item}</InfoTextBlack>
             
         </NameItemView> 
         </ViewRow>   
         </MineBox>           

        
     </RectButton>

     ))}
              </ScrollView>
     </ScreenModal>
     <OpacityButton  onPress={handleNavigateBack}/>

             
  </>         
  
      );
  
  
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