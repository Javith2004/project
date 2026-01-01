import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { ArrowBack, InsertDriveFile } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ApplyJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
  });
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const uploadedFile = e.dataTransfer.files[0];
      if (uploadedFile.type === 'application/pdf' && uploadedFile.size <= 12 * 1024 * 1024) {
        setFile(uploadedFile);
      } else {
        alert('Please upload a PDF file under 12MB');
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      if (uploadedFile.type === 'application/pdf' && uploadedFile.size <= 12 * 1024 * 1024) {
        setFile(uploadedFile);
      } else {
        alert('Please upload a PDF file under 12MB');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a resume');
      return;
    }
    navigate('/careers/success');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
      }}
    >
      {/* Back Button - Top Left */}
      <Box sx={{ px: 2, pt: 3, pb: 2 }}>
        <Container maxWidth="lg">
          <Button
            onClick={() => navigate('/careers/all')}
            startIcon={<ArrowBack sx={{ fontSize: '14px' }} />}
            sx={{
              color: '#666666',
              fontSize: '12px',
              textTransform: 'none',
              padding: 0,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#888888',
              },
            }}
          >
            Back to Jobs
          </Button>
        </Container>
      </Box>

      {/* Form Container */}
      <Box sx={{ px: 2, pb: 4 }}>
      <Container maxWidth="lg">
        <Paper
          sx={{
            backgroundColor: '#000000',
            padding: { xs: 4, md: 8 },
            borderRadius: '24px',
            border: '1px solid #333333',
            boxShadow: 'none',
          }}
        >
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              color: '#FF6B00',
              mb: 8,
              textAlign: 'center',
              fontSize: { xs: '18px', md: '20px' },
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            ADD CV/RESUME
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              {/* Name Input */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#ffffff',
                    mb: 1.5,
                    fontSize: '14px',
                  }}
                >
                  Enter Your Name
                </Typography>
                <TextField
                  fullWidth
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  InputProps={{
                    sx: {
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      fontSize: '14px',
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: '#444444',
                      },
                      '&:hover fieldset': {
                        borderColor: '#555555',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#666666',
                      },
                    },
                  }}
                />
              </Box>

              {/* Experience Input */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#ffffff',
                    mb: 1.5,
                    fontSize: '14px',
                  }}
                >
                  Years Of Experience
                </Typography>
                <TextField
                  fullWidth
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  required
                  InputProps={{
                    sx: {
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      fontSize: '14px',
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: '#444444',
                      },
                      '&:hover fieldset': {
                        borderColor: '#555555',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#666666',
                      },
                    },
                  }}
                />
              </Box>

              {/* File Upload */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#ffffff',
                    mb: 1.5,
                    fontSize: '14px',
                  }}
                >
                  Upload Resume & Cover Letter
                </Typography>
                <Box
                  component="label"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  sx={{
                    border: dragActive ? '2px dashed #FF6B00' : '2px dashed #444444',
                    borderRadius: '8px',
                    padding: { xs: 6, md: 10 },
                    textAlign: 'center',
                    cursor: 'pointer',
                    display: 'block',
                    backgroundColor: dragActive ? 'rgba(255, 107, 0, 0.05)' : 'transparent',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: '#FF6B00',
                      backgroundColor: 'rgba(255, 107, 0, 0.03)',
                    },
                  }}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  <InsertDriveFile 
                    sx={{ 
                      fontSize: 48, 
                      color: '#666666', 
                      mb: 2 
                    }} 
                  />
                  <Typography 
                    sx={{ 
                      color: '#ffffff', 
                      fontSize: '14px',
                      mb: 0.5,
                    }}
                  >
                    {file ? file.name : 'Browse Files Or Drop Here'}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#666666',
                      fontSize: '11px',
                      display: 'block',
                    }}
                  >
                    Only PDF Format Available, Max File Size 12MB.
                  </Typography>
                </Box>
              </Box>

              {/* Buttons */}
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="space-between"
                sx={{ mt: 6 }}
              >
                <Button
                  onClick={() => navigate('/careers/all')}
                  sx={{
                    backgroundColor: '#4A4A4A',
                    color: '#ffffff',
                    padding: '12px 48px',
                    fontSize: '14px',
                    textTransform: 'none',
                    borderRadius: '6px',
                    '&:hover': {
                      backgroundColor: '#5A5A5A',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: '#FF6B00',
                    color: '#ffffff',
                    padding: '12px 48px',
                    fontSize: '14px',
                    textTransform: 'none',
                    borderRadius: '6px',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#FF8533',
                    },
                  }}
                >
                  Apply Now
                </Button>
              </Stack>
            </Stack>
          </form>
        </Paper>
      </Container>
      </Box>
    </Box>
  );
};

export default ApplyJob;