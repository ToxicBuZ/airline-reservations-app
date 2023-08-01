/* Transforms the non mct routes array from SQL rows to the NonMctRoutes model of Angular */
export function transformNonMctRoutes(nonMctRoutes) {
  return nonMctRoutes.map((route) => {
    return {
      domesticFlightNumber: route?.domestic_flight_number,
      interlineFlightNumber: route?.interline_flight_number,
      pnr: route?.pnr,
      route: route?.route,
      timeDifferenceInMinutes: route?.time_difference_in_minutes
    };
  });
}
