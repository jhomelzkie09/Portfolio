import React from 'react';
import { Box, Container } from '@mui/material';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import pfp from '../assets/pfp.jpg';

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(160deg, #0d0d0d 0%, #111318 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-80px',
          left: '-80px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(83,74,183,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'float 20s ease-in-out infinite',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-100px',
          right: '-60px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'float 25s ease-in-out infinite reverse',
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -30px) scale(1.05)' },
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Hero content */}
          <Box>
            {/* Greeting badge */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  mb: 3,
                  px: 1.5,
                  py: 0.5,
                  border: '1px solid rgba(127,119,221,0.4)',
                  borderRadius: '4px',
                  background: 'rgba(83,74,183,0.1)',
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#7F77DD',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.4 },
                    },
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    fontSize: '11px',
                    fontFamily: '"Space Mono", monospace',
                    color: '#7F77DD',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Hello, World!
                </Box>
              </Box>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={fadeUp}>
              <Box
                component="h1"
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: { xs: '3rem', md: '4.5rem' },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: '#F5F3EF',
                  mb: 0.5,
                  letterSpacing: '-0.02em',
                }}
              >
                Hi, I'm
                <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #7F77DD 0%, #1D9E75 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  JHOMEL!
                </Box>
              </Box>
            </motion.div>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box
                sx={{
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #7F77DD, #1D9E75)',
                  my: 3,
                  borderRadius: '2px',
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeUp}>
              <Box
                component="p"
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                  color: 'rgba(245,243,239,0.75)',
                  mb: 4,
                  maxWidth: '500px',
                }}
              >
                I craft beautiful, responsive, and user-friendly web applications 
                using modern technologies. Passionate about creating digital experiences 
                that make a difference.
              </Box>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
            >
              <Box
                component={Link}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #7F77DD 0%, #5A52C8 100%)',
                  borderRadius: '6px',
                  color: '#F5F3EF',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 15px rgba(83,74,183,0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 25px rgba(83,74,183,0.45)',
                  },
                }}
              >
                Get In Touch
                <Box component="span" sx={{ fontSize: '1rem' }}>→</Box>
              </Box>

              <Box
                component={Link}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 4,
                  py: 1.5,
                  border: '1px solid rgba(127,119,221,0.5)',
                  borderRadius: '6px',
                  background: 'rgba(83,74,183,0.08)',
                  color: '#AFA9EC',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: 'rgba(83,74,183,0.18)',
                    borderColor: 'rgba(127,119,221,0.8)',
                    color: '#CECBF6',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View My Work
                <Box component="span" sx={{ fontSize: '1rem' }}>↗</Box>
              </Box>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '3rem',
              }}
            >
              {[
                { value: '4+', label: 'Years Coding' },
                { value: '1', label: 'Projects Built' },
                { value: '∞', label: 'Curiosity' },
              ].map((stat) => (
                <Box key={stat.label}>
                  <Box
                    sx={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#F5F3EF',
                    }}
                  >
                    {stat.value}
                  </Box>
                  <Box
                    sx={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '0.65rem',
                      color: 'rgba(245,243,239,0.45)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      mt: 0.25,
                    }}
                  >
                    {stat.label}
                  </Box>
                </Box>
              ))}
            </motion.div>
          </Box>

          {/* Right: Avatar */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: { xs: '280px', md: '380px' },
                height: { xs: '280px', md: '380px' },
              }}
            >
              {/* Decorative rings */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: '-12px',
                  borderRadius: '50%',
                  border: '2px solid rgba(127,119,221,0.2)',
                  animation: 'rotate 20s linear infinite',
                  '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: '-24px',
                  borderRadius: '50%',
                  border: '1px solid rgba(29,158,117,0.15)',
                  animation: 'rotate 25s linear infinite reverse',
                  '@keyframes rotate': {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />
              
              {/* Avatar container */}
              <Box
                component="img"
                src={pfp}
                alt="Jhomel B. Elisan"
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid rgba(127,119,221,0.3)',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'all 0.3s ease',
                  filter: 'grayscale(20%)',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    border: '3px solid rgba(127,119,221,0.6)',
                    filter: 'grayscale(0%)',
                  },
                }}
              />

              {/* Floating tech icons */}
              {['⚛️', '💚', '🎨'].map((icon, index) => (
                <Box
                  key={icon}
                  sx={{
                    position: 'absolute',
                    fontSize: '1.5rem',
                    zIndex: 2,
                    animation: `floatIcon ${3 + index}s ease-in-out infinite`,
                    animationDelay: `${index * 0.5}s`,
                    '@keyframes floatIcon': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-10px)' },
                    },
                    ...(index === 0 && { top: '5%', right: '10%' }),
                    ...(index === 1 && { bottom: '15%', left: '5%' }),
                    ...(index === 2 && { top: '40%', right: '-5%' }),
                  }}
                >
                  {icon}
                </Box>
              ))}
            </Box>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.65rem',
                color: 'rgba(245,243,239,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Scroll
            </Box>
            <Box
              sx={{
                width: '1px',
                height: '40px',
                background: 'linear-gradient(180deg, rgba(127,119,221,0.5) 0%, transparent 100%)',
                animation: 'scrollPulse 2s ease-in-out infinite',
                '@keyframes scrollPulse': {
                  '0%, 100%': { opacity: 0.3, height: '30px' },
                  '50%': { opacity: 1, height: '50px' },
                },
              }}
            />
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;