/* Transforms the interline carriers array from SQL to the InterlineCarrier model of Angular */
export function transformInterlineCarriers(interlineCarriers) {
  return interlineCarriers.map((interlineCarrier) => {
    return {
      bookings: interlineCarrier?.count,
      interlineOperatingCarrier: interlineCarrier?.interline_operating_carrier
    };
  });
}
