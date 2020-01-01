import React from 'react';

import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  login: {
    textAlign: 'center',
    marginTop: 50,
  },
  formContainer: {
    height: '75vh',
  }
})

const Login = () => {
  const { login, formContainer } = useStyles();  
  return (
    <Layout location="login">
      <Container className={formContainer}>
        <Grid
          container
          direction="column"
          justify="space-between"
          className={login}
          spacing={3}
        >
          <Grid item>
            <TextField label="email" />
          </Grid>
          <Grid item>
            <TextField label="password" />
          </Grid>
          <Grid item>
            <Button>
              Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Login;
