function Map({ data, title, image }) {

  // Dont need this now!?
  // let currentTime = new Date()
  // let currentOffset = currentTime.getTimezoneOffset();
  // let calcDifference = currentOffset / -60;

  const timeSetter = time => {
    // have to add the T/Z formatting for Safari
    let date = new Date(time.replace(/\s/, 'T') + 'Z');

    let [hours, minutes] = [date.getHours(), date.getMinutes()];

    console.log(date);

    if (minutes.toString().length === 1) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  };


  // datetime in "America/Chicago" timezone in the "en-US" locale
  // "3/22/2021, 5:05:51 PM"
  // console.log(chicago_datetime_str);



  return (
    <>
      <figure className="rounded-xl shadow-sm p-0 bg-white text-gray-800 text-white mb-6 md:mb-0 overflow-hidden">
        <img src={image} alt="Worlds Edge" className="h-36 w-full object-cover" />
        <div className="px-8 py-4 text-center space-y-2">
          <div>
            <div className="text-gray-500 text-sm uppercase">
              {title}
            </div>
            <h3 className="flex-auto text-2xl font-bold mb-6">
              {data.map}
            </h3>
            <div className="flex">
              <div className="flex-initial">
                <span className="text-xs font-medium text-gray-500 uppercase">Start</span>
                <p className="text-lg font-semibold">
                  {timeSetter(data.readableDate_start)}
                </p>
              </div>

              {/* duration */}
              <div className="flex-1 text-xs flex justify-center items-center border-1">
                <span className="w-full mx-6 text-center text-gray-600 border-b-2 border-grey-200">{data.DurationInMinutes} mins</span>
              </div>

              <div className="flex-initial">
                <span className="text-xs font-medium text-gray-500 uppercase">End</span>
                <p className="text-lg font-semibold">
                  {timeSetter(data.readableDate_end)}
                </p>
              </div>
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





  // I am -60 from Coordinated Universal Time (UTC) 
  // need -60 to equal 1
  // %60
  // console.log("Time:", currentTime);
  // console.log("TimeOffset: ", currentOffset);
  // console.log(calcDifference);

  // let timeZoneStr = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // console.log(timeZoneStr);
  // let localDate = new Date(time).toLocaleString("en-US", { timeZone: timeZoneStr });