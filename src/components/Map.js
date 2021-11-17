function Map({ data, title, image }) {


  const timeSetter = time => {
    let date = new Date(time);
    let [hours, minutes] = [date.getHours(), date.getMinutes()];

    if (minutes.toString().length === 1) {
      minutes = `0${minutes}`;
    }
    return `${hours + 1}:${minutes}`;
  };


  return (
    <>
      <figure className="rounded-xl p-0 bg-indigo-900 text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">
        <img src={image} alt="Worlds Edge" className="w-full h-auto object-fill" />
        <div className="p-8 text-center md:text-left space-y-2">
          <div className="text-white">
            <div class="text-gray-400 uppercase">
              {title}
            </div>
            <h1 className="flex-auto text-xl font-semibold text-white my-2">
              {data.map}
            </h1>
            <div>
              <span className="text-sm font-medium text-gray-300">Start</span>
              <p className="text-lg font-semibold text-white">
                {timeSetter(data.readableDate_start)}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-300">End</span>
              <p className="text-lg font-semibold text-white">
                {timeSetter(data.readableDate_end)}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-300">Duration</span>
              <p className="text-lg font-semibold text-white">
                {data.DurationInMinutes} minutes
              </p>
            </div>
          </div>
        </div>
      </figure>
    </>
  )
}

export default Map;




  // let remainingMins;

  // if (data.hasOwnProperty("timer")) {
  //   remainingMins = <p>Time remaining: <strong>{data.timer}</strong></p>
  // };

  // original remainingMinds was like: 
  // let remainingMins;

  // if (props.hasOwnProperty("timer")) {
  //   remainingMins = <p>Time remaining: <strong>{props.timer}</strong></p>
  // };