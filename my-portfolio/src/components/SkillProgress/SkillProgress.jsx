import { Box, Typography, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

const SkillProgress = ({ skill, value, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
            {skill}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {value}%
          </Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={value} 
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: 'grey.200',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              backgroundColor: color || 'primary.main',
            }
          }}
        />
      </Box>
    </motion.div>
  );
};

export default SkillProgress;