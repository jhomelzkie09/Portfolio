import React from 'react';
import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Doctamas Marketing',
    description:
      'A fully functional marketing e-commerce shop built to promote and sell digital marketing services. Features a clean storefront, product listings, and a seamless checkout experience.',
    url: 'https://www.doctamasmarketing.shop',
    tech: ['E-Commerce', 'Web Design', 'Marketing', 'Storefront'],
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    featured: true,
    label: 'doctamasmarketing.shop',
    wordmark: 'Doctamas',
    wordmarkSub: 'Marketing Shop',
    badge: 'Featured',
  },
  {
    title: 'Time Tracker',
    description:
      'A clean, minimal time tracking app for logging AM/PM work sessions. Supports shift selection, live elapsed time, session history, and daily/total hour summaries.',
    url: 'https://time-tracker-elisan.vercel.app/',
    tech: ['React', 'LocalStorage', 'CSS', 'Utility Tool'],
    gradient: 'linear-gradient(135deg, #0f1e14 0%, #0d2218 50%, #0a3320 100%)',
    featured: false,
    label: 'time-tracker-zeta-nine.vercel.app',
    wordmark: 'Time Tracker',
    wordmarkSub: 'Shift Logger',
    badge: null,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(160deg, #0d0d0d 0%, #111318 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,158,117,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              sx={{ width: 6, height: 6, borderRadius: '50%', background: '#7F77DD', display: 'inline-block' }}
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
              Projects
            </Box>
          </Box>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
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
            Things I've
            <br />
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #7F77DD 0%, #1D9E75 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              built.
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

        {/* Project cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUp}>
                <Box
                  sx={{
                    border: '1px solid rgba(245,243,239,0.07)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: 'rgba(255,255,255,0.02)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '1px solid rgba(29,158,117,0.3)',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  {/* Preview banner */}
                  <Box
                    sx={{
                      height: { xs: '180px', md: '260px' },
                      background: project.gradient,
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background:
                          'repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)',
                      },
                    }}
                  >
                    {/* Floating URL chip */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.75,
                        px: 1.25,
                        py: 0.5,
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          background: '#1D9E75',
                          boxShadow: '0 0 0 2px rgba(29,158,117,0.3)',
                        }}
                      />
                      <Box
                        sx={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '0.7rem',
                          color: 'rgba(255,255,255,0.6)',
                        }}
                      >
                        {project.label}
                      </Box>
                    </Box>

                    {/* Center wordmark */}
                    <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <Box
                        sx={{
                          fontFamily: '"Syne", sans-serif',
                          fontSize: { xs: '1.6rem', md: '2.4rem' },
                          fontWeight: 800,
                          color: '#fff',
                          letterSpacing: '-0.02em',
                          mb: 0.5,
                        }}
                      >
                        {project.wordmark}
                      </Box>
                      <Box
                        sx={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.8rem',
                          color: 'rgba(255,255,255,0.45)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {project.wordmarkSub}
                      </Box>
                    </Box>

                    {/* Badge */}
                    {project.badge && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          px: 1.25,
                          py: 0.4,
                          background: 'rgba(83,74,183,0.4)',
                          border: '1px solid rgba(127,119,221,0.4)',
                          borderRadius: '4px',
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '0.65rem',
                          color: '#AFA9EC',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {project.badge}
                      </Box>
                    )}
                  </Box>

                  {/* Card body */}
                  <Box
                    sx={{
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      alignItems: { xs: 'flex-start', md: 'center' },
                      justifyContent: 'space-between',
                      gap: 3,
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          fontFamily: '"Syne", sans-serif',
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: '#F5F3EF',
                          mb: 1,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {project.title}
                      </Box>
                      <Box
                        sx={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.95rem',
                          lineHeight: 1.7,
                          color: 'rgba(245,243,239,0.6)',
                          mb: 2,
                          maxWidth: '520px',
                        }}
                      >
                        {project.description}
                      </Box>

                      {/* Tech chips */}
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                        {project.tech.map((t) => (
                          <Box
                            key={t}
                            sx={{
                              px: 1.25,
                              py: 0.4,
                              border: '1px solid rgba(245,243,239,0.1)',
                              borderRadius: '4px',
                              fontFamily: '"Space Mono", monospace',
                              fontSize: '0.7rem',
                              color: 'rgba(245,243,239,0.45)',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {t}
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* Live link button */}
                    <Box
                      component="a"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 3,
                        py: 1.25,
                        border: '1px solid rgba(29,158,117,0.5)',
                        borderRadius: '8px',
                        background: 'rgba(29,158,117,0.1)',
                        color: '#5DCAA5',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          background: 'rgba(29,158,117,0.2)',
                          borderColor: 'rgba(29,158,117,0.8)',
                          color: '#9FE1CB',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      <LaunchIcon sx={{ fontSize: '0.95rem' }} />
                      Visit Site
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            sx={{
              mt: 5,
              pt: 4,
              borderTop: '1px solid rgba(245,243,239,0.06)',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.85rem',
              color: 'rgba(245,243,239,0.3)',
              textAlign: 'center',
            }}
          >
            More projects coming soon — stay tuned.
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Projects;