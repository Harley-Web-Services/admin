import React from 'react';
import {Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {PostCreate, PostEdit, PostList,PostIcon} from "./posts";
import authProvider from "./authProvider";
import {
    FirebaseAuthProvider,
} from 'react-admin-firebase';


//connect the data provider to the REST endpoint

const config = {
apiKey: "AIzaSyARk87CVXmcs9PR8-1Cxxtr1nEbXVULFG4",
authDomain: "mihadmin-dfdee.firebaseapp.com",
databaseURL: "https://mihadmin-dfdee.firebaseio.com",
projectId: "mihadmin-dfdee",
storageBucket: "mihadmin-dfdee.appspot.com",
messagingSenderId: "525956137892",
appId: "1:525956137892:web:66258bdffbd61d37c6f731",
measurementId: "G-BSZ2E4FBZD"
};

const options = {
    // Use a different root document to set your resource collections, by default it uses the root collections of firestore
    // rootRef: 'root-collection/some-doc',
// Your own, previously initialized firebase app instance
//     app: firebaseAppInstance,
// Enable logging of react-admin-firebase
    logging: false,
// Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
//     watch: ['posts'],
// Resources you explicitly dont want realtime updates for
//     dontwatch: ['comments'],
}

const dataProvider = jsonServerProvider('https://reactadmin3.herokuapp.com');
const firebaseAuthProvider = FirebaseAuthProvider(config,options)

function App() {
    return (
        <Admin dataProvider={dataProvider} authProvider={firebaseAuthProvider}>
             <Resource name="Customers" icon={PostIcon} list={PostList} edit={PostEdit} create={PostCreate}/>

        </Admin>
    );
}

export default App;

      
 
  
  
  
