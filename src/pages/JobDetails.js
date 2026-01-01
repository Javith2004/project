import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Job data
  const jobsData = {
    1: {
      title: 'AI ENGINEER',
      department: 'Development',
      location: 'Bengaluru',
      type: 'Full Time',
      experience: '2-4 Years',
      roles: 'As An AI Engineer, You Will Be Responsible For Developing, Fine-Tuning, And Deploying Machine Learning And Deep Learning Models That Power Real-World Applications Across Areas Like NLP, Computer Vision, And Automation. You\'ll Work On Building Scalable Data Pipelines And Integrating Models Into Production Systems Using APIs, Microservices, And Cloud Platforms. A Major Part Of Your Role Will Involve Evaluating And Optimizing Model Performance Through Experiments And Iterative Improvements. You\'ll Also Collaborate Closely With Product, Design, And Engineering Teams To Translate Complex Business Challenges Into Measurable And Impactful AI Solutions.',
      looking: [
        '2-4 Years Hands-On Experience In ML/DL Model Development Using Python, PyTorch/TensorFlow, And Common ML Libraries.',
        'Strong Understanding Of LLMs, Embeddings, RAG Pipelines, Vector Databases (E.G., FAISS, Pinecone, Chroma).',
        'Experience With MLOps Practices—Versioning, CI/CD For ML, Model Deployment, And Cloud Computing.',
        'Ability To Break Down Ambiguous Problems, Experiment Quickly, And Deliver Reliable, Production-Ready AI Features.',
      ],
      offer: 'We Offer The Chance To Work On Cutting-Edge AI Projects With Real Product Impact, Along With The Freedom To Experiment And Innovate. You\'ll Have Access To Modern Tools, GPUs, And Continuous Learning Support. Competitive Compensation, Performance Bonuses, And A Flexible, Growth-Oriented Work Culture Make This A Great Environment For The Next Step In Your AI Career.',
    },
    2: {
      title: 'SENIOR AI ENGINEER',
      department: 'Development',
      location: 'San Francisco, CA',
      type: 'Full Time',
      experience: '4-8 Years',
      roles: 'Lead AI initiatives and mentor junior developers in our growing team. Design and implement advanced machine learning solutions, establish best practices, and drive technical excellence across AI projects.',
      looking: [
        '4-8 Years Of Experience In AI/ML Engineering With Proven Track Record.',
        'Deep Expertise In Modern ML Frameworks And Architectures.',
        'Experience Leading Technical Teams And Mentoring Developers.',
        'Strong Communication Skills And Ability To Translate Business Needs Into Technical Solutions.',
      ],
      offer: 'Competitive Salary, Equity Package, Comprehensive Benefits, And The Opportunity To Shape The Future Of AI Technology At Scale.',
    },
    3: {
      title: 'MARKETING MANAGER',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full Time',
      experience: '2-4 Years',
      roles: 'Drive Marketing Campaigns And Brand Awareness For Our AI Products. Develop And Execute Comprehensive Marketing Strategies Across Digital Channels.',
      looking: [
        '2-4 Years Of Experience In B2B Or Tech Marketing.',
        'Strong Understanding Of Digital Marketing Channels And Analytics.',
        'Excellent Communication And Project Management Skills.',
        'Experience With Marketing Automation Tools.',
      ],
      offer: 'Remote Work Flexibility, Competitive Compensation, Professional Development Budget, And Opportunity To Work With Cutting-Edge AI Products.',
    },
  };

  const job = jobsData[id] || jobsData[1];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Back Button */}
        <button onClick={() => navigate('/careers/all')} style={styles.backButton}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span style={{ marginLeft: '8px' }}>Back to jobs</span>
        </button>

        <div style={styles.grid}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Job Title */}
            <h1 style={styles.jobTitle}>{job.title}</h1>

            {/* Chips */}
            <div style={styles.chipsContainer}>
              <span style={styles.chip}>{job.department}</span>
              <span style={styles.chip}>{job.location}</span>
              <span style={styles.chip}>{job.type}</span>
              <span style={styles.chip}>{job.experience}</span>
            </div>

            {/* Roles & Responsibility */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>ROLES & RESPONSIBILITY</h2>
              <p style={styles.sectionText}>{job.roles}</p>
            </div>

            {/* What We're Looking For */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>WHAT WE'RE LOOKING FOR</h2>
              <ul style={styles.list}>
                {job.looking.map((item, index) => (
                  <li key={index} style={styles.listItem}>
                    <span style={styles.bullet}>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Offer */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>WHAT WE OFFER</h2>
              <p style={styles.sectionText}>{job.offer}</p>
            </div>
          </div>

          {/* Right Column - Buttons */}
          <div style={styles.rightColumn}>
            <button onClick={() => navigate('/careers/apply')} style={styles.applyButton}>
              APPLY NOW
            </button>
            <button style={styles.shareButton}>
              SHARE THIS JOB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    padding: '60px 20px',
    fontFamily: 'monospace',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    marginBottom: '40px',
    padding: '8px 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 240px',
    gap: '60px',
  },
  leftColumn: {
    maxWidth: '800px',
  },
  jobTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#FF6B35',
    margin: '0 0 30px 0',
    letterSpacing: '2px',
  },
  chipsContainer: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  chip: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    padding: '8px 16px',
    fontSize: '12px',
    letterSpacing: '1px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '20px',
  },
  sectionText: {
    fontSize: '13px',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.85)',
    margin: 0,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    fontSize: '13px',
    lineHeight: '1.8',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '16px',
    display: 'flex',
    gap: '12px',
  },
  bullet: {
    color: '#FF6B35',
    flexShrink: 0,
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: 'fit-content',
    position: 'sticky',
    top: '80px',
  },
  applyButton: {
    backgroundColor: '#FF6B35',
    color: '#000',
    border: 'none',
    padding: '16px',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    cursor: 'pointer',
    fontFamily: 'monospace',
  },
  shareButton: {
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    padding: '16px',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    cursor: 'pointer',
    fontFamily: 'monospace',
  },
};

export default JobDetails;