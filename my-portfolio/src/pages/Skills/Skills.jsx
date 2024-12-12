import { Container, Grid, Typography, Paper, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import SkillProgress from '../../components/SkillProgress/SkillProgress';
import {
  Language,
  Code,
  Storage,
  Cloud,
  Web,
  SmartToy
} from '@mui/icons-material';

const Skills = () => {
  const programmingSkills = [
    { name: "C/C++", value: 90, color: "#00599C" },
    { name: "Python", value: 88, color: "#3776AB" },
    { name: "C#", value: 85, color: "#239120" },
    { name: "JavaScript", value: 82, color: "#F7DF1E" },
    { name: "Dart", value: 80, color: "#0175C2" }
  ];

  const technicalSkills = [
    { name: "Unity Game Development", value: 85 },
    { name: "Flutter Development", value: 82 },
    { name: "React.js", value: 80 },
    { name: "Firebase", value: 78 },
    { name: "MongoDB", value: 75 }
  ];

  const learningGoals = [
    {
      icon: <SmartToy />,
      title: "Machine Learning",
      tools: ["TensorFlow", "NumPy", "Pandas"]
    },
    {
      icon: <Cloud />,
      title: "Cloud Computing",
      tools: ["AWS", "Azure", "GCP"]
    },
    {
      icon: <Web />,
      title: "Web3",
      tools: ["Blockchain", "Smart Contracts", "DApps"]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center', mb: 6 }}
        >
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {/* Programming Languages */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Code color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Programming Languages
                </Typography>
              </Box>
              {programmingSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  skill={skill.name}
                  value={skill.value}
                  color={skill.color}
                />
              ))}
            </Paper>
          </Grid>

          {/* Technical Skills */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Language color="primary" sx={{ mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Technical Skills
                </Typography>
              </Box>
              {technicalSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  skill={skill.name}
                  value={skill.value}
                />
              ))}
            </Paper>
          </Grid>

          {/* Future Learning Goals */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Future Learning Goals
              </Typography>
              <Grid container spacing={3}>
                {learningGoals.map((goal, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <Paper
                        elevation={2}
                        sx={{
                          p: 3,
                          textAlign: 'center',
                          height: '100%',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-8px)'
                          }
                        }}
                      >
                        <IconButton
                          color="primary"
                          sx={{ mb: 2 }}
                        >
                          {goal.icon}
                        </IconButton>
                        <Typography variant="h6" gutterBottom>
                          {goal.title}
                        </Typography>
                        <Box>
                          {goal.tools.map((tool, i) => (
                            <Typography
                              key={i}
                              variant="body2"
                              color="text.secondary"
                            >
                              {tool}
                            </Typography>
                          ))}
                        </Box>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills;