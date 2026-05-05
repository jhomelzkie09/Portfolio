import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  IconButton,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box
        component="nav"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          background: scrolled 
            ? 'rgba(13,13,13,0.85)' 
            : 'rgba(13,13,13,0.5)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? '1px solid rgba(245,243,239,0.08)' 
            : '1px solid transparent',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 2,
            }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component={Link}
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#F5F3EF',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  letterSpacing: '-0.02em',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: '#AFA9EC',
                  },
                }}
              >
                JHOMEL B. ELISAN
                <Box
                  component="span"
                  sx={{
                    color: '#7F77DD',
                    ml: 0.5,
                  }}
                >
                  .
                </Box>
              </Box>
            </motion.div>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Box
                    component={Link}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: '6px',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'rgba(245,243,239,0.65)',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      letterSpacing: '0.01em',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      '&:hover': {
                        color: '#F5F3EF',
                        background: 'rgba(83,74,183,0.08)',
                      },
                      '&.active': {
                        color: '#F5F3EF',
                        background: 'rgba(83,74,183,0.12)',
                      },
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '0.65rem',
                        color: '#7F77DD',
                        mr: 0.75,
                      }}
                    >
                      0{index + 1}.
                    </Box>
                    {item}
                  </Box>
                </motion.div>
              ))}

              {/* Resume button */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Box
                  component="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 0.75,
                    border: '1px solid rgba(127,119,221,0.4)',
                    borderRadius: '6px',
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#AFA9EC',
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'rgba(83,74,183,0.2)',
                      borderColor: '#7F77DD',
                      color: '#F5F3EF',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  Resume
                </Box>
              </motion.div>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: '#F5F3EF',
                '&:hover': {
                  background: 'rgba(127,119,221,0.1)',
                },
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: '100%',
            maxWidth: '320px',
            background: 'linear-gradient(180deg, #0d0d0d 0%, #111318 100%)',
            borderLeft: '1px solid rgba(245,243,239,0.08)',
            backdropFilter: 'blur(20px)',
          },
        }}
        transitionDuration={300}
      >
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            pt: 4,
            px: 3,
          }}
        >
          {/* Mobile menu header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 6,
            }}
          >
            <Box
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: '#F5F3EF',
              }}
            >
              JHOMEL B. ELISAN
              <Box
                component="span"
                sx={{ color: '#7F77DD' }}
              >
                .
              </Box>
            </Box>
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                color: 'rgba(245,243,239,0.6)',
                '&:hover': {
                  background: 'rgba(127,119,221,0.1)',
                  color: '#F5F3EF',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Mobile menu items */}
          <Box sx={{ flex: 1 }}>
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={mobileOpen ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Box
                  component={Link}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleDrawerToggle}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    py: 2,
                    px: 2,
                    borderRadius: '8px',
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: 'rgba(245,243,239,0.7)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    mb: 1,
                    '&:hover': {
                      background: 'rgba(83,74,183,0.1)',
                      color: '#F5F3EF',
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '0.75rem',
                      color: '#7F77DD',
                      minWidth: '30px',
                    }}
                  >
                    0{index + 1}.
                  </Box>
                  {item}
                  <Box
                    component="span"
                    sx={{
                      ml: 'auto',
                      fontSize: '1.2rem',
                      color: 'rgba(245,243,239,0.3)',
                    }}
                  >
                    →
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Mobile resume button */}
          <Box sx={{ pb: 4, px: 2 }}>
            <Box
              component="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDrawerToggle}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                py: 1.5,
                border: '1px solid rgba(127,119,221,0.4)',
                borderRadius: '8px',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#AFA9EC',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                '&:hover': {
                  background: 'rgba(83,74,183,0.2)',
                  borderColor: '#7F77DD',
                  color: '#F5F3EF',
                },
              }}
            >
              Download Resume
              <Box component="span" sx={{ fontSize: '1rem' }}>↗</Box>
            </Box>

            {/* Social links */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                mt: 3,
              }}
            >
              {[
                { icon: '💻', label: 'GitHub' },
                { icon: '💼', label: 'LinkedIn' },
                { icon: '🐦', label: 'Twitter' },
              ].map((social) => (
                <Box
                  key={social.label}
                  component="a"
                  href="#"
                  sx={{
                    fontSize: '1.3rem',
                    opacity: 0.6,
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                    '&:hover': {
                      opacity: 1,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;