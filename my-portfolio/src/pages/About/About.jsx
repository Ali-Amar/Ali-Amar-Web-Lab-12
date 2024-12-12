import { Container, Grid, Typography, Paper, Box, Icon } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import LaptopIcon from '@mui/icons-material/Laptop';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const About = () => {
  const features = [
    {
      icon: <CodeIcon fontSize="large" />,
      title: "Development",
      description: "Full Stack Development with expertise in modern technologies and frameworks."
    },
    {
      icon: <LaptopIcon fontSize="large" />,
      title: "Technology",
      description: "Working with cutting-edge tech stack including React, Flutter, and Unity."
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      title: "Growth",
      description: "Continuously learning and exploring new technologies in software development."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Introduction Section */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4
            }}
          >
            Dedicated and ambitious software engineering student at SEECS, NUST with a strong passion for full-stack development and emerging technologies.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            My Journey
          </Typography>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom color="primary">
                  Education
                </Typography>
                <Typography paragraph>
                  Currently pursuing Software Engineering at SEECS, NUST (2022-2026), focusing on modern software development practices and technologies.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom color="primary">
                  Goals
                </Typography>
                <Typography paragraph>
                  Aiming to strengthen my foundation in data science and machine learning through hands-on projects and continuous learning.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;