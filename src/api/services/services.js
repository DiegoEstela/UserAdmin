import firebaseApp from "../../config/db";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
const db = getFirestore(firebaseApp);

export default async function getAllUser() {
  try {
    const user = [];
    const collectionRef = query(collection(db, 'CORPORATE_USER'));
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
      user.push(doc.data());
    });
    return user;
  } catch (err) {
    console.log(err);
  }
}
