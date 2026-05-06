import React, { useState } from 'react';
import {
  Container,
  Box,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// Initialize EmailJS with your public key
emailjs.init('fvmNPtG9hljqhRTUC');

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isFocused, setIsFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setIsFocused({ ...isFocused, [field]: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });

    try {
      // Using direct values instead of env variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      const result = await emailjs.send(
        'service_zypibtw',
        'template_z0tew4l',
        templateParams,
        'fvmNPtG9hljqhRTUC'
      );

      console.log('Email sent successfully:', result);
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      setIsFocused({});
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Better error messages
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again later.';
      }
      
      setStatus({ type: 'error', message: errorMessage });
    }
  };

  const inputStyles = (field) => ({
    width: '100%',
    px: 2,
    py: 1.75,
    mb: 2.5,
    background: 'rgba(255,255,255,0.03)',
    border: isFocused[field] || formData[field] 
      ? '1px solid rgba(127,119,221,0.5)' 
      : '1px solid rgba(245,243,239,0.1)',
    borderRadius: '8px',
    color: '#F5F3EF',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.25s ease',
    resize: 'none',
    '&:focus': {
      border: '1px solid rgba(127,119,221,0.6)',
      background: 'rgba(83,74,183,0.06)',
      boxShadow: '0 0 0 3px rgba(83,74,183,0.1)',
    },
    '&::placeholder': {
      color: 'rgba(245,243,239,0.35)',
    },
  });

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(160deg, #0d0d0d 0%, #111318 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(83,74,183,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-120px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29,158,117,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md">
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
              mx: 'auto',
            }}
          >
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#1D9E75',
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
              Get In Touch
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
            align="center"
            sx={{
              fontFamily: '"Syne", sans-serif',
              fontSize: { xs: '2.6rem', md: '3.8rem' },
              fontWeight: 800,
              lineHeight: 1.05,
              color: '#F5F3EF',
              mb: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            Let's
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #7F77DD 0%, #1D9E75 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                ml: 1.5,
              }}
            >
              collaborate.
            </Box>
          </Box>
        </motion.div>

        {/* Description */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Box
            component="p"
            align="center"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'rgba(245,243,239,0.65)',
              mb: 5,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Have a project in mind or just want to say hello? 
            I'd love to hear from you. Drop me a message and 
            I'll get back to you as soon as possible.
          </Box>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0.5 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box
            sx={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, #7F77DD, #1D9E75)',
              mx: 'auto',
              mb: 5,
              borderRadius: '2px',
            }}
          />
        </motion.div>

        {/* Status alert */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                mb: 3,
                px: 3,
                py: 2,
                borderRadius: '8px',
                background: status.type === 'success' 
                  ? 'rgba(29,158,117,0.12)' 
                  : status.type === 'error'
                  ? 'rgba(255,77,77,0.12)'
                  : 'rgba(127,119,221,0.12)',
                border: status.type === 'success'
                  ? '1px solid rgba(29,158,117,0.3)'
                  : status.type === 'error'
                  ? '1px solid rgba(255,77,77,0.3)'
                  : '1px solid rgba(127,119,221,0.3)',
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
                  background: status.type === 'success'
                    ? '#1D9E75'
                    : status.type === 'error'
                    ? '#FF4D4D'
                    : '#7F77DD',
                  flexShrink: 0,
                }}
              />
              <Box
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.9rem',
                  color: status.type === 'success'
                    ? 'rgba(93,202,165,0.9)'
                    : status.type === 'error'
                    ? 'rgba(255,130,130,0.9)'
                    : 'rgba(175,169,236,0.9)',
                }}
              >
                {status.message}
              </Box>
            </Box>
          </motion.div>
        )}

        {/* Contact form */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              p: { xs: 3, md: 5 },
              border: '1px solid rgba(245,243,239,0.08)',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.02)',
              backdropFilter: 'blur(12px)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: '16px',
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(127,119,221,0.2) 0%, rgba(29,158,117,0.1) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none',
              },
            }}
          >
            {/* Name field */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.7rem',
                  color: 'rgba(245,243,239,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mb: 1,
                }}
              >
                Your Name
              </Box>
              <Box
                component="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                required
                placeholder="Enter your name"
                sx={inputStyles('name')}
              />
            </motion.div>

            {/* Email field */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.7rem',
                  color: 'rgba(245,243,239,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mb: 1,
                }}
              >
                Your Email
              </Box>
              <Box
                component="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                required
                placeholder="you@example.com"
                sx={inputStyles('email')}
              />
            </motion.div>

            {/* Message field */}
            <motion.div variants={fadeUp}>
              <Box
                sx={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '0.7rem',
                  color: 'rgba(245,243,239,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mb: 1,
                }}
              >
                Your Message
              </Box>
              <Box
                component="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                required
                placeholder="Tell me about your project..."
                rows={5}
                sx={{
                  ...inputStyles('message'),
                  resize: 'vertical',
                  minHeight: '120px',
                }}
              />
            </motion.div>

            {/* Submit button */}
            <motion.div variants={fadeUp}>
              <Box
                component="button"
                type="submit"
                sx={{
                  width: '100%',
                  mt: 1,
                  px: 4,
                  py: 1.75,
                  background: 'linear-gradient(135deg, #7F77DD 0%, #5A52C8 100%)',
                  borderRadius: '8px',
                  color: '#F5F3EF',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  boxShadow: '0 4px 15px rgba(83,74,183,0.3)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 25px rgba(83,74,183,0.45)',
                  },
                  '&:active': {
                    transform: 'translateY(0)',
                  },
                  '&:disabled': {
                    opacity: 0.6,
                    cursor: 'not-allowed',
                    transform: 'none',
                  },
                }}
              >
                Send Message
                <SendIcon sx={{ fontSize: '1.1rem' }} />
              </Box>
            </motion.div>
          </Box>
        </motion.div>

        {/* Alternative contact */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Box
            align="center"
            sx={{
              mt: 4,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.85rem',
              color: 'rgba(245,243,239,0.45)',
            }}
          >
            Or reach me directly at{' '}
            <Box
              component="a"
              href="mailto:jhomelelisan@gmail.com"
              sx={{
                color: '#7F77DD',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#AFA9EC',
                },
              }}
            >
              jhomelelisan@gmail.com
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 