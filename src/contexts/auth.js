import React,{createContext, useState, useEffect, useContext} from 'react';

// import * as auth from '../services/auth';
import api from '../services/api'
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { showMessage, hideMessage } from "react-native-flash-message";
const AuthContext = createContext({});

export const AuthProvider = ({children})=> {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);//true
    

    useEffect (()=> {
        async function loadStoragedData(){
            
            const storagedUser = await AsyncStorage.getItem('@trocapro:user');
            const storagedToken = await AsyncStorage.getItem('@trocapro:token');  
            
            
            if(storagedUser && storagedToken){
                api.defaults.headers.Authorization = `Bearer ${storagedToken}`;

                setUser(JSON.parse(storagedUser));
                
            }
            setLoading(false);
        }
        loadStoragedData();
    },[]);

    async function signIn(data){
          

        try{
        // const response = await auth.signIn();
            const  response = await api.post("session",data)
            // const  response = await api.signIn(data);

        
        console.log(data)

        setUser(response.data);

        api.defaults.headers['Authorization'] = `Bearer ${response.data.token}`;
        await AsyncStorage.setItem('@trocapro:user', JSON.stringify(response.data));
        await AsyncStorage.setItem('@trocapro:token', response.data.token);
        
        }catch(error){
            console.log(error.response  )
            showMessage({
                message: error.response.data,
                type: 'warning'
            })
        }
        // console.log(response);
       
    };
    
    function signOut(){
        AsyncStorage.clear().then(()=>{
            setUser(null);
        });
    };

    
    return (
        <AuthContext.Provider 
            value = {{loading, signed: !!user,  user, signIn,signOut}}>
                    {children}
    </AuthContext.Provider>
    );
};

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}