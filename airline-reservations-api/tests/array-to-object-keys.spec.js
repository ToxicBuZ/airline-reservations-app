import { describe, expect, it } from '@jest/globals';
import { arrayToObjectKeys } from '../src/helpers/array-to-object-keys';

const array = ['103655', '192523', '228093', '426961', '724127', '952772'];

describe('array-to-object-keys', () => {
  it('should return a new object with the array elements as keys and {} as values', () => {
    const result = arrayToObjectKeys(array);
    expect(result).toEqual({
      103655: {},
      192523: {},
      228093: {},
      426961: {},
      724127: {},
      952772: {}
    });
  });
});
