
const findPercentFull = (width, height, spacing) => {
  if (!Number.isInteger(width) || width <= 0 ||
      !Number.isInteger(height) || height <= 0 ||
      !Number.isInteger(spacing) || spacing <= 0) {
    throw new Error('width, height, and spacing must be positive integers');
  }

  if (spacing === 1) {
    return {
      count: width * height,
      percent: 1
    };
  }
  if (spacing === 2) {
    const count = Math.ceil((width * height)/2);
    return {
      count: count,
      percent: count / (width * height)
    };
  }
  // rearrange
  if (width < height) {
    const tempWidth = width;
    width = height;
    height = tempWidth;
  }
  const squareSize = findSubSquare(spacing);
  const insertHop = Math.floor(spacing/2);
  const altInsertHop = Math.floor(spacing/2) + (spacing % 2);
  let count = 0;

  if (width > squareSize * 2 && height > squareSize * 2) {
    // Calculate large grid
    const sqCountWidth = Math.floor(width/squareSize) - 1;
    const sqCountHeight = Math.floor(height/squareSize) - 1;
    const numberOfSquares = sqCountWidth * sqCountHeight;

    // all squares
    count += (processGrid({
      insertHop,
      altInsertHop,
      width: squareSize,
      height: squareSize
    }) * numberOfSquares);

    // width
    count += processGrid({
      insertHop,
      altInsertHop,
      width: width - (squareSize * sqCountWidth),
      height: squareSize
    }) * sqCountHeight;

    // height
    count += processGrid({
      insertHop,
      altInsertHop,
      width: squareSize,
      height: height - (squareSize * sqCountHeight)
    }) * sqCountWidth;

    // corner
    count += processGrid({
      insertHop,
      altInsertHop,
      width: width - (squareSize * sqCountWidth),
      height: height - (squareSize * sqCountHeight)
    });
  } else if (height === 1) {
    // Grid is completely linear
    count = Math.ceil(width/spacing);
  } else if (height < squareSize) {
    // Grid is too short for normal algorithm
    const blockWidth = findShortSubSquare(spacing, height);
    const blockNum = Math.floor(width/blockWidth);
    let remainerBlockCount;
    if ((width % blockWidth)) {
      if (((width % blockWidth) + height) - 1 > spacing) {
        remainerBlockCount = 2;
      } else {
        remainerBlockCount = 1;
      }
    } else {
      remainerBlockCount = 0;
    }
    count = (blockNum * 2) + remainerBlockCount;
  } else {
    count = processGrid({
      insertHop,
      altInsertHop,
      width,
      height
    });
  }

  return {
    count: count,
    percent: count / (width * height)
  };
};

const processGrid = (config, type) => {
  let grid = createGrid(config.width, config.height);
  insertIntoGrid(0, 0, grid, config);
  return countGrid(grid);
};

const insertIntoGrid = (startx, starty, grid, config) => {
  const stackX = [startx];
  const stackY = [starty];
  while (stackX.length > 0) {
    const posx = stackX.pop();
    const posy = stackY.pop();
    if (grid[posx][posy]) continue;
    grid[posx][posy] = 1;

    // Top left
    const topLeftposx = posx - (config.insertHop);
    const topLeftposy = posy - (config.altInsertHop);
    if (topLeftposx >= 0 && topLeftposy >= 0 && !grid[topLeftposx][topLeftposy]) {
      stackX.push(topLeftposx);
      stackY.push(topLeftposy);
    }
    // Top Right
    const topRightposx = posx + (config.altInsertHop);
    const topRightposy = posy - (config.insertHop);
    if (topRightposx < config.width && topRightposy >= 0 && !grid[topRightposx][topRightposy]) {
      stackX.push(topRightposx);
      stackY.push(topRightposy);
    }
    // Bottom Left
    const bottomLeftposx = posx - (config.altInsertHop);
    const bottomLeftposy = posy + (config.insertHop);
    if (bottomLeftposx >= 0 && bottomLeftposy < config.height && !grid[bottomLeftposx][bottomLeftposy]) {
      stackX.push(bottomLeftposx);
      stackY.push(bottomLeftposy);
    }
    // Bottom Right
    const bottomRightposx = posx + (config.insertHop);
    const bottomRightposy = posy + (config.altInsertHop);
    if (bottomRightposx < config.width && bottomRightposy < config.height && !grid[bottomRightposx][bottomRightposy]) {
      stackX.push(bottomRightposx);
      stackY.push(bottomRightposy);
    }
  }
};

const findShortSubSquare = (spacing, height) => {
  return Math.max((spacing - height) * 2, spacing);
};

const findSubSquare = (spacing) => {
  let squareWidth;
  // if odd
  if (spacing % 2) {
    squareWidth = (spacing * (Math.floor(spacing/2))) + Math.floor(spacing/2) + 1;
  } else {
    squareWidth = spacing;
  }
  return squareWidth;
};

const countGrid = (grid) => {
  let count = 0;
  // Standard loop for better performance over grid.forEach
  for (let i = 0, len1 = grid.length; i < len1; i++) {
    const row = grid[i];
    for (let j = 0, len2 = row.length; j < len2; j++) {
      if (row[j]) {
        count++;
      }
    }
  }
  return count;
};

const createGrid = (width, height) => {
  if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
    throw new Error('Grid dimensions must be valid positive integers');
  }
  if (width > 25000000 || height > 25000000 || width * height > 25000000) {
    throw new Error('Grid size exceeds maximum allowed limit to prevent Out of Memory errors');
  }
  // Pre-allocate array and use standard loops for better performance.
  const grid = new Array(width);
  for (let i = 0; i < width; i++) {
    grid[i] = new Array(height).fill(0);
  }
  return grid;
};

module.exports = {
  findPercentFull,
  createGrid // exported for testing security bounds
};
