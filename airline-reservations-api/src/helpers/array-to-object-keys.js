export default function arrayToObjectKeys(array) {
  const newObject = array.reduce((accumulator, value) => {
    return { ...accumulator, [value]: {} };
  }, {});
  return newObject;
}
