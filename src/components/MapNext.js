import { timeSetter } from '../timeSetter'

function MapNext({ data }) {

  return (
    <>
      <figure className="h-full rounded shadow-sm p-0 bg-white text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">

        <div className="h-full px-8 py-4 text-center space-y-2 h-full flex flex-col justify-between">

          <div className="h-full flex flex-col justify-center border-b border-gray-200">
            <div className="text-gray-500 text-sm uppercase">Next</div>
            <h3 className="text-2xl font-bold mb-6">
              {data.map}
            </h3>
          </div>

          <div className="flex">
            <div className="flex-initial">
              <span className="text-xs font-medium text-gray-500 uppercase">Start</span>
              <p className="text-lg font-semibold">
                {timeSetter(data.readableDate_start)}
              </p>
            </div>

            {/* duration */}
            <div className="flex-1 text-xs flex justify-center items-center border-1 mx-2">
              <span className="w-full text-center text-gray-600 pb-1 border-b-4 border-grey-200">{data.DurationInMinutes} mins</span>
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

export default MapNext;