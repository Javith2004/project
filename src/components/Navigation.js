import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: 'OUR SERVICES', path: '/#services', id: 'services' },
    { name: 'ENTERPRISES', path: '/#enterprise', id: 'enterprise' },
    { name: 'CAREERS', path: '/careers', id: 'careers' },
    { name: 'CONTACT US', path: '/#contact', id: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (item) => {
    if (item.path.startsWith('/#')) {
      const id = item.path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        backgroundColor: '#000',
        height: '100%',
        color: '#fff',
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton onClick={() => handleNavigation(item)}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#000',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          {/* ===== LOGO FIRST, AI SECOND (MATCHED) ===== */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
            }}
          >
            {/* ORANGE LOGO */}
            <Box
              component="img"
              src="/logo.png"
              alt="Logo"
              sx={{
                width: 30,
                height: 30,
                objectFit: 'contain',
              }}
            />

            {/* WHITE AI TEXT */}
            <Typography
              sx={{
                color: '#EE6018',
                fontWeight: 700,
                fontSize: '18px',
               
              }}
            >
              A
            </Typography>
             <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '18px',
               marginLeft:-1
              }}
            >
              I
            </Typography>
           
            
          </Box>

          {/* ===== MENU ===== */}
          {isMobile ? (
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#FF9800' }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  sx={{
                    color: '#fff',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    '&:hover': { color: '#FF9800' },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* ===== MOBILE DRAWER ===== */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#000',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
