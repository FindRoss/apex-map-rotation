import MapCurrent from './MapCurrent';
import MapNext from './MapNext';
import MapRankedCurrent from './MapRankedCurrent';
import MapRankedNext from './MapRankedNext';


function Playlist({ data: { current, next }, type }) {

  "battle_royale"
  "arenasRanked"

  function switcheroo(t) {
    let output = "";

    switch (t) {
      case "battle_royale":
        output = "BATTLE ROYALE";
        break;
      case "arenasRanked":
        output = "ARENAS RANKED";
        break;
      default:
        output = t.toUpperCase();
    }

    return output;
  }

  return (
    <div className="container sm:mx-auto md:px-0 px-4 py-8" id={`#${type}`}>
      <div className="mb-4">
        <h2 className="text-sm font-bold p-2 bg-white rounded shadow-sm inline">{switcheroo(type)}</h2>
      </div>

      {!(type === "ranked") ? (
        <div className="sm:grid sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2">
            <MapCurrent data={current} type={type} />
          </div>
          <div>
            <MapNext data={next} type={type} />
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <MapRankedCurrent data={current} />
          </div>
          <div>
            <MapRankedNext data={next} />
          </div>
        </>
      )}
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


