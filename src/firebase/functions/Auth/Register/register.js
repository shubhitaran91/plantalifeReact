import firebaseConfig from "../../../config/config";

export const createUser = (email, password) => {
  return firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (result) {
      var user = result.user;
      return user;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // console.log("errorMessage", errorMessage);
      return error.code;
    });
};

export const updateUserDisplayName = (fname) => {
  var user = firebaseConfig.auth().currentUser;
  return user
    .updateProfile({
      displayName: fname,
    })
    .catch(function (error) {
      // An error happened.
      return error["message"];
    });
};
