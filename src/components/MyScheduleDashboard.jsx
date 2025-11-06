import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { useContext } from "react";
import { OpenPlayScheduleContext } from "../context/OpenPlaySchedule.context";
import { currentUser, UserContext } from '../context/User.context'

// const testArr = [
//     {name: 'Jack',
//      date: 'nov 2',
//      time: '6 pm',
//      notes: 'easy game'   
//     }
// ]

const MyScheduleDashboard = () => {
    const {openPlaySchedule} = useContext(OpenPlayScheduleContext)
    const {currentUser} = useContext(UserContext);
    
    const mySchedule = openPlaySchedule.filter((schedule) => currentUser.email === schedule.email);
    
    return <>
    <Typography variant='h4' sx={{
        mt: 5,
        mb:2,
        fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
        }    
    }}>My Schedule</Typography>
    <TableContainer component={Paper} sx={{maxHeight: '300px', mb:2}}>
     <Table aria-label="My Schedule Table" size="small" stickyHeader>
       <TableHead>
        <TableRow>
            <TableCell sx={{backgroundColor: 'primary.main', color:'white'}}>Name</TableCell>
            <TableCell sx={{backgroundColor: 'primary.main', color:'white'}}>Date</TableCell>
            <TableCell sx={{backgroundColor: 'primary.main', color:'white'}}>Time</TableCell>
            <TableCell sx={{backgroundColor: 'primary.main', color:'white'}}>Notes</TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        {
            mySchedule.map((row, index) => (
                <TableRow key={index}>
                    <TableCell>{row.displayName}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    <TableCell>{row.notes}</TableCell>
                </TableRow>
            ))
        }
       </TableBody>
       </Table>
    </TableContainer>
    </>
}

export default MyScheduleDashboard;