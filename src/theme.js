import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';
// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';


// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#cb30a2',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: '"Maven Pro","Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
