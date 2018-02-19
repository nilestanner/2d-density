const gridDensity = require('../index.js');

describe('Test cases for grid-density', () => {


  it('should', () => {
    expect(gridDensity).toBeTruthy();
  });

  describe('Test cases for spacing 1', () => {
    it('should work for 1 x 1', () => {
      const result = gridDensity.findPercentFull(1,1,1);
      expect(result.count).toBe(1);
      expect(result.percent).toBe(1);
    });

    it('should work for 2 x 2', () => {
      const result = gridDensity.findPercentFull(2,2,1);
      expect(result.count).toBe(4);
      expect(result.percent).toBe(1);
    });

    it('should work for 5 x 5', () => {
      const result = gridDensity.findPercentFull(5,5,1);
      expect(result.count).toBe(25);
      expect(result.percent).toBe(1);
    });

    it('should work for 100 x 100', () => {
      const result = gridDensity.findPercentFull(100,100,1);
      expect(result.count).toBe(10000);
      expect(result.percent).toBe(1);
    });

    it('should work for 1 x 100', () => {
      const result = gridDensity.findPercentFull(1,100,1);
      expect(result.count).toBe(100);
      expect(result.percent).toBe(1);
    });

    it('should work for 100 x 1', () => {
      const result = gridDensity.findPercentFull(100,1,1);
      expect(result.count).toBe(100);
      expect(result.percent).toBe(1);
    });

    it('should work for 99 x 3', () => {
      const result = gridDensity.findPercentFull(99, 3,1);
      expect(result.count).toBe(297);
      expect(result.percent).toBe(1);
    });

    it('should work for 3 x 99', () => {
      const result = gridDensity.findPercentFull(3,99,1);
      expect(result.count).toBe(297);
      expect(result.percent).toBe(1);
    });

    it('should work for large grids', () => {
      const result = gridDensity.findPercentFull(1000000,1000000,1);
      expect(result.count).toBe(1000000000000);
      expect(result.percent).toBe(1);
    });
  });

  describe('Test cases for spacing 2', () => {
    it('should work for 1 x 1', () => {
      const result = gridDensity.findPercentFull(1, 1, 2);
      expect(result.count).toBe(1);
      expect(result.percent).toBe(1);
    });

    it('should work for 2 x 2', () => {
      const result = gridDensity.findPercentFull(2, 2, 2);
      expect(result.count).toBe(2);
      expect(result.percent).toBe(0.5);
    });

    it('should work for 5 x 5', () => {
      const result = gridDensity.findPercentFull(5, 5, 2);
      expect(result.count).toBe(13);
      expect(result.percent).toBe(0.52);
    });

    it('should work for 100 x 100', () => {
      const result = gridDensity.findPercentFull(100, 100, 2);
      expect(result.count).toBe(5000);
      expect(result.percent).toBe(0.5);
    });

    it('should work for 1 x 100', () => {
      const result = gridDensity.findPercentFull(1, 100, 2);
      expect(result.count).toBe(50);
      expect(result.percent).toBe(0.5);
    });

    it('should work for 100 x 1', () => {
      const result = gridDensity.findPercentFull(100, 1, 2);
      expect(result.count).toBe(50);
      expect(result.percent).toBe(0.5);
    });

    it('should work for 99 x 3', () => {
      const result = gridDensity.findPercentFull(99, 3, 2);
      expect(result.count).toBe(149);
      expect(result.percent).toBe(149/297);
    });

    it('should work for 3 x 99', () => {
      const result = gridDensity.findPercentFull(3, 99, 2);
      expect(result.count).toBe(149);
      expect(result.percent).toBe(149/297);
    });

    it('should work for large grids', () => {
      const result = gridDensity.findPercentFull(1000000,1000000,2);
      expect(result.count).toBe(500000000000);
      expect(result.percent).toBe(0.5);
    });
  });

  describe('Test cases for spacing 3', () => {
    it('should work for 1 x 1', () => {
      const result = gridDensity.findPercentFull(1, 1, 3);
      expect(result.count).toBe(1);
      expect(result.percent).toBe(1);
    });

    it('should work for 2 x 2', () => {
      const result = gridDensity.findPercentFull(2, 2, 3);
      expect(result.count).toBe(1);
      expect(result.percent).toBe(0.25);
    });

    it('should work for 5 x 5', () => {
      const result = gridDensity.findPercentFull(5, 5, 3);
      expect(result.count).toBe(5);
      expect(result.percent).toBe(0.20);
    });

    it('should work for 100 x 100', () => {
      const result = gridDensity.findPercentFull(100, 100, 3);
      expect(result.count).toBe(2000);
      expect(result.percent).toBe(0.2);
    });

    it('should work for 1 x 100', () => {
      const result = gridDensity.findPercentFull(1, 100, 3);
      expect(result.count).toBe(34);
      expect(result.percent).toBe(0.34);
    });

    it('should work for 100 x 1', () => {
      const result = gridDensity.findPercentFull(100, 1, 2);
      expect(result.count).toBe(50);
      expect(result.percent).toBe(0.5);
    });

    it('should work for 99 x 3', () => {
      const result = gridDensity.findPercentFull(99, 3, 3);
      expect(result.count).toBe(66);
      expect(result.percent).toBe(66/297);
    });

    it('should work for 3 x 99', () => {
      const result = gridDensity.findPercentFull(3, 99, 3);
      expect(result.count).toBe(66);
      expect(result.percent).toBe(66/297);
    });
    //
    it('should work for large grids', () => {
      const result = gridDensity.findPercentFull(1000000,1000000,3);
      expect(result.count).toBe(200000000000);
      expect(result.percent).toBe(0.2);
    });
  });

  describe('Test cases for spacing 4', () => {
    it('should work for 1 x 1', () => {
      const result = gridDensity.findPercentFull(1, 1, 4);
      expect(result.count).toBe(1);
      expect(result.percent).toBe(1);
    });

    it('should work for 2 x 2', () => {
      const result = gridDensity.findPercentFull(2, 2, 4);
      expect(result.count).toBe(1);
      expect(result.percent).toBe(0.25);
    });

    it('should work for 5 x 5', () => {
      const result = gridDensity.findPercentFull(5, 5, 4);
      expect(result.count).toBe(5);
      expect(result.percent).toBe(0.20);
    });

    it('should work for 100 x 100', () => {
      const result = gridDensity.findPercentFull(100, 100, 4);
      expect(result.count).toBe(1250);
      expect(result.percent).toBe(0.125);
    });

    it('should work for 1 x 100', () => {
      const result = gridDensity.findPercentFull(1, 100, 4);
      expect(result.count).toBe(25);
      expect(result.percent).toBe(0.25);
    });

    it('should work for 100 x 1', () => {
      const result = gridDensity.findPercentFull(100, 1, 4);
      expect(result.count).toBe(25);
      expect(result.percent).toBe(0.25);
    });

    it('should work for 99 x 3', () => {
      const result = gridDensity.findPercentFull(99, 3, 4);
      expect(result.count).toBe(50);
      expect(result.percent).toBe(50/297);
    });

    it('should work for 3 x 99', () => {
      const result = gridDensity.findPercentFull(3, 99, 4);
      expect(result.count).toBe(50);
      expect(result.percent).toBe(50/297);
    });
    //
    it('should work for large grids', () => {
      const result = gridDensity.findPercentFull(1000000, 1000000, 4);
      expect(result.count).toBe(125000000000);
      expect(result.percent).toBe(0.125);
    });
  });

});
