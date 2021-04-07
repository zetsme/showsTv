import { AppBar, Button, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { TvRounded } from '@material-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
  return {
    nav: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  };
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.nav}>
        <Button
          variant='outlined'
          size='large'
          startIcon={<TvRounded />}
          color='inherit'
          component={RouterLink}
          to='/'
        >
          <Typography variant='h4'>tvShows</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
