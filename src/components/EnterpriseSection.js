import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const EnterpriseSection = () => {
  return (
    <Box
      id="enterprise"
      sx={{
        minHeight: '10vh',
        backgroundColor: '#000',
        color: '#fff',
       // py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        {/* ===== Header ===== */}
        <Box textAlign="center" mb={8}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#FF9800',
              }}
            />
            <Typography
              sx={{
                fontSize: 14,
                letterSpacing: 1,
                textTransform: 'uppercase',
                opacity: 0.9,
              }}
            >
              Enterprise
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: 32, md: 44 },
              fontWeight: 700,
              mb: 2,
            }}
          >
            How We Help
          </Typography>

          {/* 2-line paragraph */}
          <Typography
            sx={{
              maxWidth: 520,
              mx: 'auto',
              fontSize: 16,
              lineHeight: 1.6,
              opacity: 0.75,
            }}
          >
            We create powerful, scalable AI solutions that streamline processes
            and accelerate enterprise growth.
          </Typography>
        </Box>

        {/* ===== FULL DIAGRAM IMAGE ===== */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src="/Enterprise Screen.png"
            alt="Enterprise AI Workflow"
            sx={{
              width: '100%',
              maxWidth: 1100,
              height: 'auto',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default EnterpriseSection;
