import React from 'react'
import apexLogo from '../media/apex-legends-logo.png';
import Grid from '@material-ui/core/Grid';

const Loader = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%" }}
      >
        <img src={apexLogo} alt="apex legends logo" />
      </Grid>
    </>
  )
}

export default Loader
