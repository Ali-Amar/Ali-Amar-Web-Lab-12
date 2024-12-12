import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Hangman Game",
      description: "A classic word guessing game developed using C in Visual Studio Code during the first semester.",
      technologies: ["C", "VS Code", "Console App"],
      image: "/images/hangman.jpg"
    },
    {
      id: 2,
      title: "Task Master",
      description: "A comprehensive project management app created using Flutter during the third semester.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "/images/taskmaster.jpg"
    },
    {
      id: 3,
      title: "Arch Linux Exploration",
      description: "Studied and improved Arch Linux through various customizations during the fourth semester.",
      technologies: ["Linux", "Shell", "System Admin"],
      image: "/images/archlinux.jpg"
    },
    {
      id: 4,
      title: "Cricket Game",
      description: "An immersive cricket game developed using Unity with realistic physics and multiplayer support.",
      technologies: ["Unity", "C#", "3D Modeling", "Game Dev"],
      image: "/images/cricket.jpg"
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
        My Projects
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;