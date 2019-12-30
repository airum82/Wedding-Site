import PropTypes from "prop-types"
import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Navigator from './Navigator';
import Title from './Title';
import Grid from '@material-ui/core/Grid';

const Header = ({ siteTitle }) => (
  <AppBar
    style={{
      flexGrow: 1,
      background: '#9AAB89',
    }}
  >
    <Grid
      container
      direction="row"
      alignContent="center"
      style={{
        height: 50,
        width: "100%",
      }}
    >    
      <Grid item style={{ paddingLeft: 10 }}>
        <Title />
      </Grid>
      <Grid item container xs={true} justify="flex-end">
        <Navigator />    
      </Grid>
    </Grid>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
