import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  rootApp: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#E5E5E5',
  }
}));

export default function App() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffffff',
        main: '#E5E5E5',
        dark: '#000000',
      },
      secondary: {
        light: '#00000033',
        main: '#8E8E8E',
        dark: '#555555',
      },
      background: {
        paper: '#fff',
        default: '#E5E5E5',
      },
      text: {
        primary: '#555555',
      }
    },
    typography: {
      fontFamily: "'PT Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div id="app" className={classes.rootApp}>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}