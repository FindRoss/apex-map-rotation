import Map from './Map';
import { useState, useEffect } from 'react';

import worldsEdge from '../assets/worlds-edge-map.jpeg';
import kingsCanyon from '../assets/kings-canyon-map.jpg';
import olympus from '../assets/olympus-map.jpg';
import stormPoint from '../assets/storm-point-map.jpg';

function Playlist({ data: { current, next } }) {

  const mapPicker = map => {
    switch (map) {
      case "olympus_rotation":
        return olympus;
      case "worlds_edge_rotation":
        return worldsEdge;
      case "kings_canyon_rotation":
        return kingsCanyon;
      case "storm_point_rotation":
        return stormPoint;
      default:
        return null;
    }
  };


  return (
    <div className="md:container md:mx-auto md:px-0 px-4 py-4">
      <h2 className="text-xl pb-4">Pubs</h2>
      <div className="md:flex">
        <div className="flex-1 md:pr-2">
          <Map
            data={current}
            title={'Current'}
            image={mapPicker(current.code)}
          />
        </div>
        <div className="flex-1 md:pl-2">
          <Map
            data={next}
            title={'Next'}
            image={mapPicker(next.code)}
          />
        </div>
      </div>
    </div>
  )
}

export default Playlist;



// const mapPicker = map => {
//   switch (map) {
//     case "Olympus":
//       return olympus;
//     case "World's Edge":
//       return worldsEdge;
//     case "King's Canyon":
//       return kingsCanyon;
//     default:
//       return null;
//   }
// };

// let pickMap = mapPicker(current.map);

// const [timer, setTimer] = useState(current.remainingSecs);
// const [displayTime, setDisplayTime] = useState(current.remainingTimer);

// const singleDigit = (num) => {
//   let len = num.toString().length;

//   return (len < 2) ? `0${num}` : num;
// }

// useEffect(() => {
//   setTimeout(() => {
//     let secs = timer
//     let minutes = Math.floor(secs / 60);
//     let hours = Math.floor(minutes / 60);
//     let rMinutes = minutes - (hours * 60);
//     let seconds = secs - minutes * 60;

//     let currentTime = `0${hours}:${singleDigit(rMinutes)}:${singleDigit(seconds)}`;

//     if (hours <= 0 && rMinutes <= 0 && seconds <= 0) {
//       currentTime = '00:00:00';
//     }

//     setDisplayTime(currentTime);
//     setTimer(secs - 1);

//   }, 1000)
// }, [timer]);


