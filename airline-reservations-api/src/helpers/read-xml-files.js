import * as fs from 'fs';
import parseXml from './parse-xml';

export default async function readXmlFiles(fileTitles) {
  let files = [];
  for (let i = 0; i < fileTitles.length; i++) {
    const file = await parseXml(
      fs.readFileSync(`./public/data/${fileTitles[i]}.xml`).toString()
    );
    files.push(file);
  }
  return files;
}
