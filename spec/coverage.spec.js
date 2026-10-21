const gridDensity = require('../index.js');

describe('Additional tests for full coverage of grid edge cases', () => {
  it('should test findShortSubSquare algorithm correctness and remainder boundaries', () => {
    // Tests spacing=10, height=4
    // blockWidth = Math.max((10 - 4) * 2, 10) = 12

    // Case 1: remainder block count = 1
    // width=38 -> 3 blocks (width 36), remainder = 2.
    // ((2 + 4) - 1 > 10) is 5 > 10 -> false => remainerBlockCount = 1
    // Count = (3 * 2) + 1 = 7.
    let result = gridDensity.findPercentFull(38, 4, 10);
    expect(result.count).toBe(7);

    // Case 2: remainder block count = 2
    // width=32 -> 2 blocks (width 24), remainder = 8.
    // ((8 + 4) - 1 > 10) is 11 > 10 -> true => remainerBlockCount = 2
    // Count = (2 * 2) + 2 = 6.
    result = gridDensity.findPercentFull(32, 4, 10);
    expect(result.count).toBe(6);

    // Case 3: remainder block count = 0
    // width=36 -> 3 blocks (width 36), remainder = 0.
    // remainerBlockCount = 0
    // Count = (3 * 2) + 0 = 6.
    result = gridDensity.findPercentFull(36, 4, 10);
    expect(result.count).toBe(6);
  });
});
