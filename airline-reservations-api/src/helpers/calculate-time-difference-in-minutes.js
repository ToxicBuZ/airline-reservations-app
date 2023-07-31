/* This method accepts two datetime ISOstrings, converts them to Date and returns the absolute value of their remainder in minutes*/
export function calculateTimeDifferenceInMinutes(timeFrom, timeTo) {
  const timeFromDate = new Date(timeFrom);
  const timeToDate = new Date(timeTo);
  return Math.abs((timeToDate - timeFromDate) / (1000 * 60));
}
