import { useState, useEffect } from 'react';
import './App.css';

import { getMap } from './getMap';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Playlist from './components/Playlist';

require('dotenv').config()

function App() {
  const [rotations, setRotations] = useState([]);

  useEffect(() => {
    async function foo() {
      const mapData = await getMap();

      // Remove control from the data.
      delete mapData.control;

      setRotations(Object.entries(mapData));
    }
    foo();
  }, []);

  return (
    <div className="h-full">
      <Nav />
      <div className="mb-16">
        {
          (rotations.length === 0) ?
            <Loader /> :
            rotations.map((r, i) => <Playlist key={i} type={r[0]} data={r[1]} />)
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;

