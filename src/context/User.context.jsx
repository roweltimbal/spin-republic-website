import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, db } from "../utils/firebase/firebase.utils";
import { doc, onSnapshot } from "firebase/firestore";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});



export const UserProvider = ({children}) => {
    useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            const userDocRef = doc(db, 'users', user.uid);
            const unsubscribeUser = onSnapshot(userDocRef, (snapshot) => {
                if(snapshot.exists()) {
                    setCurrentUser(snapshot.data())
                } else {
                    return
                }
            })
            return () => unsubscribeUser();
        } else {
            setCurrentUser(null);
        }
    })
   
    return unsubscribe
}, [])
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}