import { addScheduleToDashboard } from "../utils/firebase/firebase.utils";
import { 
   Box, 
   Button, 
   Typography, 
   Container, 
   Dialog, 
   DialogTitle, 
   DialogContent,
   DialogContentText,
   DialogActions,
   TextareaAutosize 
} from '@mui/material'
import OpenPlayDashboard from '../components/OpenPlayDashBoard'
import AddIcon from '@mui/icons-material/Add';
import { useState, useContext } from "react";
import dayjs from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { UserContext } from "../context/User.context";

const scheduleToAdd = {
   displayName: '',
   email: '',
   likes: 0,
   date: '',
   notes: '',
   time: ''
}

const defaultFormFields = {
   displayName: '',
   email: '',
   likes: 0,
   date: '',
   notes: '',
   time: ''
}




const Dashboard = () => {
   const {currentUser} = useContext(UserContext);
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(dayjs());

   // handle submit, adding schedule to db
   const handleSubmit = async() => {
      await addScheduleToDashboard(scheduleToAdd);
   }

   return <>
   <Container sx={{textAlign:'center', mt:5}}>
   <OpenPlayDashboard/>
   <Button variant="contained" onClick={() => setOpen(true)}><AddIcon fontSize="small"/>Add Schedule</Button>
   <Dialog 
   open={open}
   onClose={() => setOpen(false)} 
   aria-labelledby="adding-schedule-title">
      <DialogTitle id='adding-schedule-title'>Add schedule</DialogTitle>
      <DialogContent>
         <DialogContentText color="black">Date</DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
               name="date"
               label="Select date"
               value={value}
               minDate={dayjs()} // prevents selecting past dates
               onChange={(newValue) => {
                  setValue(newValue);
                  scheduleToAdd.date = newValue?.toDate() || null;
                  scheduleToAdd.displayName = currentUser.displayName;
                  scheduleToAdd.email = currentUser.email;
               }}
            />
         </LocalizationProvider>
         <DialogContentText color="black">Time</DialogContentText>
         <DialogContentText> 
         <TextareaAutosize
            aria-label="time of arrival"
            placeholder="e.g. 6:00 pm"
            style={{ width: 200, mb:2 }}
            onChange={(event) => {
               const timeSelected = event.target.value;
               scheduleToAdd.time = timeSelected;
            }}
         />
         </DialogContentText>
         <DialogContentText color="black">Notes</DialogContentText>
         <DialogContentText>
         <TextareaAutosize
            aria-label="time of arrival"
            minRows={2}
            placeholder=""
            style={{ width: 200 }}
            onChange={(event) => {
               const notesAdded = event.target.value;
               scheduleToAdd.notes = notesAdded;
               console.log(scheduleToAdd)
            }}
         />
         </DialogContentText>
      </DialogContent>
      <DialogActions>
         <Button variant="contained" autoFocus onClick={() => {
            setOpen(false);
            handleSubmit();
         }}>Submit</Button>
         <Button variant="contained" onClick={() => setOpen(false)}>Cancel</Button>
      </DialogActions>
   </Dialog>
   </Container>
   </>
}

export default Dashboard;