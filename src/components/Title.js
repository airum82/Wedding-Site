import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
      display: 'inline',
    }
});

const Title = () => {
  const { title } = useStyles();
  return (
    <Typography className={title} variant="p" >
      Miriam and Arram
    </Typography>
  );
};

export default Title;
