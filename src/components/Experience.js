import React from 'react';
import {
  Container,
  Typography,
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Building responsive web applications using React and MUI.',
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2022 - 2023',
      description: 'Developed and maintained web applications using JavaScript and React.',
    },
    {
      title: 'Intern',
      company: 'Web Agency',
      period: '2021 - 2022',
      description: 'Assisted in building client websites and learned modern web technologies.',
    },
  ];

  return (
    <Box id="experience" sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            Experience
          </Typography>
        </motion.div>
        
        <Stepper orientation="vertical">
          {experiences.map((exp, index) => (
            <Step key={index} active={true}>
              <StepLabel>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Typography variant="h6">{exp.title}</Typography>
                </motion.div>
              </StepLabel>
              <StepContent>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                >
                  <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
                    <Typography color="primary" gutterBottom>
                      {exp.company} | {exp.period}
                    </Typography>
                    <Typography>{exp.description}</Typography>
                  </Paper>
                </motion.div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Container>
    </Box>
  );
};

export default Experience;