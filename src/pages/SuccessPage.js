import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Button,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* Back Button */}
        <Button
          onClick={() => navigate('/careers/all')}
          startIcon={<ArrowBack sx={{ fontSize: '14px' }} />}
          sx={{
            color: '#666666',
            fontSize: '12px',
            textTransform: 'none',
            mb: 4,
            padding: 0,
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#888888',
            },
          }}
        >
          Back to Jobs
        </Button>

        {/* Success Card */}
        <Paper
          sx={{
            backgroundColor: '#000000',
            padding: { xs: 6, md: 10 },
            borderRadius: '24px',
            border: '1px solid #333333',
            boxShadow: 'none',
            textAlign: 'center',
          }}
        >
          {/* Success Icon */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <img
              src="/Group.png"
              alt="Success"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Success Message */}
          <Typography
            variant="h5"
            sx={{
              color: '#FF6B00',
              mb: 4,
              fontSize: { xs: '20px', md: '24px' },
              fontWeight: 600,
              letterSpacing: '0.5px',
            }}
          >
            Application Has Been Successfully Received
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              color: '#CCCCCC',
              fontSize: { xs: '13px', md: '14px' },
              lineHeight: 1.8,
              mb: 6,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Thank You For Applying! We've Received Your Application And Our
            Recruitment Team Will Carefully Review Your Details. If Your Profile
            Matches Our Requirements, We Will Contact You Shortly.
          </Typography>

          {/* Back to Home Button */}
          <Button
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: '#4A4A4A',
              color: '#ffffff',
              padding: '12px 40px',
              fontSize: '13px',
              textTransform: 'none',
              borderRadius: '6px',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#5A5A5A',
              },
            }}
          >
            Back To Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default SuccessPage;
