import { sum } from '../src/sum';

describe('My first test :)', () => {
  it('should return 4...right?', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
