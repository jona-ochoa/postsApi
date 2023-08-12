import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NavLink to="/" className={styles.navlogo}>
              APPOST
            </NavLink>
              
          </IconButton>
          <Box display="flex" justifyContent="space-evenly" sx={{ flexGrow: 1, p: 1 }}>
          <Typography variant="h6" component="div">
            <NavLink className={styles.navlinks} to="/">
              Inicio
            </NavLink>
          </Typography>
          
          <Typography variant="h6" component="div" >
            <NavLink className={styles.navlinks} to="/form">
              Postear
            </NavLink>
          </Typography>

          <Typography variant="h6" component="div" >
            <NavLink className={styles.navlinks} to="/about">
              Acerca de mi
            </NavLink>
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}