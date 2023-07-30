import * as fs from 'fs';

import arrayToObjectKeys from '../helpers/array-to-object-keys';
import assignValuesToKeys from '../helpers/assing-values-to-keys';
import readXmlFiles from '../helpers/read-xml-files';
import removeXmlExtension from '../helpers/remove-xml-extension';

export default class XmlService {
  static async parseXmlFiles() {
    const xmlFileTitles = removeXmlExtension(fs.readdirSync('./public/data'));
    const xmlFiles = await readXmlFiles(xmlFileTitles);
    const jsonReservations = assignValuesToKeys(
      arrayToObjectKeys(xmlFileTitles),
      xmlFiles
    );

    console.log(JSON.stringify(jsonReservations));
  }
}
