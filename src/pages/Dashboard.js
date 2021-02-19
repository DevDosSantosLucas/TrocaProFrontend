import React from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';
// import {signIn} from '../services/auth';

import {useAuth} from '../contexts/auth';



const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems : 'center'},
});



const Dashboard = ()=>{

    const {user,signOut} = useAuth();
   
    async function handleSignOut(){
     console.log("Deslogar");
     signOut();
    }

    return(
       <View style = {styles.container }>
           <Button title = "sign out" onPress ={handleSignOut} />
           <Text>{user?.name}</Text>
       </View>
    ); 
}
export default Dashboard;