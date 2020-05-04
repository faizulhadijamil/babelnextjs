import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export function FirebaseConfig(){
    const config = {
        apiKey: "AIzaSyBoucAnhK3TCPMaJ5QrNnLlw7-bCjsjyoo",
        authDomain: "babelasia-37615.firebaseapp.com",
        databaseURL: "https://babelasia-37615.firebaseio.com",
        projectId: "babelasia-37615",
        storageBucket: "babelasia-37615.appspot.com",
        messagingSenderId: "171899057367",
        appId: "1:171899057367:web:853f0f7baadebbda24ec92",
        measurementId: "G-6GSZPHL0NH"
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    }
    return firebase;
}

// export default () => {
//     console.log('firebase config: ', config);
//   if (!firebase.apps.length) {
//     firebase.initializeApp(config)
//   }
// }