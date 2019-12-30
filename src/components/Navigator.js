import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from './Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    links: {
      padding: theme.spacing(2),
      textDecoration: 'none',
      color: 'white',
    }
  })
);

const Navigator = () => { 
  const { links } = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="flex-end"
    >
      <Grid item>
        <Link
          to="/"
          className={links}
        >
          Main
        </Link>
      </Grid>
      <Grid item>
        <Link
          to="/"
          className={links}
        >
          Announcements
        </Link>
      </Grid>
      <Grid item>
        <Link
          to="/Travel"
          className={links}
        >
          Travel Information
        </Link>
      </Grid>
      <Grid item>
        <Link
          to="/"
          className={links}
        >
          Registry
        </Link>
      </Grid>
      <Grid item>
        <Link
          to="/RSVP" 
          className={links}
        >
          RSVP 
        </Link>
      </Grid>
    </Grid>
  )
  
 };

export default Navigator;
