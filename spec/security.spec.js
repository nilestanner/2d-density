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
  });

});
