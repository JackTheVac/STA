import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8baYbd3DOBAP3Tl2kqB3d6xj3XL8Xwis",
    authDomain: "sharetea-rewards-app.firebaseapp.com",
    projectId: "sharetea-rewards-app",
    storageBucket: "sharetea-rewards-app.appspot.com",
    messagingSenderId: "624171288939",
    appId: "1:624171288939:web:f29dba8c88a0831073242e",
    measurementId: "G-6PQNMNFQLV"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }
  else{
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      global.user = firebase.auth().currentUser;
    }
  });


  export { db, auth }; 
