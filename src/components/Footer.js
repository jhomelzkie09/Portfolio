import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-scroll';

const socialLinks = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/jhomelzkie09' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jhomel-elisan-62a9b7279' },
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/jhomel.elisan.16' },
  { icon: <EmailIcon />, label: 'Email', href: 'mailto:jhomel.elisan@gamail.com' },
];

const footerLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0d0d0d 0%, #0a0a0a 100%)',
        borderTop: '1px solid rgba(245,243,239,0.06)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(127,119,221,0.3) 50%, transparent 100%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 8 } }}>
          {/* Top section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr auto 1fr' },
                gap: { xs: 4, md: 6 },
                alignItems: 'start',
              }}
            >
              {/* Left: Brand */}
              <motion.div variants={fadeUp}>
                <Box>
                  <Box
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#F5F3EF',
                      letterSpacing: '-0.02em',
                      mb: 1,
                    }}
                  >
                    JHOMEL B. ELISAN
                    <Box
                      component="span"
                      sx={{ color: '#7F77DD', ml: 0.5 }}
                    >
                      .
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.85rem',
                      color: 'rgba(245,243,239,0.5)',
                      lineHeight: 1.6,
                      maxWidth: '300px',
                    }}
                  >
                    Building digital experiences with modern web technologies.
                    Always learning, always creating.
                  </Box>
                </Box>
              </motion.div>

              {/* Center: Divider (desktop only) */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  width: '1px',
                  height: '80px',
                  background: 'linear-gradient(180deg, transparent 0%, rgba(127,119,221,0.2) 50%, transparent 100%)',
                }}
              />

              {/* Right: Links & Social */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: { xs: 3, sm: 6 },
                }}
              >
                {/* Quick links */}
                <motion.div variants={fadeUp}>
                  <Box
                    sx={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '0.7rem',
                      color: 'rgba(245,243,239,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      mb: 2,
                    }}
                  >
                    Navigation
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {footerLinks.map((link) => (
                      <Box
                        key={link.label}
                        component={Link}
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        sx={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.9rem',
                          color: 'rgba(245,243,239,0.55)',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': {
                            color: '#AFA9EC',
                            transform: 'translateX(4px)',
                          },
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: '0.7rem',
                            opacity: 0,
                            transition: 'all 0.2s ease',
                            '.MuiBox-root:hover &': {
                              opacity: 1,
                            },
                          }}
                        >
                          →
                        </Box>
                        {link.label}
                      </Box>
                    ))}
                  </Box>
                </motion.div>

                {/* Social links */}
                <motion.div variants={fadeUp}>
                  <Box
                    sx={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '0.7rem',
                      color: 'rgba(245,243,239,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      mb: 2,
                    }}
                  >
                    Connect
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {socialLinks.map((social) => (
                      <Box
                        key={social.label}
                        component="a"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        sx={{
                          width: '42px',
                          height: '42px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '8px',
                          border: '1px solid rgba(245,243,239,0.08)',
                          background: 'rgba(255,255,255,0.02)',
                          color: 'rgba(245,243,239,0.5)',
                          transition: 'all 0.25s ease',
                          textDecoration: 'none',
                          '&:hover': {
                            background: 'rgba(83,74,183,0.15)',
                            borderColor: 'rgba(127,119,221,0.4)',
                            color: '#AFA9EC',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 8px 20px rgba(83,74,183,0.15)',
                          },
                          '& svg': {
                            fontSize: '1.2rem',
                          },
                        }}
                      >
                        {social.icon}
                      </Box>
                    ))}
                  </Box>

                  {/* Email */}
                  <Box
                    component="a"
                    href="mailto:your.email@example.com"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      mt: 2.5,
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.85rem',
                      color: '#7F77DD',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#AFA9EC',
                      },
                    }}
                  >
                    <Box component="span" sx={{ fontSize: '1rem' }}>✉</Box>
                    jhomelelisan@gmail.com
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </motion.div>

          {/* Divider */}
          <Box
            sx={{
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(245,243,239,0.06) 50%, transparent 100%)',
              my: { xs: 4, md: 6 },
            }}
          />

          {/* Bottom bar */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'center', sm: 'center' },
                gap: 2,
              }}
            >
              <Box
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.8rem',
                  color: 'rgba(245,243,239,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                <Box component="span">
                  © {new Date().getFullYear()} JHOMEL B. ELISAN
                </Box>
                <Box
                  component="span"
                  sx={{
                    width: '3px',
                    height: '3px',
                    borderRadius: '50%',
                    background: 'rgba(245,243,239,0.2)',
                    display: 'inline-block',
                  }}
                />
                <Box component="span">All rights reserved.</Box>
              </Box>

              {/* Back to top */}
              <Box
                component={Link}
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.7rem',
                  color: 'rgba(245,243,239,0.4)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#AFA9EC',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Back to top
                <Box component="span" sx={{ fontSize: '0.9rem' }}>↑</Box>
              </Box>
            </Box>
          </motion.div>

          {/* Built with love */}
          <Box
            sx={{
              textAlign: 'center',
              mt: 3,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              color: 'rgba(245,243,239,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Box component="span">Built with</Box>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                animation: 'heartbeat 1.5s ease-in-out infinite',
                '@keyframes heartbeat': {
                  '0%, 100%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.15)' },
                },
              }}
            >
              ❤️
            </Box>
            <Box component="span">and lots of ☕</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;