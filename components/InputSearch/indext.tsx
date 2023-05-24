import SearchIcon from '@mui/icons-material/Search';
import { Box, SxProps, Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { FC } from 'react';

type Props = {
  sx?: SxProps<Theme> | undefined;
};
const InputSearch: FC<Props & InputBaseProps> = ({ sx, ...props }) => {
  return (
    <Box
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
        width: '100%',
        border: '1px solid #cdcdcd',
        borderRadius: 5,
        ...sx,
      }}
    >
      <IconButton type="button" sx={{ p: '8px' }}>
        <SearchIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} {...props} />
    </Box>
  );
};

export default InputSearch;
