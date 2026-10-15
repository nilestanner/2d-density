const gridDensity = require('../index.js');
describe('Additional coverage for recursive grid traversal', () => {
  it('should traverse top-left during insertion', () => {
    // 10x6 with spacing 3 causes a pattern that forces the recursive
    // traversal to go bottom-right and then back top-left, hitting line 109.
    const result = gridDensity.findPercentFull(10, 6, 3);
    expect(result.count).toBe(12);
    expect(result.percent).toBe(12 / 60);
  });
});
