import { Box, Typography, Card, CardContent } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
return (
    <>
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
            <Card sx={{ 
                perspective: '800px', 
                width: 300, 
                height: 250, 
                borderRadius: '20px',
                }}>
                <CardContent>
                    <FormatQuoteIcon
                        sx={{
                            fontSize: 70,
                            color: 'primary.main',
                            transform: 'rotateY(180deg)',
                            transformOrigin: 'center',
                            display: 'inline-block',
                        }}
                    />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2, color: '#000' }}>
                        Ang ganda ng turo mo sakin kahapon, puro set-up.
                        Ang galing mo magturo coach Bry.
                        I'm excited sa next na ituturo mo.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        - Coach Bry's Student
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ 
                perspective: '800px', 
                width: 300, 
                height: 250, 
                borderRadius: '20px', 
                }}>
                <CardContent>
                    <FormatQuoteIcon
                        sx={{
                            fontSize: 70,
                            color: 'primary.main',
                            transform: 'rotateY(180deg)',
                            transformOrigin: 'center',
                            display: 'inline-block'
                        }}
                    />
                    <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                        Coach Ferdie was superb in his craft.I look forward to learning the sport and be connected with fellow table tennis enthusiasts.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        - Coach Ferdie's Student
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ 
                perspective: '800px', 
                width: 300, 
                height: 250, 
                borderRadius: '20px', }}>
                <CardContent>
                    <FormatQuoteIcon
                        sx={{
                            fontSize: 70,
                            color: 'primary.main',
                            transform: 'rotateY(180deg)',
                            transformOrigin: 'center',
                            display: 'inline-block'
                        }}
                    />
                   <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                        Solid talaga mga prizes sa Spin Republic. Laging puno and tournament.
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'right' }}>
                        - Mickey Repedro (Player)
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </>
);
};

export default Testimonials;