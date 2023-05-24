import { Avatar, Box, Container, Typography } from '@mui/material';
import React from 'react';

const AuthLayout: React.FC<{ children: any; className?: string }> = ({ children, className }) => {
  return (
    <Box
      component="main"
      sx={{
        background: "url('/images/auth-bg.jpg')",
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container component="div" maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
          }}
        >
          <Avatar sx={{ m: 1 }} src="/images/logo.png"></Avatar>
          <Typography component="h1" variant="h5" color="white">
            BEESi
          </Typography>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
