import { describe, expect, it } from '@jest/globals';
import { assignValuesToKeys } from '../src/helpers/assing-values-to-keys';

const object = {
  103655: {},
  192523: {},
  228093: {},
  426961: {},
  724127: {},
  952772: {}
};

const valuesArray = [
  'element 1',
  'element 2',
  'element 3',
  'element 4',
  'element 5',
  'element 6'
];

describe('assign-values-to-keys', () => {
  it('should pass the array elements in the same index of the object keys as values', () => {
    const result = assignValuesToKeys(object, valuesArray);
    expect(result).toEqual({
      103655: 'element 1',
      192523: 'element 2',
      228093: 'element 3',
      426961: 'element 4',
      724127: 'element 5',
      952772: 'element 6'
    });
  });
});
