export class ReservationsProvider {
  static async checkIfReservationsTableExists(db) {
    return await db.query(`SELECT EXISTS (
      SELECT FROM 
      pg_tables
      WHERE 
        schemaname = 'public' AND 
        tablename  = 'reservations'
    );
  `);
  }

  static async createReservationsTable(db) {
    return await db.query(`CREATE TABLE IF NOT EXISTS reservations (
      id serial PRIMARY KEY,
      pnr VARCHAR(6) NOT NULL,
      domestic_flight_number VARCHAR(6) NOT NULL,
      ath_arrival_date_time TIMESTAMP NOT NULL,
      interline_operating_carrier VARCHAR(2) NOT NULL,
      interline_flight_number VARCHAR(6) NOT NULL,
      interline_arrival_station VARCHAR(3) NOT NULL,
      interline_departure_datetime TIMESTAMP NOT NULL,
      time_difference_in_minutes SMALLINT NOT NULL);
  `);
  }

  static createReservations(db, reservation) {
    return db.query(
      `INSERT INTO reservations (pnr, domestic_flight_number, ath_arrival_date_time, interline_operating_carrier, 
        interline_flight_number,interline_arrival_station, interline_departure_datetime, time_difference_in_minutes) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`,
      [
        reservation.pnr,
        reservation.domesticFlightNumber,
        reservation.athArrivalDateTime,
        reservation.interlineOperatingCarrier,
        reservation.interlineFlightNumber,
        reservation.interlineArrivalStation,
        reservation.interlineDepartureDateTime,
        reservation.timeDifferenceInMinutes
      ]
    );
  }

  static async readNonMctRoutes(db) {
    return await db.query(`
    SELECT pnr, time_difference_in_minutes, domestic_flight_number, interline_flight_number,
    CASE
	    WHEN ath_arrival_date_time < interline_departure_datetime THEN 'ATH'||interline_arrival_station
	    else interline_arrival_station||'ATH'
    END
    as route
    FROM reservations
    WHERE time_difference_in_minutes  <= 150;
    `);
  }

  static async readInterlineCarriers(db) {
    return await db.query(`
    SELECT DISTINCT interline_operating_carrier, COUNT(1) from reservations 
    GROUP BY interline_operating_carrier
    ORDER BY COUNT DESC;
    `);
  }
}
