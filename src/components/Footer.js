import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import Logo from './Logo';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', pt: 8, pb: 4 }}>
      <Container maxWidth="lg">

        {/* ===== TOP CTA ===== */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 500,
                lineHeight: 1.35,
                mb: 2,
                maxWidth: 520,
              }}
            >
              Ready To Turn Your{' '}
              <Box
                component="span"
                sx={{
                  color: '#FF9800',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 500,
                lineHeight: 1.35,
                mb: 2,
                maxWidth: 520,
                }}
              >
                Ideas
              </Box>{' '}
              Into Meaningful{' '}
              <Box
                component="span"
                sx={{
                  color: '#FF9800',
                 fontSize: { xs: '1.8rem', md: '2.2rem' },
                fontWeight: 500,
                lineHeight: 1.35,
                mb: 2,
                maxWidth: 520,
                }}
              >
                Outcomes?
              </Box>
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                maxWidth: 480,
                lineHeight: 1.7,
              }}
            >
              We collaborate closely with teams to help them move faster,
              think bigger, and execute with confidence.
            </Typography>
          </Grid>

          {/* EMAIL */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5 }}>
                <TextField
                  fullWidth
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      height: 56,
                      backgroundColor: '#fff',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      '& fieldset': { border: 'none' },
                    },
                  }}
                />

                <Button
                  type="submit"
                  sx={{
                    height: 56,
                    px: 3.5,
                    borderRadius: '12px',
                    backgroundColor: '#FF9800',
                    color: '#000',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: '#ffa733' },
                  }}
                >
                  Send
                </Button>
              </Box>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.8rem',
                  maxWidth: 520,
                }}
              >
                Our team will contact you soon to understand your requirements
                and outline the next steps.
              </Typography>
            </form>
          </Grid>
        </Grid>

        {/* ===== FOOTER CARD ===== */}
        <Box
          sx={{
            background: 'linear-gradient(180deg, #111 0%, #0b0b0b 100%)',
            borderRadius: '18px',
            p: { xs: 3, md: 4 },
            mb: 3,
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
    <Box
      component="img"
      src="/logo.png"
      alt="Agent Factory Logo"
      sx={{
        width: 42,
        height: 42,
        objectFit: 'contain',
      }}
    />
                <Typography sx={{ fontWeight: 600 }}>
                  AGENT FACTORY
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: 7,
                      height: 7,
                      ml: 1,
                      borderRadius: '50%',
                      backgroundColor: '#FF9800',
                    }}
                  />
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
                COMPANY
              </Typography>
              {['Service', 'Careers', 'Enterprise'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: 'block',
                    mb: 0.8,
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#FF9800' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
                RESOURCES
              </Typography>
              {['News', 'Docs', 'Contact Sales', 'Open Source'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    display: 'block',
                    mb: 0.8,
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#FF9800' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography sx={{ fontWeight: 600, mb: 1.5 }}>
                FOLLOW US
              </Typography>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                {[GitHub, LinkedIn, Twitter].map((Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      backgroundColor: '#1a1a1a',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#FF9800',
                        color: '#000',
                      },
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* ===== BOTTOM ===== */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
            ©2025 Agentsfactory. All Rights Reserved
          </Typography>

          <Link
            href="#"
            sx={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              '&:hover': { color: '#FF9800' },
            }}
          >
            Privacy Policy
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
