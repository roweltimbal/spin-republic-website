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
    if (snapshot.exists()) {
      let data = snapshot.data().schedules || [];
      const today = dayjs().startOf("day");

      // Convert all dates to proper Date objects safely
      data = data
        .map((item) => {
          const dateValue =
            item.date && typeof item.date.toDate === "function"
              ? item.date.toDate()
              : new Date(item.date);
          return { ...item, date: dateValue };
        })
        // Remove past schedules
        .filter((item) => dayjs(item.date).isSameOrAfter(today, "day"))
        // Sort ascending
        .sort((a, b) => dayjs(a.date).unix() - dayjs(b.date).unix());

      // Convert to readable strings
      const formatted = data.map((item) => ({
        ...item,
        date: dayjs(item.date).format("MM-DD-YYYY"),
      }));

      setOpenPlaySchedule(formatted);
    } else {
      setOpenPlaySchedule([]);
    }
  });
  return unsubscribe;
}, []);
    
    const value = {openPlaySchedule, setOpenPlaySchedule};
    
    return (
    <OpenPlayScheduleContext.Provider value={value}>
      {children}
    </OpenPlayScheduleContext.Provider>
  );
}