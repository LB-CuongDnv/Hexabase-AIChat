import { Box, Typography } from '@mui/material';

const NoData = () => {
  return (
    <Box
      sx={{ minHeight: '15rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mt: 2 }}
    >
      <Typography>NoData</Typography>
    </Box>
  );
};

export default NoData;
