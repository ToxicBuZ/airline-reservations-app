import * as fs from 'fs';
import parseXml from '../helpers/parse-xml';

export default class XmlService {
  static async parseXmlFiles() {
    console.log('XML SERVICE CALLED');

    const jsonReservation103655 = await parseXml(
      fs.readFileSync('./public/data/103655.xml').toString()
    );

    const jsonReservation192523 = await parseXml(
      fs.readFileSync('./public/data/192523.xml').toString()
    );

    const jsonReservation228093 = await parseXml(
      fs.readFileSync('./public/data/228093.xml').toString()
    );

    const jsonReservation426961 = await parseXml(
      fs.readFileSync('./public/data/426961.xml').toString()
    );

    const jsonReservation724127 = await parseXml(
      fs.readFileSync('./public/data/724127.xml').toString()
    );

    const jsonReservation952772 = await parseXml(
      fs.readFileSync('./public/data/952772.xml').toString()
    );

    const jsonReservations = {
      jsonReservation103655: jsonReservation103655,
      jsonReservation192523: jsonReservation192523,
      jsonReservation228093: jsonReservation228093,
      jsonReservation426961: jsonReservation426961,
      jsonReservation724127: jsonReservation724127,
      jsonReservation952772: jsonReservation952772
    };

    console.log(JSON.stringify(jsonReservations));
  }
}
