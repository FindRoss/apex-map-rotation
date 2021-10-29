import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: '#000'
  }
}));


function Nav() {

  const classes = useStyles();

  return (
    <AppBar className={classes.navBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Icon color="secondary">star</Icon>
        </IconButton>
        <Typography variant="h6">
          ApexMapTracker
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
