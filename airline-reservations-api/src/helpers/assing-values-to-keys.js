/* This method iterates over an object and assignes the data in the equivalant valuesArray index as values */
export function assignValuesToKeys(object, valuesArray) {
  let counter = 0;
  for (const key in object) {
    object[key] = valuesArray[counter];
    counter = counter + 1;
  }
  return object;
}
