import { 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  IconButton
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LinkedIn, 
  GitHub,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'aamar.bese22seecs@seecs.edu.pk',
      link: 'mailto:aamar.bese22seecs@seecs.edu.pk'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '(92) 349-8931538',
      link: 'tel:+923498931538'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/ali-amar-90a690312/'
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'Follow on GitHub',
      link: 'https://github.com/Ali-Amar'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', mb: 6 }}
      >
        Get in Touch
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
                Contact Information
              </Typography>
              <Box sx={{ mt: 3 }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Box
                      component="a"
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        textDecoration: 'none',
                        color: 'inherit',
                        transition: 'transform 0.2s ease-in-out',
                        '&:hover': {
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      <IconButton color="primary" sx={{ mr: 2 }}>
                        {info.icon}
                      </IconButton>
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          {info.label}
                        </Typography>
                        <Typography variant="body1">
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;