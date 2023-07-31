/* This method is used to create a new object, with the xml file titles as keys and {} as values */
export function arrayToObjectKeys(array) {
  const newObject = array.reduce((accumulator, value) => {
    return { ...accumulator, [value]: {} };
  }, {});
  return newObject;
}
