const gridDensity = require('../index.js');

describe('Security and edge cases', () => {

  it('should validate inputs as positive integers', () => {
    const invalidInputs = [
      [-1, 10, 2],
      ["10", 10, 2],
      [10, 10, -2],
      [10.5, 10, 2],
      [10, 10, "2"]
    ];

    for (const input of invalidInputs) {
      expect(() => {
        gridDensity.findPercentFull(input[0], input[1], input[2]);
      }).toThrowError('width, height, and spacing must be positive integers');
    }
  });

  it('should prevent Out of Memory limits (DoS)', () => {
    expect(() => {
      gridDensity.findPercentFull(30000, 30000, 30000);
    }).toThrowError('Grid size exceeds maximum allowed limit to prevent Out of Memory errors');

    // Check width limit independently
    expect(() => {
      gridDensity.createGrid(5000001, 1);
    }).toThrowError('Grid size exceeds maximum allowed limit to prevent Out of Memory errors');

    // Check height limit independently
    expect(() => {
      gridDensity.createGrid(1, 25000001);
    }).toThrowError('Grid size exceeds maximum allowed limit to prevent Out of Memory errors');

    // Check area limit independently
    expect(() => {
      gridDensity.createGrid(5001, 5001);
    }).toThrowError('Grid size exceeds maximum allowed limit to prevent Out of Memory errors');
  });

  it('should prevent OOM limits bypass with 0 or NaN directly on internal allocation calls', () => {
    expect(() => {
      gridDensity.createGrid(100000000, 0);
    }).toThrowError('Grid dimensions must be valid positive integers');

    expect(() => {
      gridDensity.createGrid("100", 100);
    }).toThrowError('Grid dimensions must be valid positive integers');

    expect(() => {
      gridDensity.createGrid(NaN, 100);
    }).toThrowError('Grid dimensions must be valid positive integers');

    expect(() => {
      gridDensity.createGrid(-1, 100);
    }).toThrowError('Grid dimensions must be valid positive integers');

    expect(() => {
      gridDensity.createGrid(100, 1.5);
    }).toThrowError('Grid dimensions must be valid positive integers');
  });

});
