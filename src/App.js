import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import EnterpriseSection from './components/EnterpriseSection';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer';
import ViewAllJobs from './pages/ViewAllJobs';
import JobDetails from './pages/JobDetails';
import ApplyJob from './pages/ApplyJob';
import SuccessPage from './pages/SuccessPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9800',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <EnterpriseSection />
      <CareersSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/careers" element={<CareersSection />} />
           <Route path="/careers/all" element={<ViewAllJobs />} />
        <Route path="/careers/job-details/:id" element={<JobDetails />} />
          <Route path="/careers/apply" element={<ApplyJob />} />
          <Route path="/careers/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

