import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import MuiLink from '@material-ui/core/Link';

const Link = props => (
  <MuiLink component={GatsbyLink} {...props} />
);

export default Link;