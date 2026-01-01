import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Grid,
  Pagination,
  Card,
  Chip,
  Drawer,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import {
  Search,
  LocationOn,
  FilterList,
  Close,
  Schedule,
  TrendingUp,
  ArrowBack,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ViewAllJobs = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);

  const industries = ['ALL', 'Development', 'Business', 'Finance & Accounting', 'Design', 'Marketing'];
  const jobTypes = ['Full Time', 'Part-Time', 'Internship', 'Contract Based'];
  const experience = ['0-2 Years', '2-4 Years', '4-8 Years', '8-10 Years', '10+ Years'];

  // Extended job data for pagination
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
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Austin, TX',
      type: 'Full Time',
      experience: '2-4 Years',
      description: 'Create beautiful and intuitive user experiences for our AI platforms.',
      posted: '5 days ago',
    },
    {
      id: 5,
      title: 'Business Analyst',
      department: 'Business',
      location: 'Chicago, IL',
      type: 'Full Time',
      experience: '2-4 Years',
      description: 'Analyze business requirements and translate them into technical solutions.',
      posted: '1 week ago',
    },
    {
      id: 6,
      title: 'Financial Controller',
      department: 'Finance & Accounting',
      location: 'Boston, MA',
      type: 'Full Time',
      experience: '4-8 Years',
      description: 'Manage financial operations and ensure compliance with regulations.',
      posted: '4 days ago',
    },
    {
      id: 7,
      title: 'Junior Developer',
      department: 'Development',
      location: 'Seattle, WA',
      type: 'Full Time',
      experience: '0-2 Years',
      description: 'Start your career in AI development with our mentorship program.',
      posted: '1 day ago',
    },
    {
      id: 8,
      title: 'Content Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-Time',
      experience: '0-2 Years',
      description: 'Create engaging content that tells our AI story to the world.',
      posted: '6 days ago',
    },
    {
      id: 9,
      title: 'Product Designer',
      department: 'Design',
      location: 'Los Angeles, CA',
      type: 'Full Time',
      experience: '4-8 Years',
      description: 'Shape the future of AI products through innovative design solutions.',
      posted: '2 weeks ago',
    },
    {
      id: 10,
      title: 'Software Engineering Intern',
      department: 'Development',
      location: 'San Francisco, CA',
      type: 'Internship',
      experience: '0-2 Years',
      description: 'Summer internship program for aspiring software engineers.',
      posted: '3 days ago',
    },
    {
      id: 11,
      title: 'Senior Marketing Director',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full Time',
      experience: '8-10 Years',
      description: 'Lead our marketing strategy and drive brand growth globally.',
      posted: '1 week ago',
    },
    {
      id: 12,
      title: 'Accountant',
      department: 'Finance & Accounting',
      location: 'Dallas, TX',
      type: 'Full Time',
      experience: '2-4 Years',
      description: 'Handle day-to-day accounting operations and financial reporting.',
      posted: '5 days ago',
    },
    {
      id: 13,
      title: 'DevOps Engineer',
      department: 'Development',
      location: 'Remote',
      type: 'Contract Based',
      experience: '4-8 Years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      posted: '2 days ago',
    },
    {
      id: 14,
      title: 'Business Development Manager',
      department: 'Business',
      location: 'Miami, FL',
      type: 'Full Time',
      experience: '4-8 Years',
      description: 'Identify and pursue new business opportunities in the AI market.',
      posted: '1 week ago',
    },
    {
      id: 15,
      title: 'Graphic Designer',
      department: 'Design',
      location: 'Portland, OR',
      type: 'Part-Time',
      experience: '2-4 Years',
      description: 'Create visual assets for marketing campaigns and product interfaces.',
      posted: '4 days ago',
    },
  ];

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

  // Filter jobs
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

  // Pagination
  const jobsPerPage = 6;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        pt: 8,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/careers')}
          sx={{
            color: '#fff',
            mb: 3,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          Back to home
        </Button>

        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontSize: '2rem', fontWeight: 500, mb: 1 }}>
            All Job Openings
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
            Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
          </Typography>
        </Box>

        {/* Search Bar */}
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
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
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
                onChange={(e) => {
                  setLocationQuery(e.target.value);
                  setPage(1);
                }}
                InputProps={{
                  startAdornment: <LocationOn sx={{ mr: 1, color: 'rgba(255,255,255,0.4)' }} />,
                }}
                sx={inputStyle}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<FilterList />}
                onClick={() => setFiltersOpen(true)}
                sx={outlinedBtn}
              >
                Filters
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Job Listings */}
        <Box sx={{ mb: 4 }}>
          {paginatedJobs.length === 0 ? (
            <Box
              sx={{
                minHeight: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(180deg,#1a1a1a,#121212)',
                borderRadius: '18px',
              }}
            >
              <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                No jobs found matching your criteria
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {paginatedJobs.map(job => (
                <Grid item xs={12} md={6} key={job.id}>
                  <Card
                    sx={{
                      background: 'linear-gradient(135deg, #222, #181818)',
                      color: '#fff',
                      p: 3,
                      borderRadius: '12px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        borderColor: '#FF9800',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box>
                        <Typography sx={{ fontSize: '1.2rem', fontWeight: 500, mb: 0.5 }}>
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
                          fontSize: '0.7rem',
                        }}
                      />
                    </Box>

                    <Typography sx={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', mb: 2, flex: 1 }}>
                      {job.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                          {job.location}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Schedule sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                          {job.type}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUp sx={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)' }} />
                        <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>
                          {job.experience}
                        </Typography>
                      </Box>
                    </Box>

                    {/* View Details and Apply Now Buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        onClick={() => navigate(`/careers/job-details/${job.id}`)}
                        sx={{
                          flex: 1,
                          borderColor: '#FF9800',
                          color: '#FF9800',
                          textTransform: 'none',
                          borderRadius: '8px',
                          fontWeight: 600,
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
                          flex: 1,
                          backgroundColor: '#FF9800',
                          color: '#000',
                          textTransform: 'none',
                          borderRadius: '8px',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#ffa733',
                          },
                        }}
                      >
                        Apply Now
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(event, value) => setPage(value)}
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.2)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#FF9800',
                    color: '#000',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#ffa733',
                    },
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        PaperProps={{
          sx: {
            background: 'linear-gradient(180deg, #1a1a1a, #111)',
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
              setPage(1);
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
              setPage(1);
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

export default ViewAllJobs;