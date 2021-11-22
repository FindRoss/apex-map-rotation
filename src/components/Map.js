function Map({ data, title, image }) {


  const timeSetter = time => {
    let currentTime = new Date()
    let currentOffset = currentTime.getTimezoneOffset();
    let calcDifference = currentOffset / -60;


    // I am -60 from Coordinated Universal Time (UTC) 
    // need -60 to equal 1
    // %60
    console.log("Time:", currentTime);
    console.log("TimeOffset: ", currentOffset);
    console.log(calcDifference);



    let date = new Date(time);
    let [hours, minutes] = [date.getHours(), date.getMinutes()];

    if (minutes.toString().length === 1) {
      minutes = `0${minutes}`;
    }
    return `${hours + calcDifference}:${minutes}`;
  };


  return (
    <>
      <figure className="rounded-xl p-0 bg-white text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">
        <img src={image} alt="Worlds Edge" className="h-auto w-full object-fit" />
        <div className="p-8 text-center md:text-left space-y-2">
          <div>
            <div class="text-gray-700 uppercase">
              {title}
            </div>
            <h3 className="flex-auto text-xl font-bold my-2">
              {data.map}
            </h3>
            <div>
              <span className="text-sm font-medium text-gray-600">Start</span>
              <p className="text-lg font-semibold">
                {timeSetter(data.readableDate_start)}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">End</span>
              <p className="text-lg font-semibold">
                {timeSetter(data.readableDate_end)}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-600">Duration</span>
              <p className="text-lg font-semibold">
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