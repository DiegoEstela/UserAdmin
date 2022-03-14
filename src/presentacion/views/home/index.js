import React from 'react'
import firebaseApp from '../../../config/db'
import {getAuth, signOut} from "firebase/auth"
import AdminView from '../../components/AdminView'
import UserView from '../../components/UserView'
const auth = getAuth(firebaseApp)

function Home(user) {
  return (
    <div>
      <h1> Home</h1>
      <button onClick={()=> signOut(auth)}>Cerrar sesion</button>
      {user.user.rol === "admin" ? <AdminView/> : <UserView/>}
      </div>
  )
}

export default Home