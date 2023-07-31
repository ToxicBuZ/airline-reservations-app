import { parseXml } from './parse-xml';
import * as fs from 'fs';

/*
 * This method will accept an array of file titles
 * It will read the files in the data folder
 * and store the data in a files array
 */
export async function readXmlFiles(fileTitles) {
  let files = [];
  for (let i = 0; i < fileTitles.length; i++) {
    const file = await parseXml(
      fs.readFileSync(`./public/data/${fileTitles[i]}.xml`).toString()
    );
    files.push(file);
  }
  return files;
}
