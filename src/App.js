import { useState, useEffect } from 'react';
import './App.css';

import { getMap } from './getMap';
import Nav from './components/Nav';
import Loader from './components/Loader';
import Map from './components/Playlist';

require('dotenv').config()

function App() {
  const [battleRoyale, setBattleRoyale] = useState({});
  const [ranked, setRanked] = useState({});

  useEffect(() => {
    async function foo() {
      const mapData = await getMap();
      setBattleRoyale(mapData.battle_royale);
      setRanked(mapData.ranked);
    }
    foo();

  }, []);

  return (
    <div className="bg-gray-900 h-full">
      <Nav />
      {(Object.keys(battleRoyale).length === 0) ? <Loader /> : <Map data={battleRoyale} />}

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

