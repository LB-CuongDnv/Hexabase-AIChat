import { createTheme } from '@mui/material';
import type {} from '@mui/x-date-pickers/themeAugmentation';

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    success: {
      main: '#4cd864',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,

    h5: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid black',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
    MuiDatePicker: {
      defaultProps: {
        className: 'date-picker-custom',
      },
    },
  },
});
export default theme;
