import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import { useContext } from "react";
import { OpenPlayScheduleContext } from "../context/OpenPlaySchedule.context";

const OpenPlayDashboard = () => {
    const {openPlaySchedule} = useContext(OpenPlayScheduleContext)
    
    return <>
    <Typography variant='h4' sx={{
        mb:2,
        fontSize: {
            xs: '1.5rem',
            sm: '2rem',
            md: '3rem',
        }    
    }}>Open Play Schedule</Typography>
    <TableContainer component={Paper} sx={{maxHeight: '300px', mb:2}}>
     <Table aria-label="Open Play Schedule Table" size="small" stickyHeader>
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
            openPlaySchedule.map((row, index) => (
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

export default OpenPlayDashboard;