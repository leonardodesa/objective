import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import styles from './styles';

export default function Header() {
  const classes = styles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <AppBar className={classes.background} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OBJECTIVE
          </Typography>
          <div className={classes.infoUser}>
            <div className={classes.name}>
              <Typography align="center" className={[classes.infoUserLineHeght, classes.colorTextUser, classes.bold, classes.marginTextInfoUser]}>
                Leonardo José de Sá
              </Typography>
              
              <Typography align="center" className={[classes.colorTextUser, classes.infoUserLineHeght]}>
                Teste de Front-end
              </Typography>
            </div>
            
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <div>
                <Typography align="center" className={[classes.colorTextUser, classes.bold]}>
                  LS
                </Typography>
              </div>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}
