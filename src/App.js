import { useState, useEffect } from 'react';
import './App.css';

import { getMap } from './getMap';
import Nav from './components/Nav';
import Loader from './components/Loader';
import Playlist from './components/Playlist';

require('dotenv').config()

function App() {
  const [rotations, setRotations] = useState([]);

  useEffect(() => {
    async function foo() {
      const mapData = await getMap();
      setRotations(Object.entries(mapData));
    }
    foo();
  }, []);

  console.log('in App ken', rotations);

  return (
    <div className="h-full">
      <Nav />
      {
        (
          rotations.map((r, i) => (r.length === 0) ? <Loader /> : <Playlist key={i} type={r[0]} data={r[1]} />)
        )
      }
    </div>
  );
}

export default App;



// let d = new Date();
// let n = d.getTimezoneOffset();
// -120  
// -2 ... the  5 - -2 works and vice versa
// let timezoneDifference = n / 60;
// console.log(timezoneDifference);

