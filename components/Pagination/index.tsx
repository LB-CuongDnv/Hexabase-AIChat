import { MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';

type Props = {};

const PaginationApp: FC<Props> = () => {
  console.log('a Dat dep zai');
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mt: 3,
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      {/* <Select value={perPage} size="small" onChange={handleSetPerPage}>
        <MenuItem value={10}>10/Page</MenuItem>
        <MenuItem value={20}>20/Page</MenuItem>
        <MenuItem value={50}>50/Page</MenuItem>
      </Select>

      <Pagination count={10} page={page} onChange={handleSetPage} /> */}
    </Box>
  );
};

export default PaginationApp;
