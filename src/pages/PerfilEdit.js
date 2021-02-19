import React from 'react'; 
import { View, Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

          import Icon from 'react-native-vector-icons/FontAwesome5';
        //   import {RectButton, TouchableOpacity} from'react-native-gesture-handler';


export default function PerfilEdit({navigation}){
    function handleButtonSave(){
     
    }
    function handleButtonBack(){
        navigation.goBack();  
     }

    return(<View style = {styles.container}>
        <TouchableOpacity style = {styles.containerPhoto}>
            {/* <Icon name = 'user-circle' size = {200}/>  */}
            <Icon name = 'user-edit'   size = {100}/>         
        </TouchableOpacity>
        
        <View >
            <TextInput style = {styles.input}
                placeholder = "SEU NOME!"
                placeholderTextColor = "#999"/>
            <View style ={styles.row} >
            <TextInput style = {styles.input}
                placeholder = "+55"
                placeholderTextColor = "#999"/>
            <TextInput style = {styles.input}
                placeholder = "(DDD)"
                placeholderTextColor = "#999"/>
            </View>
            <TextInput style = {styles.input}
                placeholder = "WHATSAPP!"
                placeholderTextColor = "#999"/>
            <View style ={styles.row}>
            <TextInput style = {styles.input}
                placeholder = "UF!"
                placeholderTextColor = "#999"/>
            <TextInput style = {styles.input}
                placeholder = "CIDADE!"
                placeholderTextColor = "#999"/>
            </View>
        </View>

        <View style ={styles.row}>
            <TouchableOpacity style = {styles.button}
                  onPress = {handleButtonBack}>
                <Icon style = {styles.goback}name = 'backspace'   size = {30} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button}
                  onPress = {handleButtonSave}>
                <Text style = { styles.buttonText}>SALVAR</Text>
        </TouchableOpacity>

        </View>
        
       
    
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        flex:1,

    },  
    containerPhoto:{
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        padding: 20,
        backgroundColor: '#008B8B',
        marginBottom:20,
        
    },
    row:{
        paddingRight: 2,
        paddingLeft: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        // paddingLeft: 30,
        // paddingRight:30,
        margin:5,
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 20
    },

    button: {
        // marginTop:100,
        flex: 1,
        margin: 10,
        // paddingLeft:20,
        height: 50,
        backgroundColor: "#008B8B",
        justifyContent: 'center',
        borderRadius: 25,
    },
    goback:{
        alignSelf: 'center',
    },
    buttonText:{
        alignSelf: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
    }
})