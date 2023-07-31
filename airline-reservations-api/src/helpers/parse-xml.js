import { parseString } from 'xml2js';

/* This method will parse an xml file and convert it to JSON */
export function parseXml(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}
