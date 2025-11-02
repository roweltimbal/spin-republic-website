import { addScheduleToDashboard } from "../utils/firebase/firebase.utils";
import { Box, Button, Typography } from '@mui/material'


const scheduleToAdd = {
   name: 'Hugo Calderano',
   email: 'calderano@gmail.com',
   date: 'Friday 11/8',
   time: '10:00 am',
   notes: 'LF doubles matches',
   likes: 0
}



const addScheduleHandler = () => {
   addScheduleToDashboard(scheduleToAdd);
}

const Dashboard = () => {
   return <>
   <h1>This is the dashboard section</h1>
   <Button onClick={addScheduleHandler}>Add Schedule</Button>
   </>
}

export default Dashboard;