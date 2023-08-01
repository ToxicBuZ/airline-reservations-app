import { describe, expect, it } from '@jest/globals';
import { removeXmlExtension } from '../src/helpers/remove-xml-extension';

const array = [
  '103655.xml',
  '192523.xml',
  '228093.xml',
  '426961.xml',
  '724127.xml',
  '952772.xml'
];

describe('remove-xml-extension', () => {
  it('should return a new object with the array elements as keys and {} as values', () => {
    const result = removeXmlExtension(array);
    expect(result).toEqual([
      '103655',
      '192523',
      '228093',
      '426961',
      '724127',
      '952772'
    ]);
  });
});
