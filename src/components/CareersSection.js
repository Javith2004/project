import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Grid,
  Drawer,
  IconButton,
  Checkbox,
  FormControlLabel,
  Card,
  Chip,
} from '@mui/material';
import {
  Search,
  LocationOn,
  FilterList,
  Close,
  Email,
  Work,
  Schedule,
  TrendingUp,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CareersSection = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const navigate = useNavigate();

  const industries = ['ALL', 'Development', 'Business', 'Finance & Accounting', 'Design', 'Marketing'];
  const jobTypes = ['Full Time', 'Part-Time', 'Internship', 'Contract Based'];
  const experience = ['0-2 Years', '2-4 Years', '4-8 Years', '8-10 Years', '10+ Years'];

  // Dummy job data
  const allJobs = [
    {
      id: 1,
      title: 'AI Developer',
      department: 'Development',
      location: 'New York, NY',
      type: 'Full Time',
      experience: '0-2 Years',
      description: 'Join our team to build cutting-edge AI solutions and machine learning models.',
      posted: '2 days ago',
    },
    {
      id: 2,
      title: 'Senior AI Engineer',
      department: 'Development',
      location: 'San Francisco, CA',
      type: 'Full Time',
      experience: '4-8 Years',
      description: 'Lead AI initiatives and mentor junior developers in our growing team.',
      posted: '1 week ago',
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full Time',
      experience: '2-4 Years',
      description: 'Drive marketing campaigns and brand awareness for our AI products.',
      posted: '3 days ago',
    },
  ];

  const handleFindJobs = () => {
    setShowResults(true);
  };

  const handleCheckboxChange = (category, value) => {
    if (category === 'industry') {
      setSelectedIndustries(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    } else if (category === 'jobType') {
      setSelectedJobTypes(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    } else if (category === 'experience') {
      setSelectedExperience(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    }
  };

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = !searchQuery || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !locationQuery || 
      job.location.toLowerCase().includes(locationQuery.toLowerCase());
    
    const matchesIndustry = selectedIndustries.length === 0 || 
      selectedIndustries.includes('ALL') ||
      selectedIndustries.includes(job.department);
    
    const matchesJobType = selectedJobTypes.length === 0 || 
      selectedJobTypes.includes(job.type);
    
    const matchesExperience = selectedExperience.length === 0 || 
      selectedExperience.includes(job.experience);

    return matchesSearch && matchesLocation && matchesIndustry && matchesJobType && matchesExperience;
  });

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 10 }}>
      <Container maxWidth="lg">

        {/* ===== HEADER ===== */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box>
              <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>
                Careers
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FF9800' }} />
                <Typography sx={{ fontSize: '0.85rem', letterSpacing: 1, color: '#FF9800' }}>
                  JOB OPENINGS
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: '0.85rem',
                color: '#FF9800',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/careers/all')}
            >
              View All Jobs →
            </Typography>
          </Box>
        </Box>

        {/* ===== SEARCH BAR ===== */}
        <Paper
          sx={{
            background: 'linear-gradient(180deg,#1a1a1a,#111)',
            p: 2.5,
            borderRadius: '14px',
            mb: 4,
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search by: Job title, Position, Keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1, color: 'rgba(255,255,255,0.4)' }} />,
                }}
                sx={inputStyle}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search by: City, State or Zip Code"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
                InputProps={{
                  startAdornment: <LocationOn sx={{ mr: 1, color: 'rgba(255,255,255,0.4)' }} />,
                }}
                sx={inputStyle}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FilterList />}
                  onClick={() => setFiltersOpen(true)}
                  sx={outlinedBtn}
                >
                  Filters
                </Button>

                <Button
                  fullWidth
                  onClick={handleFindJobs}
                  sx={primaryBtn}
                >
                  Find Jobs
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* ===== JOB LIST WITH INTEGRATED CTA ===== */}
        <Box
          sx={{
            minHeight: 600,
            borderRadius: '18px',
            background: 'linear-gradient(180deg,#1a1a1a,#121212)',
            display: 'flex',
            flexDirection: 'column',
            p: 4,
          }}
        >
          {/* Job Listings Area */}
          <Box
            sx={{
              flex: 1,
              mb: 4,
            }}
          >
            {!showResults ? (
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                  Job listings will appear here
                </Typography>
              </Box>
            ) : filteredJobs.length === 0 ? (
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                  No jobs found matching your criteria
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {filteredJobs.map(job => (
                  <Card
                    key={job.id}
                    sx={{
                      background: 'linear-gradient(135deg, #222, #181818)',
                      color: '#fff',
                      p: 3,
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#FF9800',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography sx={{ fontSize: '1.3rem', fontWeight: 500, mb: 0.5 }}>
                          {job.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>
                          {job.department}
                        </Typography>
                      </Box>
                      <Chip
                        label={job.posted}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255,152,0,0.15)',
                          color: '#FF9800',
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>

                    <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                      {job.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                          {job.location}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Schedule sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                          {job.type}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUp sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>
                          {job.experience}
                        </Typography>
                      </Box>
                    </Box>

                     <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                          variant="outlined"
                          onClick={() => navigate(`/careers/job-details/${job.id}`)}
                          sx={{
                            color: '#FF9800',
                            borderColor: '#FF9800',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '8px',
                            px: 3,
                            '&:hover': {
                              borderColor: '#ffa733',
                              backgroundColor: 'rgba(255,152,0,0.1)',
                            },
                          }}
                        >
                          View Details
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => navigate('/careers/apply')}
                          sx={{
                            backgroundColor: '#FF9800',
                            color: '#000',
                            fontWeight: 600,
                            textTransform: 'none',
                            borderRadius: '8px',
                            px: 3,
                            '&:hover': {
                              backgroundColor: '#ffa733',
                            },
                          }}
                        >
                          Apply Now
                        </Button>
                      </Box>
                  </Card>
                ))}
              </Box>
            )}
          </Box>

          {/* CTA Section - Bottom */}
          <Box>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={3}>
                <Typography sx={{ fontSize: '1.3rem', lineHeight: 1.3 }}>
                  Didn't Find The{' '}
                  <Box component="span" sx={{ color: '#FF9800' }}>
                    Right Role?
                  </Box>
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                  We're always excited to meet talented people. Drop us an email — we'd love to hear from you.
                </Typography>
              </Grid>

              <Grid item xs={12} md={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' }, gap: 1 }}>
                  <Email sx={{ color: '#FF9800', fontSize: '1.1rem' }} />
                  <Typography sx={{ color: '#FF9800', fontSize: '0.85rem' }}>
                    careers@business.ai
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* ===== FILTER DRAWER ===== */}
      <Drawer
        anchor="right"
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#111',
            width: 300,
            p: 3,
            color: '#fff',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography sx={{ color: '#FF9800', fontSize: '1.1rem', fontWeight: 500 }}>Filters</Typography>
          <IconButton onClick={() => setFiltersOpen(false)} sx={{ color: '#fff' }}>
            <Close />
          </IconButton>
        </Box>

        {/* Industry Filter */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 500 }}>Industry</Typography>
          {industries.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  checked={selectedIndustries.includes(item)}
                  onChange={() => handleCheckboxChange('industry', item)}
                  sx={{
                    color: 'rgba(255,152,0,0.5)',
                    '&.Mui-checked': { color: '#FF9800' },
                  }}
                />
              }
              label={item}
              sx={{ display: 'block', mb: 0.5 }}
            />
          ))}
        </Box>

        {/* Job Type Filter */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 500 }}>Job Type</Typography>
          {jobTypes.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  checked={selectedJobTypes.includes(item)}
                  onChange={() => handleCheckboxChange('jobType', item)}
                  sx={{
                    color: 'rgba(255,152,0,0.5)',
                    '&.Mui-checked': { color: '#FF9800' },
                  }}
                />
              }
              label={item}
              sx={{ display: 'block', mb: 0.5 }}
            />
          ))}
        </Box>

        {/* Experience Filter */}
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 500 }}>Experience</Typography>
          {experience.map((item) => (
            <FormControlLabel
              key={item}
              control={
                <Checkbox
                  checked={selectedExperience.includes(item)}
                  onChange={() => handleCheckboxChange('experience', item)}
                  sx={{
                    color: 'rgba(255,152,0,0.5)',
                    '&.Mui-checked': { color: '#FF9800' },
                  }}
                />
              }
              label={item}
              sx={{ display: 'block', mb: 0.5 }}
            />
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            fullWidth
            onClick={() => {
              setSelectedIndustries([]);
              setSelectedJobTypes([]);
              setSelectedExperience([]);
            }}
            sx={{
              height: 45,
              borderRadius: '10px',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              fontWeight: 500,
              textTransform: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              '&:hover': { 
                backgroundColor: '#222',
                borderColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            Clear
          </Button>

          <Button
            fullWidth
            onClick={() => {
              setFiltersOpen(false);
              handleFindJobs();
            }}
            sx={{
              height: 45,
              borderRadius: '10px',
              backgroundColor: '#FF9800',
              color: '#000',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#ffa733' },
            }}
          >
            Apply
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

/* ===== STYLES ===== */
const inputStyle = {
  '& .MuiOutlinedInput-root': {
    height: 50,
    color: '#fff',
    borderRadius: '10px',
    backgroundColor: '#000',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.25)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255,0.45)',
    },
  },
};

const outlinedBtn = {
  height: 50,
  borderRadius: '10px',
  color: '#fff',
  borderColor: 'rgba(255,255,255,0.3)',
  textTransform: 'none',
  '&:hover': {
    borderColor: 'rgba(255,255,255,0.5)',
  },
};

const primaryBtn = {
  height: 50,
  borderRadius: '10px',
  backgroundColor: '#FF9800',
  color: '#000',
  fontWeight: 600,
  textTransform: 'none',
  '&:hover': { backgroundColor: '#ffa733' },
};

export default CareersSection;