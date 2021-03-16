import React,{useEffect,useState}from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {View,StyleSheet, ScrollView, TextInput,Image,Alert,
        Text,ActivityIndicator ,ImageStore,Dimensions,RefreshControl} from 'react-native';

import {InputSearch,ImageView,SearchBox,ScrollItemBox,MineBox,MineImage,TextRecomandation,
    TextNaN,ComponentFilter,ImageBox,ImgItem,InfoTextBlack,InfoTextGrey,DescriptionView,RecomandationButton,} from '../components'
import Icon from 'react-native-vector-icons/Ionicons';

import api from '../services/api';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import {useAuth} from '../contexts/auth';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native'

import { FontAwesome5,AntDesign } from '@expo/vector-icons';


export default function Search({  navigation }) {
 


    const {user,signOut,loading} = useAuth();
    // const [update,setUpdate] = useState(true);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);
    const route = useRoute();
    const params = route.params ;
    // const [img, setImg] = useState([]);
    // const [refreshing, setRefreshing] = React.useState(false);
    const [search,setSearch]=useState('')
    const [isLoading,setLoading] =useState(true);



    
    
 
    // useEffect(()=>{
    //         api.get(`items/showAllItemsMinesUsers/${user.user_id}`)
    //         .then(response => {
    //             setItems(response.data);
    //             console.log('-------------------------------------')
    //             console.log(items)
    
    //         })
    //         // api.get(`items/index/${params.item_id}`)
    //         // .then(response => {
    //         //     setItem(response.data);
    //         // })
        
    //         if(items){
    //             return(
    //                 <ItemsResults/>
    //             );
    //         }
        
    //     },[items]);
    
    function handleAlert(){
        Alert.alert('Desculpe!', 'Essa função estará funcionando em um trabalho futuro!');
    }

    async function handleFilter(){
        console.log("Deslogar");
        navigation.navigate("Filter");
    }
    async function handleItem(item_id){
        console.log("EnterItem");
        navigation.navigate("Item",{item_id});
    }
    async function handleSearch(){
        setSearch(search)
        console.log("Seaching");
        // navigation.navigate("Main",{search});
        setLoading(false)
    }
    function handleSelectFilterItem() {
        navigation.navigate("Filter");
        
    }
    
    return (  
    <>
        <SearchBox >
        <InputSearch 
            type = "search"
            placeholder = "Pesquisar Itens"
            placeholderTextColor = "#999"
            value={search}
            onChangeText = {setSearch}
            >
        </InputSearch>

        <TouchableOpacity 
        // onPress = {handleSearch}> 
        onPress = {handleAlert}> 

        <Icon name="ios-search-sharp" size={40}/>
        </TouchableOpacity>
                
        <TouchableOpacity 
        onPress = {handleFilter}>
                <Icon name="ios-filter" size={40} 
                // style = { styles.iconFilter}
                />
        </TouchableOpacity>
               
        </SearchBox>
        
            
            <RectButton onPress ={handleSelectFilterItem}>                       

            <ComponentFilter>
                <InfoTextBlack > Filtrar!</InfoTextBlack> 
                <AntDesign name="down" size={35} color="black" />            
            </ComponentFilter> 
            
            <TextNaN> Nenhum item filtrado </TextNaN>              
            </RectButton>


        <RecomandationButton onPress ={handleAlert}>
        <FontAwesome5 name="people-carry" size={150} color="black" />
        <TextRecomandation>RECOMENDAÇÕES PARA VOCÊ</TextRecomandation>
        </RecomandationButton>
        



        

          
    </>
  
    );

}


