
import firebaseApp from "../../config/db";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {getFirestore, doc, setDoc,deleteDoc,collection, query } from "firebase/firestore"

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export  async function CreateUser(email, password, rol, vistas){
    const UserInfo = await createUserWithEmailAndPassword(
      auth,
      email, 
      password)
      .then((user)=> {return user})
      .catch((err) =>{ console.log(err)})

    console.log(UserInfo.user.uid)
    const docuRef = doc(db, `CORPORATE_USER/${UserInfo.user.uid}`)
    setDoc(docuRef, {email, rol, vistas})
  }

  export  async function deleteUser(user){
    const collectionRef = query(collection(db, 'CORPORATE_USER'));
    const docuRef = await doc(collectionRef, user);
    console.log(docuRef)
  }