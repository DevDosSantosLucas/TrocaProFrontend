import React from 'react'; 
import { View, StyleSheet,Text} from 'react-native';

         import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Header(){
    return(
       <View style = {styles.container}>
           <View style = { styles.rowContainer}>
           <Icon name="handshake" 
             size={70} color = "#FFF"
            style = { styles.image}/>
           <Text style = { styles.title}>E c o S w a p p</Text>
           </View>
       </View> 
    );
}

const styles = StyleSheet.create({
    container:{
        padding:2,
        borderColor: '#BBB',
        backgroundColor: '#008B8B',
        alignItems: 'center' ,
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center',  
    },
    image:{
        // margin: 3,
        height:50,
        fontSize:38,  
    },
    title:{
        color: '#FFF',
        fontFamily:'Shelter',
        fontSize:24,
        marginLeft: 10,  
    }
})

