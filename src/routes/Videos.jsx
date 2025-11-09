import {Box, Container, Card, CardHeader, CardMedia, Typography} from '@mui/material';

const videosArray=[
    {
        title: 'Easy Way To Lean Backhand Drive',
        url: 'https://www.youtube.com/embed/MImaj4E7BA4'
    },
    {
        title: 'How To Serve Short and Long Ball',
        url: 'https://www.youtube.com/embed/bwG_enk225g'
    },
    {
        title: 'How To Attack Aggressive Underspin Push',
        url: 'https://www.youtube.com/embed/bYPyQ1EtxP8'
    },
     {
        title: 'How to Push Aggressively',
        url: 'https://www.youtube.com/embed/CcXX8ndVVwI'
    },
    {
        title: 'How to Block Spinny Loops',
        url: 'https://www.youtube.com/embed/NlmwoKurL8k'
    },
     {
        title: 'How to Do a Shortball Return',
        url: 'https://www.youtube.com/embed/LNzavhdCY-A'
    },
    {
        title: 'Why You Should Hop Back After a Backhand Flick',
        url: 'https://www.youtube.com/embed/bpAvGziWIr0'
    },
     {
        title: 'Short Ball and Long Ball Serve Strategy',
        url: 'https://www.youtube.com/embed/Pwxq7qQO894'
    },
]

const Videos = () => {  
    return (
        <Box bgcolor='#000' minHeight='100vh' paddingY={6}>
            <Container>
                <Box display='flex' flexDirection='row' alignItems='center' gap={2} flexWrap='wrap' justifyContent='center'>
                    {videosArray.map((video, index) => {
                        return (
                        <Box key={index}>
                        <Typography variant='h6' color='#fff' mt={8}>Tutorial Video {index + 1}</Typography>   
                        <Container>
                            <Card sx={{ width: {md: 800, xs: 300}, margin: 'auto', mt: 4 }}>
                            <Box
                                sx={{
                                position: 'relative',
                                paddingTop: '56.25%', // 16:9 aspect ratio
                                }}
                            >
                                <iframe
                                src={video.url}
                                title={video.title}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0,
                                    borderRadius: '0',
                                }}
                                allowFullScreen
                                ></iframe>
                            </Box>
                            </Card>
                        </Container>
                        </Box>
                        )
                    })}
                   
                </Box>
            </Container>    
        </Box>
    );
};

export default Videos;