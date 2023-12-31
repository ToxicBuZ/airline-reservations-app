import { calculateTimeDifferenceInMinutes } from './calculate-time-difference-in-minutes';

/*
 * This method serves as an SQL adapter.
 * It accepts an object of JSONobjects and
 * returns an array of clean objects that will match the SQL reservations table columns
 */
export function clearJsonData(object) {
  let cleanArray = [];
  for (const key in object) {
    const logicalFlight =
      object[key]['s:Envelope']['s:Body'][0]['RetrievePNRResponse'][0][
        'RetrievePNRResult'
      ][0]['a:Airlines'][0]['a:Airline'][0]['a:LogicalFlight'][0][
        'a:LogicalFlight'
      ][0];

    const oafFlight =
      object[key]['s:Envelope']['s:Body'][0]['RetrievePNRResponse'][0][
        'RetrievePNRResult'
      ][0]['a:Airlines'][0]['a:Airline'][0]['a:OAFlights'][0]['a:OAFlight'][0];

    let reservationModel = {
      pnr: key,

      domesticDepartureAirport: logicalFlight['a:Origin'][0].trim(),

      domesticFlightNumber:
        logicalFlight['a:OperatingCarrier'][0].trim() +
        logicalFlight['a:OperatingFlightNumber'][0].trim(),

      athArrivalDateTime: logicalFlight['a:Arrivaltime'][0].trim(),

      interlineOperatingCarrier: oafFlight['a:OperatingCarrier'][0].trim(),

      interlineFlightNumber:
        oafFlight['a:OperatingCarrier'][0].trim() +
        oafFlight['a:OperatingFlightNumber'][0].trim(),

      interlineArrivalStation: oafFlight['a:Destination'][0].trim(),

      interlineDepartureDateTime: oafFlight['a:DepartureTime'][0].trim(),

      timeDifferenceInMinutes: calculateTimeDifferenceInMinutes(
        logicalFlight['a:Arrivaltime'][0].trim(),
        oafFlight['a:DepartureTime'][0].trim()
      )
    };
    cleanArray.push(reservationModel);
  }
  return cleanArray;
}
