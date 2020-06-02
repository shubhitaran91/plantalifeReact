import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbZ4RaheqYTYCVqgS7eu9quI0a66rUJNY",
  authDomain: "plantalife-india.firebaseapp.com",
  databaseURL: "https://plantalife-india.firebaseio.com",
  projectId: "plantalife-india",
  storageBucket: "plantalife-india.appspot.com",
  messagingSenderId: "797244288910",
  appId: "1:797244288910:web:fb0af214f16fec99eebedf",
  measurementId: "G-ZT8HVQHQZR",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
