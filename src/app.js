import * as React from "react";
import {Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

 export const AdminL = ()=>{

    
  return (
   
  <Admin dataProvider={jsonServerProvider("https://reactadmin3.herokuapp.com")}>

  

        <Resource name="Customers" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
     </Admin>
 
    
  )
  }
  
  
  
