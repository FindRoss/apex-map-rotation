import { timeSetter } from '../timeSetter';
import { useState, useEffect } from 'react';
// Countdown timer guides: https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3

function MapCurrent({ data }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let duration = data.DurationInSecs;
    let remaining = data.remainingSecs;
    let calc = Math.floor((remaining / duration) * 100);

    setPercent(calc);
  }, [data.DurationInSecs, data.remainingSecs]);

  // THIS IS NOT DOING ANYTHING WAS JUST TRYING TO DO THIS HERE BUT NOT WORKING
  // Change to days if its the start of a season and 7 days = 140000 minutes
  useEffect(() => {
    // 1400 mins is one day
    let durationMinsOutput = data.DurationInMinutes;
    if (data.DurationInMinutes > 1400) {
      durationMinsOutput = (data.DurationInMinutes / 1400).toFixed();
    }

    console.log('useEffect is running finally', data.DurationInMinutes);
  }, [])

  const percentStyle = {
    bottom: "-4px",
    right: percent + "%"
  }

  return (
    <>
      <figure className="h-full rounded shadow-sm p-0 bg-white text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">

        <div className="relative">
          <img src={data.asset} alt={data.map} className="h-44 w-full object-cover" />
          <span className="absolute flex flex-col justify-center items-center h-full w-full top-0 bottom-0 left-0 right-0">
            <div className="text-white text-sm uppercase">Current</div>
            <h3 className="text-white text-3xl font-bold">{data.map}</h3>
          </span>
        </div>

        <div className="px-8 py-4 text-center space-y-2 h-full flex flex-col space-between">

          <div className="flex">
            <div className="flex-initial">
              <span className="text-xs font-medium text-gray-500 uppercase">Start</span>
              <p className="text-lg font-semibold">
                {timeSetter(data.readableDate_start)}
              </p>
            </div>

            {/* duration */}
            <div className="relative flex flex-col flex-1 text-xs justify-center items-center border-1 mx-4">
              <span className="relative w-full text-center pb-2 border-b-4 border-grey-200">
                <span className="text-gray-500 hidden">Remaining: </span>
                <span className="text-gray-600">
                  {(data.DurationInMinutes > 1400) ? (data.DurationInMinutes / 1400).toFixed() : data.DurationInMinutes}
                  {(data.DurationInMinutes > 1400) ? "days" : "mins"}
                </span>
                <span className="absolute border-blue-500 border-t-4 left-0" style={percentStyle}></span>
              </span>

            </div>

            <div className="flex-initial">
              <span className="text-xs font-medium text-gray-500 uppercase">End</span>
              <p className="text-lg font-semibold">
                {timeSetter(data.readableDate_end)}
              </p>
            </div>

          </div>
        </div>
      </figure>
    </>
  )
}

export default MapCurrent;




