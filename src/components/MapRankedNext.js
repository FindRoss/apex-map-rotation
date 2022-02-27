function MapRankedNext({ data }) {

  return (
    <>
      <figure className="h-full rounded shadow-sm p-0 bg-white text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">
        <div className="p-6">
          <div className="text-sm uppercase">Next Split</div>
          <h3 className="text-3xl font-bold">{data.map}</h3>
        </div>
      </figure>
    </>
  )
}

export default MapRankedNext;