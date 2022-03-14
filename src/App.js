import { useState } from 'react';

import Home from './presentacion/views/home';
import Login from "./presentacion/views/Login"
import firebaseApp from './config/db';

import {getAuth, onAuthStateChanged} from "firebase/auth"
import { getFirestore, doc, getDoc } from 'firebase/firestore';
const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

function App() {

  const [user, setUser] = useState(null)

  async function getRol(uid) {
    const docuRef = doc(firestore, `CORPORATE_USER/${uid}`)
    const docuCif = await getDoc(docuRef)
    const rol = docuCif.data().rol
    return rol
  }

  function setUserAndRol (user){
    getRol(user.uid).then((rol) =>{
      const dataUser = {
        udi: user.uid,
        email : user.email,
        rol: rol,
        vistas: user.vistas
      }
      setUser(dataUser)
      
    })
  }

  onAuthStateChanged(auth, (userFb)=>{
    if (userFb){
        
       if(!user){setUserAndRol(userFb)}
     
    }else{
      setUser(null)
    }
  })

  return (
    <>
  {user ? <Home user={user}/> : <Login/>}    
    </>
  );
}

export default App;
