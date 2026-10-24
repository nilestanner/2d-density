const gridDensity = require('../index.js');

describe('Additional tests for full coverage of grid edge cases', () => {
  it('should test findShortSubSquare algorithm correctness and remainder boundaries', () => {
    let result = gridDensity.findPercentFull(38, 4, 10);
    expect(result.count).toBe(7);

    result = gridDensity.findPercentFull(32, 4, 10);
    expect(result.count).toBe(6);

    result = gridDensity.findPercentFull(36, 4, 10);
    expect(result.count).toBe(6);

    result = gridDensity.findPercentFull(7, 4, 10);
    expect(result.count).toBe(1);

    result = gridDensity.findPercentFull(8, 4, 10);
    expect(result.count).toBe(2);
  });

  it('should test 0 as input for parameters to cover width <= 0 condition', () => {
    expect(() => gridDensity.findPercentFull(0, 10, 2)).toThrowError('width, height, and spacing must be positive integers');
    expect(() => gridDensity.findPercentFull(10, 0, 2)).toThrowError('width, height, and spacing must be positive integers');
    expect(() => gridDensity.findPercentFull(10, 10, 0)).toThrowError('width, height, and spacing must be positive integers');
  });

  it('should verify width < height condition swap logic', () => {
    const result1 = gridDensity.findPercentFull(4, 5, 3);
    const result2 = gridDensity.findPercentFull(5, 4, 3);
    expect(result1.count).toBe(result2.count);
    expect(result1.percent).toBe(result2.percent);
  });
});
