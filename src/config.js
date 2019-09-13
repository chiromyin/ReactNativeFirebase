
import Firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCVQKIBfq1Ir4JoN1Iuhc-WdKaFOalPRx4",
  authDomain: "react-native-47a9d.firebaseapp.com",
  databaseURL: "https://react-native-47a9d.firebaseio.com",
  projectId: "react-native-47a9d",
  storageBucket: "react-native-47a9d.appspot.com",
  messagingSenderId: "70559320486",
  appId: "1:70559320486:web:f4046cdc151060703ee767"
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
