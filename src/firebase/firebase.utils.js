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

/*************
 *** USERS ***
 *************/
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
    const wishlist = [],
      orderHistory = [];

    try {
      await userRef.set({
        email,
        wishlist,
        orderHistory,
        createdAt
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// update user wishlist
export const updateUserWishlist = async (userId, wishlistItem) => {
  try {
    const userRef = await firestore.collection("users").doc(userId);

    if (!userRef) {
      return false;
    }

    // get users wishlist and add new item
    let wishlist = await userRef.get();
    wishlist = wishlist.data().wishlist;
    // first check if item already exists in wishlist
    const itemExists = wishlist.find(item => item.id === wishlistItem.id);

    if (itemExists) {
      return false;
    }

    wishlist = [...wishlist, wishlistItem];
    return userRef.update({ wishlist });
  } catch (err) {
    console.error(err);
  }
};

// remove item from wishlist
export const removeItemFromWishlist = async (userId, wishlistItem) => {
  const userRef = await firestore.collection("users").doc(userId);

  if (!userRef) {
    alert("You must be logged in");
    return false;
  }

  // retrieve users wishlist
  let wishlist = await userRef.get();
  wishlist = await wishlist.data().wishlist;

  // filter out item to be removed
  wishlist = wishlist.filter(item => item.id !== wishlistItem.id);

  userRef.update({ wishlist });
};

/*****************
 *** INVENTORY ***
 *****************/

// create category and add multiple items
export const addCategoryAndDocs = async (categoryKey, itemsToAdd) => {
  const categoryRef = firestore.collection(categoryKey);

  const batch = firestore.batch();
  itemsToAdd.forEach(item => {
    const newDocRef = categoryRef.doc(item.title);
    batch.set(newDocRef, item);
  });

  return await batch.commit();
};

// add review
export const updateItemReviews = async (category, itemObj, review) => {
  try {
    // get the category
    let categoryRef = await firestore.collection("categories").doc(category);
    let categoryData = await categoryRef.get();

    // get the items array
    let items = await categoryData.data().items;

    // get index of item to be updated
    let itemIndex = items.map(item => item.item).indexOf(itemObj.item);

    // create new item object
    // and replace old object
    items[itemIndex] = {
      ...itemObj,
      reviews: [...itemObj.reviews, review]
    };

    // save new items back to category in database
    categoryRef.update({ items });
  } catch (err) {
    console.error(err);
  }
};

// convert categories snapshot to mappable object
export const convertCategoriesSnapshotToMap = categories => {
  const convertedCategory = categories.docs.map(doc => {
    const { title, categoryRank, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      categoryRank,
      items
    };
  });

  return convertedCategory.reduce((acc, cat) => {
    acc[cat.title.toLowerCase()] = cat;
    return acc;
  }, {});
};

// search items/category for keyword

/*****************
 ***** ORDERS *****
 *****************/

// create new order
export const createNewOrderDocument = async (order, total, currentUser) => {
  const newOrderRef = firestore.collection("orders").doc();
  const userRef = firestore.collection("users").doc(currentUser.id);
  const createdAt = new Date();

  try {
    await newOrderRef.set({
      order,
      total,
      userId: currentUser.id,
      createdAt
    });

    // update users order history
    let orderHistory = await userRef.get();
    orderHistory = orderHistory.data().orderHistory;
    orderHistory = [...orderHistory, { order, total, createdAt }];
    await userRef.update({ orderHistory });
  } catch (error) {
    console.log("error creating order", error.message);
  }

  return newOrderRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
