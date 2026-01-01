# Agent Factory Website

A modern, dark-themed React.js website built with Material UI, matching the Figma design for Agent Factory.

## Features

- **Navigation Bar**: Responsive navigation with hamburger menu (3 lines) for mobile devices
- **Hero Section**: Main landing section with features, efficiency chart, and trusted by section
- **Services Section**: Interactive timeline/process flow with content display
- **Enterprise Section**: Visual representation with central AI icon and connected boxes
- **Careers Section**: Complete job search, filtering, and application flow
- **Footer**: Email subscription, company links, and social media

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```
or
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── components/
│   ├── Navigation.js       # Navigation bar with hamburger menu
│   ├── HeroSection.js      # Hero section with main content
│   ├── ServicesSection.js  # Services section with timeline
│   ├── EnterpriseSection.js # Enterprise section
│   ├── CareersSection.js   # Careers landing page
│   └── Footer.js           # Footer component
├── pages/
│   ├── ViewAllJobs.js      # All jobs listing page
│   ├── JobDetails.js       # Individual job details page
│   ├── ApplyJob.js         # Job application form
│   └── SuccessPage.js      # Application success page
├── App.js                  # Main app component with routing
└── index.js                # Entry point
```

## Navigation Menu Items

1. Hero Section
2. OUR Services
3. Enterprises
4. Careers
5. Footer

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Material UI 5.14.20
- Material Icons

## Color Scheme

- Background: #000000 (Black)
- Primary Accent: #FF9800 (Orange)
- Text: #FFFFFF (White)
- Secondary Background: #1a1a1a (Dark Gray)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

