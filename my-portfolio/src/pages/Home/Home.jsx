import { Box } from '@mui/material';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Hero />
      {/* We'll add more sections here later */}
      <Footer />
    </Box>
  );
};

export default Home;