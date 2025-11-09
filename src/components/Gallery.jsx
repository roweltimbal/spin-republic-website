import { Box, Typography } from "@mui/material";
import Slides from "./Slides";



const Gallery = () => {
  return (
    <>
    <Typography variant="h2" textAlign='center' color='white' fontFamily="Barlow Condensed" fontWeight='500' mb={4}>OUR CLUB</Typography>
    <Box>
      <Box maxWidth='700px' minWidth='150px' height={{ xs: '300px', sm: '400px', md: '500px'}} mx='auto' overflow='hidden'>
        <Slides />
      </Box>
    </Box>
    </>
  );
};

export default Gallery;