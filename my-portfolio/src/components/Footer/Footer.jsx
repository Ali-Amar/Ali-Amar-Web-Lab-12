import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body1">
            © 2024 Ali Amar. All rights reserved.
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <IconButton
              color="primary"
              component="a"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="mailto:aamar.bese22seecs@seecs.edu.pk"
            >
              <Email />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;