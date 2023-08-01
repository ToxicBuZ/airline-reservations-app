import { calculateTimeDifferenceInMinutes } from './calculate-time-difference-in-minutes';

/*
 * This method serves as an SQL adapter.
 * It accepts an object of JSONobjects and
 * returns an array of clean objects that will match the SQL reservations table columns
 */
export function clearJsonData(object) {
  let cleanArray = [];
  for (const key in object) {
    const basePath =
      object[key]['s:Envelope']['s:Body'][0]['RetrievePNRResponse'][0][
        'RetrievePNRResult'
      ][0]['a:Airlines'][0]['a:Airline'][0];

    let reservationModel = {
      pnr: key,

      domesticDepartureAirport:
        basePath['a:LogicalFlight'][0]['a:LogicalFlight'][0][
          'a:Origin'
        ][0].trim(),

      domesticFlightNumber:
        basePath['a:LogicalFlight'][0]['a:LogicalFlight'][0][
          'a:OperatingCarrier'
        ][0].trim() +
        basePath['a:LogicalFlight'][0]['a:LogicalFlight'][0][
          'a:OperatingFlightNumber'
        ][0].trim(),

      athArrivalDateTime:
        basePath['a:LogicalFlight'][0]['a:LogicalFlight'][0][
          'a:Arrivaltime'
        ][0].trim(),

      interlineOperatingCarrier:
        basePath['a:OAFlights'][0]['a:OAFlight'][0][
          'a:OperatingCarrier'
        ][0].trim(),

      interlineFlightNumber:
        basePath['a:OAFlights'][0]['a:OAFlight'][0][
          'a:OperatingCarrier'
        ][0].trim() +
        basePath['a:OAFlights'][0]['a:OAFlight'][0][
          'a:OperatingFlightNumber'
        ][0].trim(),

      interlineArrivalStation:
        basePath['a:OAFlights'][0]['a:OAFlight'][0]['a:Destination'][0].trim(),

      interlineDepartureDateTime:
        basePath['a:OAFlights'][0]['a:OAFlight'][0][
          'a:DepartureTime'
        ][0].trim(),

      timeDifferenceInMinutes: calculateTimeDifferenceInMinutes(
        basePath['a:LogicalFlight'][0]['a:LogicalFlight'][0][
          'a:Arrivaltime'
        ][0].trim(),
        basePath['a:OAFlights'][0]['a:OAFlight'][0]['a:DepartureTime'][0].trim()
      )
    };
    cleanArray.push(reservationModel);
  }
  return cleanArray;
}
