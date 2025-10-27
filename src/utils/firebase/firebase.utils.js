import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC--ydyvTY0AGQqpzGm6kGXzyPbwg4Jg38",
  authDomain: "spin-republic-db.firebaseapp.com",
  projectId: "spin-republic-db",
  storageBucket: "spin-republic-db.firebasestorage.app",
  messagingSenderId: "394229501841",
  appId: "1:394229501841:web:fa622b8210e5d54a34d430"
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

export const createUserDocumentFromAuth = async(userAuth) => {
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
                createdAt
            })
        } catch (error) {
            console.log('error', error.message)
        }
    }

    // if user data exists - return userDocRef and data
    
    return userDocRef;


}

