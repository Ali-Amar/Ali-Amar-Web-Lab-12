import { Card, CardContent, CardMedia, Typography, Chip, Box, IconButton } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        elevation={3}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)'
          }
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={project.image || '/api/placeholder/400/200'}
          alt={project.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {project.description}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            {project.technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>

          <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
            {project.github && (
              <IconButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                <GitHub />
              </IconButton>
            )}
            {project.demo && (
              <IconButton
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                <Launch />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;