import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsaqWl_2VE82ph7aRgtkA2StBhp2R6rY",
  authDomain: "konsole-king-db.firebaseapp.com",
  databaseURL: "https://konsole-king-db.firebaseio.com",
  projectId: "konsole-king-db",
  storageBucket: "konsole-king-db.appspot.com",
  messagingSenderId: "811391365141",
  appId: "1:811391365141:web:283c738ea44c2f054a9e1c"
};

export const createUserProfileDocument = async userAuth => {
  // if userAuth object empty, exit function
  if (!userAuth) return;

  // store reference to user document
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get snapshot of user doc from db
  const snapShot = await userRef.get();

  // if no document exists, create new user
  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
