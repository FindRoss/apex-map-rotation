import worldsEdge from '../media/worlds-edge.jpg';
import olympus from '../media/olympus.jpg';
import kingsCanyon from '../media/kings-canyon.jpg';

function MapPanel(props) {
  let { data, title } = props;

  const imgStyle = {
    width: '100%',
    height: 'auto'
  }

  const contStyle = {
    marginBottom: '2em'
  }

  const mapPicker = map => {
    switch (map) {
      case "Olympus":
        return olympus;
      case "World's Edge":
        return worldsEdge;
      case "King's Canyon":
        return kingsCanyon;
      default:
        return null;
    }
  };

  let pickMap = mapPicker(data.map);

  let remainingMins;

  if (props.hasOwnProperty("timer")) {
    remainingMins = <p>Time remaining: <strong>{props.timer}</strong></p>
  };


  const timeSetter = time => {
    let date = new Date(time);
    let [hours, minutes] = [date.getHours(), date.getMinutes()];

    if (minutes.toString().length === 1) {
      minutes = `0${minutes}`;
    }
    return `${hours + 2}:${minutes}`;
  };

  return (
    <div style={contStyle}>
      <img src={pickMap} alt={`${data.map}`} style={imgStyle} width="1232" height="385" />
      <h2>{title}: <strong>{data.map}</strong></h2>
      <p>Start: <strong>{timeSetter(data.readableDate_start)}</strong></p>
      <p>End: <strong>{timeSetter(data.readableDate_end)}</strong></p>
      <p>Duration: <strong>{data.DurationInMinutes} mins</strong></p>
      {remainingMins}
    </div>
  )
}

export default MapPanel;


