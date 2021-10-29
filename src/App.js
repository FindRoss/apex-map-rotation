import { useState, useEffect } from 'react';
import './App.css';

import { getMap } from './getMap';
import Nav from './components/Nav';
import Loader from './components/Loader';
import Map from './components/Map';

import Container from '@material-ui/core/Container';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function foo() {
      const mapData = await getMap();
      setData(mapData.battle_royale);
    }
    foo();

  }, []);

  let d = new Date();
  let n = d.getTimezoneOffset();
  // -120  
  // -2 ... the  5 - -2 works and vice versa
  let timezoneDifference = n / 60;
  // console.log(timezoneDifference);

  return (
    <div className="App">
      <Nav />
      <Container>
        {(Object.keys(data).length === 0) ? <Loader /> : <Map data={data} />}
      </Container>
    </div>
  );
}

export default App;
