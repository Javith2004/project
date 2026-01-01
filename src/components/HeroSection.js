import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
} from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 10 },
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255,255,255,0.03) 10px,
          rgba(255,255,255,0.03) 20px
        )`,
      }}
    >
      <Container maxWidth="lg">

        {/* ================= HERO CONTENT ================= */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>

          {/* Vision Label */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#FF6B00',
              }}
            />
            <Typography
              sx={{
                fontSize: '12px',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                color: '#CCCCCC',
                fontWeight: 400,
              }}
            >
              Vision
            </Typography>
          </Box>

          {/* Main Heading (REDUCED SIZE) */}
          <Typography
            component="h1"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              mb: 3,
              fontSize: {
                xs: '28px',
                sm: '40px',
                md: '53px',
                lg: '53px',
              },
              lineHeight: 1.15,
              letterSpacing: '1.5px',
            }}
          >
            AGENT-POWERED
            <br />
            BUSINESS WORKFLOWS
          </Typography>

          {/* Description (FORCED 4 LINES) */}
          <Typography
            sx={{
              color: '#A8A8A8',
              maxWidth: '560px', // forces 4-line wrap like reference
              mx: 'auto',
              mb: 5,
              lineHeight: 1.85,
              fontSize: '22px',
            }}
          >
            The Strategic AI Partner — solving today's challenges
            <br />
            while building tomorrow's AGI. Scale smarter. Operate
            <br />
            faster. Deliver flawlessly — with AI that integrates,
            <br />
            automates, and drives measurable growth.
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FF6B00',
              color: '#000000',
              px: 6,
              py: 1.7,
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              boxShadow: '0 6px 24px rgba(255, 107, 0, 0.45)',
              '&:hover': {
                backgroundColor: '#FF8533',
                boxShadow: '0 8px 32px rgba(255, 107, 0, 0.6)',
              },
            }}
          >
            Request Demo
          </Button>
        </Box>

        {/* ================= FEATURES IMAGE ================= */}
        <Paper
          sx={{
            backgroundColor: '#1a1a1a',
            p: 3,
            borderRadius: '16px',
            mb: 6,
            border: '1px solid #2A2A2A',
          }}
        >
          <Box
            component="img"
            src="/Frame 119.png"
            alt="AI workflow features"
            sx={{
              width: '100%',
              borderRadius: '12px',
              display: 'block',
            }}
          />
        </Paper>

        {/* ================= GRAPH SECTION ================= */}
        <Paper
          sx={{
            backgroundColor: '#0A0A0A',
            p: 4,
            borderRadius: '16px',
            mb: 8,
            border: '1px solid #2A2A2A',
          }}
        >
          <Typography
            align="center"
            sx={{ 
              mb: 3, 
              fontSize: '14px',
              color: '#CCCCCC',
            }}
          >
            Overall Efficiency Score vs Previous Score{' '}
            <Box component="span" sx={{ color: '#4CAF50', fontWeight: 700 }}>
              +34%
            </Box>
          </Typography>

          <Box
            component="img"
            src="/Line Graph - 2.png"
            alt="Efficiency graph"
            sx={{
              width: '100%',
              borderRadius: '12px',
            }}
          />
        </Paper>

        {/* ================= TRUSTED BY ================= */}
        <Box sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#FF6B00',
              }}
            />
            <Typography
              sx={{
                fontSize: '12px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#CCCCCC',
              }}
            >
              Trusted by Leading Teams
            </Typography>
          </Box>

          <Typography 
            sx={{ 
              color: '#7A7A7A',
              mb: 4,
              fontSize: '14px',
              maxWidth: '560px',
              mx: 'auto',
            }}
          >
            Used by innovative teams who rely on speed, accuracy, and reliability to scale their operations.
          </Typography>

          <Box
            component="img"
            src="/Frame 29.png"
            alt="Trusted brands"
            sx={{
              maxWidth: '100%',
              opacity: 0.85,
            }}
          />
        </Box>

      </Container>
    </Box>
  );
};

export default HeroSection;
