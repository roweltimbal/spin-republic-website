import { createContext, useState, useEffect } from "react";
import { db } from "../utils/firebase/firebase.utils";
import { onSnapshot, doc } from "firebase/firestore";

export const OpenPlayScheduleContext = createContext({
    openPlaySchedule: null,
    setOpenPlaySchedule: () => null
})

export const OpenPlayScheduleProvider = ({children}) => {
    const [openPlaySchedule, setOpenPlaySchedule] = useState(null);
    
    useEffect(() => {
        const docRef = doc(db, 'OpenPlayData', 'OpenPlayDashboard');
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if(snapshot.exists()) {
                const data = snapshot.data().schedules || [];
                setOpenPlaySchedule(data);
                console.log('data:', data)
            }
        });
        return unsubscribe;
    }, [])
    
    const value = {openPlaySchedule, setOpenPlaySchedule};
    
    return (
    <OpenPlayScheduleContext.Provider value={value}>
      {children}
    </OpenPlayScheduleContext.Provider>
  );
}