import { Box, Typography, Stack, Container } from "@mui/material"
import aboutUsImageOne from '../assets/aboutUsPics/aboutPicOne.jpg'
import aboutUsImageTwo from '../assets/aboutUsPics/aboutUsPicTwo.jpg'
import {motion} from 'framer-motion';

const AboutUsSection = () => {
  return (
    <>
      {/* First Section */}
      <Box width='100%' sx={{bgcolor:'#000', paddingBottom:{md:10 , xs:3}}} id="about">
      <Container maxWidth='lg'>
        <Box sx={{textAlign:'center', py: 4, color:"#fff",}}>
          <Stack direction={{md:'row', xs:'column'}} spacing={3} justifyContent='center' alignItems='center'>
          <motion.div
            initial={{opacity:0 , y:30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <Typography variant="h1" fontFamily="Barlow Condensed" fontSize='8rem' fontWeight='700'>WHO</Typography>
            </motion.div>
            <motion.div
            initial={{opacity:0 , y:30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.2}}
            viewport={{once: true}}
          >
            <Typography variant="h1" fontFamily="Barlow Condensed" fontSize='8rem' fontWeight='700'>ARE</Typography>
            </motion.div><motion.div
            initial={{opacity:0 , y:30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.4}}
            viewport={{once: true}}
          >
            <Typography variant="h1" fontFamily="Barlow Condensed" fontSize='8rem' fontWeight='700'>WE?</Typography>
            </motion.div>
          </Stack>
        </Box>
        <Box>
          <Stack direction={{md:'row', xs:'column'}} spacing={3} justifyContent='center' alignItems='flex-start' sx={{width: '100%'}}>
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: {md: 400, xs: 250},
                backgroundImage: `url(${aboutUsImageOne})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: 2,
              }}
            />
            <Box sx={{ width: { xs: '100%', md: '50%' }, py: 2 }}>
              <motion.div
                initial={{opacity:0 , y:30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.6}}
                viewport={{once: true}}
              >
                <Typography variant="body1" sx={{color: '#fff', mb: 2}} fontStyle='Roboto' textAlign='justify'>
                  Spin Republic started as an idea between two friends who wanted to create a space where anyone — from beginners to seasoned players — could experience the thrill of table tennis. What began as a shared passion is now a growing community built on competition, camaraderie, and fun. Join us at Jackman Plaza, Muñoz, Quezon City, and be part of the movement.
                </Typography>
              </motion.div>
            </Box>
          </Stack>
        </Box>
      </Container>
      </Box>
      {/* Second Section */}
      <Box width='100%' sx={{bgcolor:'primary.main', py:4}}>
      <Container maxWidth='lg'>
        <Box sx={{textAlign:'center', py: 4, color:"#fff",}}>
          <Stack direction={{md:'row', xs:'column'}} spacing={3} justifyContent='center' alignItems='center'>
          <motion.div
            initial={{opacity:0 , y:30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{once: true}}
          >
            <Typography variant="h1" fontFamily="Barlow Condensed" fontSize='8rem' fontWeight='700'>WHAT</Typography>
            </motion.div>
            <motion.div
            initial={{opacity:0 , y:30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.2}}
            viewport={{once: true}}
          >
            <Typography variant="h1" fontFamily="Barlow Condensed" fontSize='8rem' fontWeight='700'>WE</Typography>
            </motion.div><motion.div
            initial={{opacity:0 , y:30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.4}}
            viewport={{once: true}}
          >
            <Typography variant="h1" fontFamily="Barlow Condensed" fontSize='8rem' fontWeight='700'>OFFER</Typography>
            </motion.div>
          </Stack>
        </Box>
        <Box>
          <Stack direction={{md:'row', xs:'column'}} spacing={3} justifyContent='center' alignItems='flex-start' sx={{width: '100%'}}>
            <Box sx={{ width: { xs: '100%', md: '50%' }, py: 2 }}>
              <motion.div
                initial={{opacity:0 , y:30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.6}}
                viewport={{once: true}}
              >
                <Typography variant="body1" sx={{color: '#fff', mb: 2}} fontStyle='Roboto' textAlign='justify'>
                  Spin Republic is all about fun. Play in our leagues, open sessions, or coaching programs, and feel the thrill of the game. Chill with friends in our welcoming, safe, and clean space — a place to relax, compete, and enjoy table tennis together.
                </Typography>
              </motion.div>
            </Box>
              <Box
                sx={{
                  width: { xs: '100%', md: '50%' },
                  height: {md: 400, xs: 250},
                  backgroundImage: `url(${aboutUsImageTwo})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: 2,
                }}
              />
          </Stack>
        </Box>
      </Container>
      </Box>
    </>
  )
}

export default AboutUsSection;