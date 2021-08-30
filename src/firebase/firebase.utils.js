/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { COLLECTION_DATA } from "./collections";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "crwn-db-f8ee2.firebaseapp.com",
  projectId: "crwn-db-f8ee2",
  storageBucket: "crwn-db-f8ee2.appspot.com",
  messagingSenderId: "727157548019",
  appId: "1:727157548019:web:7a7ed87a4f62a4a3892886",
  measurementId: "G-16J29YE8RS",
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

export const collectionKey = "collections";

const addCollectionsToFirestore = () => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  Object.values(COLLECTION_DATA).forEach((collection) => {
    const { title, items } = collection;
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, { title, items });
  });
  return batch.commit();
};

const convertCollectionsSnapshotToMap = (snapshot) => {
  const transformedCollection = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  const collections = transformedCollection.reduce(
    (accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );
  return collections;
};
export const addCollectionsToFirestoreIfNotExists = () => {
  firestore
    .collection(collectionKey)
    .limit(1)
    .get()
    .then(async (snapshot) => {
      if (snapshot.empty) {
        await addCollectionsToFirestore();
      }
    })
    .catch((err) =>
      console.error(`error: trying to insert collections into db, ${err}`)
    );
};
export const getCollectionsFromFirestore = () => {
  return firestore
    .collection(collectionKey)
    .get()
    .then((snapshot) => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      return collections;
    })
    .catch((err) =>
      console.error(`error: fetching collections from firestore, ${err}`)
    );
};

export default firebase;
