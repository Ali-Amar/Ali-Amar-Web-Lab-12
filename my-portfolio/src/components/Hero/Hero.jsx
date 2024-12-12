import { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState(0);
  const titles = ["Software Engineer", "Full Stack Developer", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % titles.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: 'white',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box textAlign="center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src="/Recent.jpeg"
                alt="Ali Amar"
                sx={{
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  border: '4px solid white',
                  mb: 3,
                  objectFit: 'cover',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>

            <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              Ali Amar
            </Typography>

            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }} 
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: theme.palette.grey[100]
                }}
              >
                {titles[currentText]}
              </Typography>
            </motion.div>

            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="center"
            >
              <Button 
                variant="contained" 
                color="secondary"
                size="large"
                onClick={() => navigate('/projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outlined" 
                color="inherit"
                size="large"
                onClick={() => navigate('/contact')}
              >
                Contact Me
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;