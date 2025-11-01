import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Creating a GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

// Proving instructions on how GoogleAuthProvider will behave, here we want to awlays have them select an account  
provider.setCustomParameters({
    prompt: 'select_account'
})

// exporting authentication
export const auth = getAuth();

// exporting signInWithPopup, we passed in the auth(getAuth) and provider(GoogleAuthProvider) that we created
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// this is our db
export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid )
    
    const userSnapshot = await getDoc(userDocRef);
    
    // if user data does not exist - create/set the document with the data from userAuth in my collection    
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            // console.log('error', error.message)
        }
    }

    // get updated snapshot
    const updatedSnapshot = await getDoc(userDocRef)
    // if user data exists - return userDocRef and data
    return {userDocRef, ...updatedSnapshot.data()}
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
        const currentUser = await signInWithEmailAndPassword(auth, email, password);
        return currentUser
}

// signing out user
export const signOutUser = async () => await signOut(auth);

// authStateChange Listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);