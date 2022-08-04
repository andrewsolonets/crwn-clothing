import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfmuAvOY7h6oqBQssGg2htQPYZYDAROtw",
  authDomain: "crwn-clothing-db-409f4.firebaseapp.com",
  projectId: "crwn-clothing-db-409f4",
  storageBucket: "crwn-clothing-db-409f4.appspot.com",
  messagingSenderId: "539305747928",
  appId: "1:539305747928:web:aa08b980ef3fab7fe4bead",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;

  // if user data exists

  // create/set the document with the data from userAuth in my collection

  // return userDocRef
};
