/* This method will read an array of titles and remove their .xml extension */
export function removeXmlExtension(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].replace('.xml', ''));
  }
  return newArray;
}
