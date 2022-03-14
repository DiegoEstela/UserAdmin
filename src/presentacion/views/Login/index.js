import { useState } from "react";
import firebaseApp  from "../../../config/db";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, setDoc} from "firebase/firestore"

const auth = getAuth(firebaseApp)



function Login() {
  const firestore = getFirestore(firebaseApp)
  const [isRegistred, setisRegistred] = useState(false);

  async function  singUp(email, password, rol, vistas){
    const UserInfo = await createUserWithEmailAndPassword(
      auth,
      email, 
      password)
      .then((user)=> {return user})
      .catch((err) =>{ console.log(err)})

    console.log(UserInfo.user.uid)
    const docuRef = doc(firestore, `CORPORATE_USER/${UserInfo.user.uid}`)
    setDoc(docuRef, {email, rol, vistas})
  }

  function handlerSubmit(e){
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;
    const vistas =  "array"

    if(isRegistred){
      singUp(email,password, rol, vistas)
    }else{
      signInWithEmailAndPassword(auth ,email, password  )
    }
  }
  return (
    <div>
      <h1>{isRegistred ? "Registrate" : "inicia sesion"}</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          <input type="email" id="email"/>
        </label>
        <label>
        <input type="password" id="password" />
        </label>
        
        <label>
         roll: 
        <select id="rol">
        <option value="admin"> Admin</option>
        <option value="write">Write</option>
        <option value="read">Read</option>
        </select>
        </label>
        <br/>
        
        <input
          type="submit"
          value={isRegistred ? "Registrar" : "Iniciar Sesion"}
        />
        </form>
        <button onClick={() => setisRegistred(!isRegistred)}>
        {isRegistred ? "ya tengo cuenta" : "Quiero registrarme"}
        </button>
        
      
    </div>
  );
}

export default Login;
