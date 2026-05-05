import React, { useRef } from 'react';
import { Box, Container } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'HTML / CSS',   years: 2, maxYears: 5, color: '#E24B4A' },
  { name: 'JavaScript',   years: 2, maxYears: 5, color: '#EF9F27' },
  { name: 'React.js',     years: 1, maxYears: 5, color: '#5DCAA5' },
  { name: 'Git',          years: 1, maxYears: 5, color: '#F09595' },
  { name: '.NET Framework', years: 1, maxYears: 5, color: '#7F77DD' },
  { name: 'Node.js',      years: 1, maxYears: 5, color: '#1D9E75' },
  { name: 'SQL',          years: 1, maxYears: 5, color: '#378ADD' },
  { name: 'PostgreSQL',   years: 1, maxYears: 5, color: '#AFA9EC' },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Calculate percentage based on years (capped at maxYears)
  const percentage = Math.min((skill.years / skill.maxYears) * 100, 100);

  // Determine experience level text
  const getExperienceLevel = (years) => {
    if (years >= 4) return 'Expert';
    if (years >= 3) return 'Advanced';
    if (years >= 2) return 'Intermediate';
    if (years >= 1) return 'Beginner';
    return 'Learning';
  };

  const experienceLevel = getExperienceLevel(skill.years);

  return (
    <motion.div ref={ref} variants={fadeUp}>
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
            border: `1px solid ${skill.color}44`,
            background: `${skill.color}0d`,
            transform: 'translateY(-2px)',
            boxShadow: `0 8px 20px ${skill.color}15`,
          },
        }}
      >
        {/* Skill header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 0.5,
          }}
        >
          <Box>
            <Box
              sx={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#F5F3EF',
                letterSpacing: '-0.01em',
                mb: 0.25,
              }}
            >
              {skill.name}
            </Box>
            <Box
              sx={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '0.6rem',
                color: skill.color,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                opacity: 0.7,
              }}
            >
              {experienceLevel}
            </Box>
          </Box>
          <Box
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontSize: '1.1rem',
              fontWeight: 800,
              color: skill.color,
              opacity: 0.9,
            }}
          >
            {skill.years}
          </Box>
        </Box>

        {/* Years badge */}
        <Box
          sx={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.7rem',
            color: 'rgba(245,243,239,0.45)',
            mb: 1.5,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Box component="span" sx={{ opacity: 0.5 }}>⏱</Box>
          {skill.years} {skill.years === 1 ? 'year' : 'years'} of experience
        </Box>

        {/* Progress track */}
        <Box
          sx={{
            height: '6px',
            borderRadius: '3px',
            background: 'rgba(245,243,239,0.06)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Track pattern */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 20px,
                rgba(245,243,239,0.03) 20px,
                rgba(245,243,239,0.03) 21px
              )`,
              borderRadius: '3px',
            }}
          />
          
          {/* Progress fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${percentage}%` } : { width: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.08, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            style={{
              height: '100%',
              borderRadius: '3px',
              background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})`,
              position: 'relative',
              boxShadow: `0 0 12px ${skill.color}30`,
            }}
          >
            {/* Shine effect */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '50%',
                borderRadius: '3px 3px 0 0',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
              }}
            />
          </motion.div>
        </Box>

        {/* Percentage label */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 0.75,
          }}
        >
          <Box
            sx={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '0.65rem',
              color: skill.color,
              opacity: 0.6,
              letterSpacing: '0.05em',
            }}
          >
            {Math.round(percentage)}%
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(160deg, #111318 0%, #0d0d0d 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '20%',
          left: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(83,74,183,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '10%',
          right: '-80px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)',
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
              Skills
            </Box>
          </Box>
        </motion.div>

        {/* Heading */}
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
            What I work
            <br />
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #7F77DD 0%, #1D9E75 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              with.
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

        {/* Skill grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
              gap: 2,
            }}
          >
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </Box>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: '1px solid rgba(245,243,239,0.06)',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.85rem',
              color: 'rgba(245,243,239,0.3)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Box component="span">📚</Box>
            Always learning — this list keeps growing.
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Skills;