import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
} from '@mui/material';
import {
  AutoAwesome,
  Settings,
  Description,
  BarChart,
} from '@mui/icons-material';

const ServicesSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      id: 0,
      icon: <AutoAwesome sx={{ fontSize: 24 }} />,
      title: 'Generative AI',
      description: 'Leverage cutting-edge generative AI technologies including GPT models, large language models (LLMs), and neural networks to create intelligent solutions that transform your business processes. Our AI services include conversational AI chatbots, intelligent content generation, automated code generation, and AI-powered decision support systems that drive innovation and competitive advantage.',
      keywords: 'Generative AI, GPT integration, LLM, AI chatbots, neural networks, machine learning',
    },
    {
      id: 1,
      icon: <Settings sx={{ fontSize: 24 }} />,
      title: 'AI Automation',
      description: 'Streamline operations with intelligent automation solutions powered by robotic process automation (RPA), workflow orchestration, and AI-driven systems. Our automation services enhance operational efficiency, reduce costs by up to 60%, minimize human error, and accelerate digital transformation through intelligent process mining, document automation, and cognitive automation technologies.',
      keywords: 'RPA, process automation, workflow optimization, intelligent automation, digital transformation',
    },
    {
      id: 2,
      icon: <Description sx={{ fontSize: 24 }} />,
      title: 'Data Solutions',
      description: 'Transform raw data into strategic business assets with our comprehensive data engineering services. We design and implement scalable data pipelines, ETL/ELT processes, cloud data warehouses (Snowflake, BigQuery, Redshift), data lakes, real-time streaming architectures, and modern data stacks that enable data-driven decision making and unlock business intelligence across your organization.',
      keywords: 'data engineering, ETL, data warehousing, data lakes, big data, cloud data platform',
    },
    {
      id: 3,
      icon: <BarChart sx={{ fontSize: 24 }} />,
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with advanced analytics, predictive modeling, and business intelligence solutions. Our analytics services include interactive dashboards, data visualization, machine learning models, statistical analysis, customer analytics, and AI-powered reporting tools that transform complex data into actionable insights and measurable business outcomes.',
      keywords: 'business intelligence, predictive analytics, data visualization, BI tools, dashboards',
    },
  ];

  return (
    <Box
      component="section"
      aria-label="AI and Automation Services"
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#ffffff',
        py: { xs: 6, md: 8 },
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
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
              component="span"
              sx={{
                color: '#CCCCCC',
                fontSize: '13px',
                letterSpacing: '1.5px',
                fontWeight: 400,
              }}
            >
              Services
            </Typography>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '28px', sm: '36px', md: '42px' },
              fontWeight: 700,
              mb: 2.5,
              letterSpacing: '2px',
            }}
          >
            WHAT WE OFFER
          </Typography>

          <Typography
            sx={{
              color: '#7A7A7A',
              fontSize: { xs: '13px', md: '14px' },
              maxWidth: '580px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            From intelligent AI agents to enterprise-grade data systems, we provide the full spectrum of modern AI and automation services.
          </Typography>
        </Box>

        {/* Timeline Navigation */}
        <Box sx={{ mb: 8, position: 'relative', px: { xs: 2, md: 0 } }}>
          {/* Horizontal Line */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: '8%', md: '5%' },
              right: { xs: '8%', md: '5%' },
              height: '2px',
              backgroundColor: '#4A4A4A',
              transform: 'translateY(-50%)',
              zIndex: 0,
            }}
          />

          {/* Active Progress Line */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: '8%', md: '5%' },
              width: `${(activeStep / (services.length - 1)) * (window.innerWidth > 900 ? 90 : 84)}%`,
              height: '2px',
              backgroundColor: '#FF6B00',
              transform: 'translateY(-50%)',
              zIndex: 0,
              transition: 'width 0.4s ease-in-out',
            }}
          />

          {/* Timeline Steps */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {services.map((service, index) => (
              <Box
                key={service.id}
                onClick={() => setActiveStep(index)}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 42, md: 48 },
                    height: { xs: 42, md: 48 },
                    borderRadius: '50%',
                    backgroundColor: activeStep >= index ? '#FF6B00' : '#6B6B6B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    color: activeStep >= index ? '#000000' : '#ffffff',
                    '&:hover': {
                      backgroundColor: activeStep >= index ? '#FF8533' : '#7A7A7A',
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  {service.icon}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            minHeight: '350px',
            border: '1px solid #2A2A2A',
            borderRadius: '20px',
            padding: { xs: 4, md: 7 },
            backgroundColor: '#0A0A0A',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
          }}
        >
          {/* Top Accent Bar */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #FF6B00 0%, #FF8533 100%)',
            }}
          />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: '#FF6B00',
              }}
            />
            <Typography
              component="h2"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '20px', md: '26px' },
                fontWeight: 600,
              }}
            >
              {services[activeStep].title}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: '#6B7280',
              fontSize: { xs: '14px', md: '15px' },
              lineHeight: 1.85,
              maxWidth: '900px',
              mb: 4,
            }}
          >
            {services[activeStep].description}
          </Typography>

          {/* Keywords Section */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1.5,
              mt: 4,
            }}
          >
            {services[activeStep].keywords.split(', ').map((keyword, idx) => (
              <Box
                key={idx}
                sx={{
                  px: 2.5,
                  py: 1,
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #333333',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#888888',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#2A2A2A',
                    borderColor: '#FF6B00',
                    color: '#FF6B00',
                  },
                }}
              >
                {keyword}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Navigation Dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 6,
          }}
        >
          {services.map((_, index) => (
            <Box
              key={index}
              onClick={() => setActiveStep(index)}
              sx={{
                width: activeStep === index ? 36 : 10,
                height: 10,
                borderRadius: '5px',
                backgroundColor: activeStep === index ? '#FF6B00' : '#333333',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: activeStep === index ? '#FF8533' : '#555555',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;