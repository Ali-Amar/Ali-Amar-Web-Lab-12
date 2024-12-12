import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import Timeline from '../../components/Timeline/Timeline';
import { School, Star, EmojiEvents } from '@mui/icons-material';

const Education = () => {
  const educationData = [
    {
      date: "2022 - 2026",
      title: "Bachelor of Software Engineering",
      institution: "SEECS, NUST",
      description: "Currently pursuing software engineering with focus on modern technologies and development practices. Participating in various technical projects and maintaining strong academic performance."
    },
    {
      date: "2020 - 2022",
      title: "Higher Secondary Education",
      institution: "Kashmir Model College",
      description: "Completed high school education with distinction, focusing on Computer Science and Mathematics. Participated in various programming competitions and tech events."
    }
  ];

  const achievements = [
    {
      icon: <Star color="primary" />,
      title: "Academic Excellence",
      description: "Consistently maintained top academic performance in software engineering courses."
    },
    {
      icon: <EmojiEvents color="primary" />,
      title: "Programming Competitions",
      description: "Participated in various coding competitions and hackathons."
    },
    {
      icon: <School color="primary" />,
      title: "Technical Certifications",
      description: "Completed various technical certifications in modern technologies."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Header Section */}
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{ textAlign: 'center', mb: 6 }}
      >
        Educational Journey
      </Typography>

      {/* Timeline Section */}
      <Timeline items={educationData} />

      {/* Achievements Section */}
      <Box sx={{ mt: 8 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: 'center', mb: 4 }}
        >
          Achievements & Certifications
        </Typography>
        <Grid container spacing={4}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {achievement.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography color="text.secondary">
                  {achievement.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Education;