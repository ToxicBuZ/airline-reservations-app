import { describe, expect, it } from '@jest/globals';
import { calculateTimeDifferenceInMinutes } from '../src/helpers/calculate-time-difference-in-minutes';

const timeFrom = '2022-09-02T08:30:00';
const timeTo = '2022-09-02T09:25:00';

describe('calculate-time-difference-in-minutes', () => {
  it('should return 55', () => {
    const result = calculateTimeDifferenceInMinutes(timeFrom, timeTo);
    expect(result).toEqual(55);
  });
});
