import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const traits = [
  { emoji: '🚴', label: 'Cyclist' },
  { emoji: '🎬', label: 'Sci-Fi Fan' },
  { emoji: '⛩️', label: 'Anime Lover' },
  { emoji: '💻', label: 'Developer' },
];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(160deg, #0d0d0d 0%, #111318 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-120px',
          right: '-120px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(83,74,183,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-80px',
          left: '10%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">

        {/* Section label */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              mb: 2,
              px: 1.5,
              py: 0.5,
              border: '1px solid rgba(127,119,221,0.4)',
              borderRadius: '4px',
              background: 'rgba(83,74,183,0.1)',
            }}
          >
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#7F77DD',
                display: 'inline-block',
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
              About Me
            </Box>
          </Box>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Box
            component="h2"
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontSize: { xs: '2.6rem', md: '3.8rem' },
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#F5F3EF',
              mb: 0.5,
              mt: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Crafting digital
            <br />
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #7F77DD 0%, #1D9E75 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              experiences.
            </Box>
          </Box>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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

        {/* Two-column layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 5, md: 8 },
            alignItems: 'start',
          }}
        >
          {/* Left: text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(245,243,239,0.75)',
                margin: '0 0 1.2rem',
              }}
            >
              Hey there! I'm a passionate beginner developer who loves building
              web applications with modern tech. I care deeply about writing
              clean, efficient code that creates meaningful experiences.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(245,243,239,0.75)',
                margin: '0 0 1.2rem',
              }}
            >
              Outside of code you'll catch me out on a long cycle ride, bingeing
              the latest sci-fi release, or deep in an anime arc I probably
              should have started weeks ago.
            </motion.p>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: 'rgba(245,243,239,0.75)',
                margin: 0,
              }}
            >
              I'm actively looking for exciting opportunities where I can grow,
              contribute, and build things worth building.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Box
                component="a"
                href="#contact"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  mt: 4,
                  px: 3,
                  py: 1.25,
                  border: '1px solid rgba(127,119,221,0.5)',
                  borderRadius: '6px',
                  background: 'rgba(83,74,183,0.12)',
                  color: '#AFA9EC',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    background: 'rgba(83,74,183,0.25)',
                    borderColor: 'rgba(127,119,221,0.8)',
                    color: '#CECBF6',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Let's connect
                <Box component="span" sx={{ fontSize: '1rem' }}>→</Box>
              </Box>
            </motion.div>
          </motion.div>

          {/* Right: trait cards */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
              }}
            >
              {traits.map((t) => (
                <motion.div key={t.label} variants={fadeLeft}>
                  <Box
                    sx={{
                      p: 2.5,
                      border: '1px solid rgba(245,243,239,0.07)',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.25s ease',
                      cursor: 'default',
                      '&:hover': {
                        border: '1px solid rgba(127,119,221,0.3)',
                        background: 'rgba(83,74,183,0.08)',
                        transform: 'translateY(-3px)',
                      },
                    }}
                  >
                    <Box sx={{ fontSize: '1.8rem', mb: 1 }}>{t.emoji}</Box>
                    <Box
                      sx={{
                        fontFamily: '"Syne", sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#F5F3EF',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {t.label}
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>

            {/* Status badge */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  mt: 3,
                  p: 2,
                  border: '1px solid rgba(29,158,117,0.3)',
                  borderRadius: '10px',
                  background: 'rgba(29,158,117,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#1D9E75',
                    flexShrink: 0,
                    boxShadow: '0 0 0 3px rgba(29,158,117,0.25)',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { boxShadow: '0 0 0 3px rgba(29,158,117,0.25)' },
                      '50%': { boxShadow: '0 0 0 6px rgba(29,158,117,0.1)' },
                    },
                  }}
                />
                <Box
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.85rem',
                    color: 'rgba(93,202,165,0.9)',
                  }}
                >
                  Open to work — available for new roles
                </Box>
              </Box>
            </motion.div>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;