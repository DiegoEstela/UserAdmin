import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBFbqDt-HEPpVY8Cw6nT5kXvUi2JTTceZA",
    authDomain: "pruebaumauserroles.firebaseapp.com",
    projectId: "pruebaumauserroles",
    storageBucket: "pruebaumauserroles.appspot.com",
    messagingSenderId: "552099390681",
    appId: "1:552099390681:web:bb3aa8f988fa5b82bccac8"
}

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp


