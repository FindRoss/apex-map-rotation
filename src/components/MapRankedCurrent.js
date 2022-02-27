function MapRankedCurrent({ data }) {

  return (
    <>
      <figure className="h-full rounded shadow-sm p-0 bg-white text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">
        <div className="relative">
          <img src={data.asset} alt="Worlds Edge" className="h-64 w-full object-cover" />
          <span className="absolute flex flex-col justify-center items-center h-full w-full top-0 bottom-0 left-0 right-0">
            <div className="text-white text-sm uppercase">Current Split</div>
            <h3 className="text-white text-4xl font-bold">{data.map}</h3>
          </span>
        </div>
      </figure>
    </>
  )
}

export default MapRankedCurrent;