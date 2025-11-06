import { createContext, useState, useEffect } from "react";
import { db } from "../utils/firebase/firebase.utils";
import { onSnapshot, doc } from "firebase/firestore";
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);
export const OpenPlayScheduleContext = createContext({
    openPlaySchedule: [],
    setOpenPlaySchedule: () => null
})

export const OpenPlayScheduleProvider = ({children}) => {
    const [openPlaySchedule, setOpenPlaySchedule] = useState([]);
    
    useEffect(() => {
        const docRef = doc(db, 'OpenPlayData', 'OpenPlayDashboard');
        const unsubscribe = onSnapshot(docRef, (snapshot) => {
            if(snapshot.exists()) {
                let data = snapshot.data().schedules || [];
                // Remove past schedules
                const today = dayjs().startOf("day");
                data = data.filter((item) => dayjs(item.date.toDate()).isSameOrAfter(today, "day"));
                // Sort ascending order
                data.sort(
                (a, b) => dayjs(a.date.toDate()).unix() - dayjs(b.date.toDate()).unix()
                );
                // Convert to readable strings
                const formatted = data.map((item) => ({
                ...item,
                date: dayjs(item.date.toDate()).format("MM-DD-YYYY")
                }));
                setOpenPlaySchedule(formatted);
                console.log('Fetched schedules:', data)
            } else {
                setOpenPlaySchedule([]);
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