import { PostgresClient } from './postgres-service';
import { ReservationsProvider } from '../providers/reservations-provider';
import { arrayToObjectKeys } from '../helpers/array-to-object-keys';
import { assignValuesToKeys } from '../helpers/assing-values-to-keys';
import { clearJsonData } from '../helpers/clear-json-data';
import { readXmlFiles } from '../helpers/read-xml-files';
import { removeXmlExtension } from '../helpers/remove-xml-extension';
import * as fs from 'fs';

export class XmlService {
  static async parseXmlFiles() {
    const db = new PostgresClient();

    const reservationsTableExists =
      await ReservationsProvider.checkIfReservationsTableExists(db.client);

    if (!reservationsTableExists.rows[0].exists) {
      const xmlFileTitles = removeXmlExtension(fs.readdirSync('./public/data'));

      const xmlFiles = await readXmlFiles(xmlFileTitles);

      const jsonReservations = assignValuesToKeys(
        arrayToObjectKeys(xmlFileTitles),
        xmlFiles
      );

      let cleanJsonReservations = clearJsonData(jsonReservations);

      await ReservationsProvider.createReservationsTable(db.client);

      cleanJsonReservations.forEach(async (reservation) => {
        await ReservationsProvider.createReservations(db.client, reservation);
      });
    }
  }
}
