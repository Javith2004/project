import React from 'react';
import { Box } from '@mui/material';

const Logo = ({ size = 50, variant = 'dark' }) => {
  // variant: 'dark' for dark background, 'light' for light background
  const rightColor = variant === 'dark' ? '#ffffff' : '#000000';
  
  return (
    <Box
      sx={{
        width: size,
        height: size,
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Gear Circle - Left Half (Orange) */}
        <path
          d="M 50,50 L 50,0 A 50,50 0 0,1 50,100 Z"
          fill="#FF9800"
        />
        
        {/* Outer Gear Circle - Right Half (White/Black based on variant) */}
        <path
          d="M 50,50 L 50,0 A 50,50 0 0,0 50,100 Z"
          fill={rightColor}
        />
        
        {/* Gear Teeth - More prominent angular teeth */}
        {/* Top teeth */}
        <polygon points="50,0 58,5 55,12 45,12 42,5" fill="#FF9800" />
        <polygon points="50,0 58,5 55,12 45,12 42,5" fill={rightColor} transform="rotate(180 50 50)" />
        
        {/* Right teeth */}
        <polygon points="100,50 95,42 88,45 88,55 95,58" fill={rightColor} />
        <polygon points="100,50 95,42 88,45 88,55 95,58" fill="#FF9800" transform="rotate(180 50 50)" />
        
        {/* Bottom teeth */}
        <polygon points="50,100 42,95 45,88 55,88 58,95" fill="#FF9800" />
        <polygon points="50,100 42,95 45,88 55,88 58,95" fill={rightColor} transform="rotate(180 50 50)" />
        
        {/* Left teeth */}
        <polygon points="0,50 5,42 12,45 12,55 5,58" fill="#FF9800" />
        <polygon points="0,50 5,42 12,45 12,55 5,58" fill={rightColor} transform="rotate(180 50 50)" />
        
        {/* Diagonal teeth - 45 degrees */}
        <polygon points="71,29 77,32 74,37 67,34" fill={rightColor} />
        <polygon points="29,71 32,77 37,74 34,67" fill="#FF9800" />
        <polygon points="71,71 67,74 64,67 67,64" fill={rightColor} />
        <polygon points="29,29 32,23 37,26 34,33" fill="#FF9800" />
        
        {/* Inner circle for cleaner look */}
        <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
        
        {/* Letter A (Orange) - bold, positioned on left */}
        <text
          x="30"
          y="60"
          fontSize="28"
          fontWeight="900"
          fill="#FF9800"
          fontFamily="Arial, sans-serif"
          style={{ fontStyle: 'normal', letterSpacing: '-1px' }}
        >
          A
        </text>
        
        {/* Letter F (White/Black) - with arrow extending from horizontal bar */}
        <g>
          <text
            x="58"
            y="60"
            fontSize="28"
            fontWeight="900"
            fill={rightColor}
            fontFamily="Arial, sans-serif"
            style={{ fontStyle: 'normal', letterSpacing: '-1px' }}
          >
            F
          </text>
          {/* Arrow extending from F's horizontal bar */}
          <path
            d="M 70,52 L 82,52"
            stroke={rightColor}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 78,48 L 82,52 L 78,56"
            stroke={rightColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Wavy Orange Arrow - curves from A over F */}
        <path
          d="M 40,40 Q 48,32 56,36 Q 64,40 72,36 Q 80,32 88,36"
          stroke="#FF9800"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 84,32 L 88,36 L 84,40"
          stroke="#FF9800"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Straight Arrow (White/Black) - below the wavy arrow */}
        <path
          d="M 40,54 L 88,54"
          stroke={rightColor}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 82,50 L 88,54 L 82,58"
          stroke={rightColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default Logo;

