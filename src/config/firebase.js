import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMMtNaoakN-KNtcut2R2AgOhVJWMAjj7U",
    authDomain: "safekid-demo-b3e44.firebaseapp.com",
    databaseURL: "https://safekid-demo-b3e44.firebaseio.com",
    projectId: "safekid-demo-b3e44",
    storageBucket: "safekid-demo-b3e44.appspot.com",
    messagingSenderId: "1064185719790",
    appId: "1:1064185719790:web:6ebcadd6266fa510b1fcff",
    measurementId: "G-NVTN14GYXW"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();



  export default firebase;