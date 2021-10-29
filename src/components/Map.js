import MapPanel from './MapPanel';
import { useState, useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const singleDigit = (num) => {
  let len = num.toString().length;

  return (len < 2) ? `0${num}` : num;
}


function Map({ data: { current, next } }) {

  const [timer, setTimer] = useState(current.remainingSecs);
  const [displayTime, setDisplayTime] = useState(current.remainingTimer);


  useEffect(() => {

    setTimeout(() => {
      let secs = timer
      let minutes = Math.floor(secs / 60);
      let hours = Math.floor(minutes / 60);
      let rMinutes = minutes - (hours * 60);
      let seconds = secs - minutes * 60;

      let currentTime = `0${hours}:${singleDigit(rMinutes)}:${singleDigit(seconds)}`;

      if (hours <= 0 && rMinutes <= 0 && seconds <= 0) {
        currentTime = '00:00:00';
      }

      setDisplayTime(currentTime);
      setTimer(secs - 1);

    }, 1000)

  }, [timer]);


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>Hello World</Grid>
          <Grid item xs={4}>Hello World</Grid>
          <Grid item xs={4}>Hello World</Grid>
        </Grid>
      </Box>
      <MapPanel data={current} title={'Current'} timer={displayTime} />
      <MapPanel data={next} title={'Next'} />
    </div>
  )
}

export default Map
