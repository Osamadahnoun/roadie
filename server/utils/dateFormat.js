const dateFormat = timestamp => {
  var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  var date = new Date(timestamp);

  var year = date.getFullYear();
  var month = months_arr[date.getMonth()];
  var day = date.getDate();
  let hour = date.getHours() > 12
    ? Math.floor(date.getHours() - 12)
    : date.getHours();

  // if hour is 0 (12:00am), change it to 12
  if (hour === 0) {
    hour = 12;
  }

  var minute = "0" + date.getMinutes();

  const periodOfDay = date.getHours() >= 12 ? 'pm' : 'am';

  var formattedDate = month+' '+day+', '+year+' at '+hour + ':' + minute.substr(-2) + periodOfDay;

  return formattedDate;
};

module.exports = dateFormat;