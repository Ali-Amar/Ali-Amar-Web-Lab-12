import { Box, Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';

const TimelineItem = ({ date, title, institution, description, index }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          mb: 4,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: { xs: '20px', md: '50%' },
            transform: { xs: 'none', md: 'translateX(-50%)' },
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: theme.palette.primary.main,
            display: { xs: 'none', md: 'block' }
          }
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'left', md: index % 2 === 0 ? 'right' : 'left' },
            pr: { md: index % 2 === 0 ? 4 : 0 },
            pl: { md: index % 2 === 0 ? 0 : 4 },
            position: 'relative'
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 3,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                right: { xs: 'auto', md: index % 2 === 0 ? '-10px' : 'auto' },
                left: { xs: 'auto', md: index % 2 === 0 ? 'auto' : '-10px' },
                top: '20px',
                width: '20px',
                height: '20px',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '50%',
                display: { xs: 'none', md: 'block' }
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
              <SchoolIcon color="primary" />
              <Typography variant="h6" color="primary">
                {date}
              </Typography>
            </Box>
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {institution}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

const Timeline = ({ items }) => {
  return (
    <Box sx={{ position: 'relative', py: 4 }}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} index={index} />
      ))}
    </Box>
  );
};

export default Timeline;