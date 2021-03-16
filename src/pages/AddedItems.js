import React ,{useState,useEffect }from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
// import {signIn} from '../services/auth';
import api from '../services/api'
import {useAuth} from '../contexts/auth';

import {ImageView,ScrollItemBox,MineBox,MineImage,ImgItem1,MineImage2,
    NameItemView,ImageBox,ImgItem,InfoTextBlack,InfoTextGrey,DescriptionView} from '../components'
import {  RectButton } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems : 'center'},
});




const AddedItems = ({navigation})=>{
    const [items, setItems] = useState([]);
    const {user,signOut} = useAuth();
    const [added,setAdded] =useState(true)

    // if(added){
    useEffect(()=>{

        // const {user,signOut} = useAuth();
        api.get(`items/showUserToItem/${user.user_id}`).then(response => {
            setItems(response.data);
            // setUpdate(false)
        })
        if(!items){
            return (
                <View style = {{flex:1, justifyContent:"center", alignItems:'center'}}>
                <ActivityIndicator size = "large" color = "#999" />
                </View>
            );
        }
    },[items]);

    // setAdded(false)
    // }
   
    async function handleFilterItem(targedId){
        console.log("EnterItem");
        navigation.navigate("ItemDetails",{targedId });
    }
    return (  
    
 
    
        <ScrollItemBox >
        {items.map(item => (
       <RectButton onPress ={()=>handleFilterItem(item.item_id)}>                       
            

           

           {/* <MineBox > */}
           <MineBox key = {item.item_id}>
           
               <MineImage>
                   {/* <MineImage2> */}
                   {item.images.map(image => {
                   return (
                       <>
                   <ImgItem key = {image.url}source={{ uri: image.url }} />
                   {/* <NameItemView >
               <InfoTextBlack >{item.name_item}</InfoTextBlack>
           </NameItemView>   */}
           </>
                   );
               })}
                {/* </MineImage2> */}
              </MineImage>
           
           <NameItemView >
               <InfoTextBlack >{item.name_item}</InfoTextBlack>
           </NameItemView>    
           </MineBox>           

          
       </RectButton>

       ))}
                
        </ScrollItemBox>
        
    
        );
    
}
export default AddedItems;