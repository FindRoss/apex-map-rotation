import { timeSetter } from '../timeSetter'

function MapCurrent({ data }) {
  // Countdown timer guides: https://dev.to/zhiyueyi/how-to-create-a-simple-react-countdown-timer-4mc3

  const remainingPer = () => {
    let duration = data.DurationInSecs;
    let remaining = data.remainingSecs;

    let calc = Math.floor((remaining / duration) * 100);

    return `${calc}%`;
  }
  remainingPer();

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
                <span className="text-gray-600">{data.DurationInMinutes} mins</span>
                <span className="absolute border-blue-500 border-t-4 left-0" style={{ bottom: "-4px", right: remainingPer() }}></span>
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




