export default function assignValuesToKeys(object, values) {
  for (const key in object) {
    let counter = 0;
    object[key] = values[counter];
    counter++;
  }
  return object;
}
