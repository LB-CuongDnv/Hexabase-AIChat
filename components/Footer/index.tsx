import { FC, ReactElement } from 'react';
import { Container, Paper, Typography } from '@mui/material';

export const Footer: FC = (): ReactElement => {
  return (
    <Paper
      component="footer"
      elevation={5}
      sx={{
        mt: 5,
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="xl">
        <Typography textAlign="center" mt={1} sx={{ color: 'gray' }}>
          Copyright @2023 Beesi. All rights reserved
        </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
