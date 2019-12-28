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

// create category and add multiple items
export const addCategoryAndDocs = async (categoryKey, itemsToAdd) => {
  const categoryRef = firestore.collection(categoryKey);

  const batch = firestore.batch();
  itemsToAdd.forEach(item => {
    const newDocRef = categoryRef.doc();
    batch.set(newDocRef, item);
  });

  return await batch.commit();
};

// convert categories snapshot to mappable object
export const convertCategoriesSnapshotToMap = categories => {
  const convertedCategory = categories.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return convertedCategory.reduce((acc, cat) => {
    acc[cat.title.toLowerCase()] = cat;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
