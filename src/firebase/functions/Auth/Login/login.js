import firebaseConfig from "../../../config/config";
import firebase from "firebase";

export const loginUserWithFB = async () => {
  var provider = new firebase.auth.FacebookAuthProvider();

  return await firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      return user;
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      return error.message;
    });
};

export const loginUserWithGoogle = async () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      return user;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      return error.message;
    });
};

export const loginUserWithEmail = (email, password) => {
  return firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (result) {
      var user = result.user;
      return user;
    })
    .catch(function (error) {
      return error.message;
    });
};

export const logoutUser = () => {
  return firebaseConfig.auth().signOut();
};
