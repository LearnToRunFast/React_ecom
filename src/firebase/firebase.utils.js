/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
};

firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (snapShot.exists) {
    return userRef;
  }

  const { displayName, email } = userAuth;
  const createdAt = new Date();
  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData,
    });
    return userRef;
  } catch (error) {
    console.log("error creating user", error.message);
  }
};
export const createUserWithEmail = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => user)
    .catch((error) => {
      console.error("error creating user", error.message);
    });
};
export const signInWithEmail = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(() => true)
    .catch((error) => {
      console.error("error signing in", error.message);
      return false;
    });
};
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
