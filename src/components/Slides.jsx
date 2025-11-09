import { Box } from "@mui/material";
import {useState} from 'react';
import imgOne from '../assets/galleryPics/imageOne.jpg'
import imgTwo from '../assets/galleryPics/imageTwo.jpg'
import imgThree from '../assets/galleryPics/imageThree.jpg'
import imgFour from '../assets/galleryPics/imageFour.jpg'
import imgFive from '../assets/galleryPics/imageFive.jpg'
import imgSix from '../assets/galleryPics/imageSix.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const pictures = [{image: imgOne, title: 'Image One'}, {image: imgTwo, title: 'Image Two'}, {image: imgThree, title: 'Image Three'}, {image: imgFour, title: 'Image Four'}, {image: imgFive, title: 'Image Five'}, {image: imgSix, title: 'Image Six'}];

const Slides = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const leftArrowClick = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const rightArrowClick = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
  return (
    <Box height='100%' position='relative'>
      
      <ChevronLeftIcon sx={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: 0, color: 'white', fontSize:{xs: '3.5rem', lg: '5rem', xl: '6rem'}, zIndex: 1, cursor: 'pointer'}} onClick={leftArrowClick} />
      <ChevronRightIcon sx={{position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: 0, color: 'white', fontSize:{xs: '3.5rem', lg: '5rem', xl: '6rem'}, zIndex: 1, cursor: 'pointer'}} onClick={rightArrowClick} />  
      <Box width='100%' height='100%' sx={{backgroundImage: `url(${pictures[currentIndex].image})`, backgroundSize: 'cover', backgroundPosition: 'center'}} borderRadius={3}/>
      </Box> 

  );
};

export default Slides;
