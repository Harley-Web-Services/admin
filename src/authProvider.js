import {fetchUtils} from 'react-admin'
import * as React from 'react'
import axios from 'axios'
const url = "https://reactadmin3.herokuapp.com/adminLogin"

    
//  async function authProvider(data,error) {

//     if(error) throw error;
//    return data = fetchUtils.fetchJson(url)
   
// }

// authProvider()

// export default authProvider
export default {
    login: ({username,password}) => {
       
    axios.get(url)
    .then((resp) => {
    
       if(resp.data.email === username && resp.data.password === password){
           localStorage.setItem('username',username)
       }
       return resp.data
    })
    .catch((error)=>console.log(error))

  
    
        

     
        return Promise.resolve()
    },
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
 
}