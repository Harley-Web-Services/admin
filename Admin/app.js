import * as React from "react";
import ReactDOM from "react-dom"
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server'

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';

 export const AdminL = ()=>{

  return (
  <Admin dataProvider={jsonServerProvider('http://localhost:5001')}>

        <Resource name="cardData" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
     
    </Admin>
  )
  }
  
  ReactDOM.render(<Admin/>,document.getElementById("root")) 
  
  
