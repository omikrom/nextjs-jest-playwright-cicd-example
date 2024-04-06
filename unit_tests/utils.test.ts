import { sum } from '../utils';

describe('sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
  });
});