export const timeSetter = time => {
  // have to add the T/Z formatting for Safari
  let date = new Date(time.replace(/\s/, 'T') + 'Z');

  let [hours, minutes] = [date.getHours(), date.getMinutes()];

  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}


// OLD NOTES
  // Dont need this now!?
  // let currentTime = new Date()
  // let currentOffset = currentTime.getTimezoneOffset();
  // let calcDifference = currentOffset / -60;

  // const timeSetter = time => {
  //   // have to add the T/Z formatting for Safari
  //   let date = new Date(time.replace(/\s/, 'T') + 'Z');

  //   let [hours, minutes] = [date.getHours(), date.getMinutes()];

  //   if (minutes.toString().length === 1) {
  //     minutes = `0${minutes}`;
  //   }
  //   return `${hours}:${minutes}`;
  // };

  // datetime in "America/Chicago" timezone in the "en-US" locale
  // "3/22/2021, 5:05:51 PM"
  // console.log(chicago_datetime_str);