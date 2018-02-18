
const findPercentFull = (width, height, spacing) => {
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

const insertIntoGrid = (posx, posy, grid, config) => {
  grid[posx][posy] = 1;
  // Top left
  const topLeftposx = posx - (config.insertHop);
  const topLeftposy = posy - (config.altInsertHop);
  if (topLeftposx >= 0 && topLeftposy >=0 && !grid[topLeftposx][topLeftposy]){
    insertIntoGrid(topLeftposx, topLeftposy, grid, config);
  }
  // Top Right
  const topRightposx = posx + (config.altInsertHop);
  const topRightposy = posy - (config.insertHop);
  if (topRightposx < config.width && topRightposy >=0 && !grid[topRightposx][topRightposy]){
    insertIntoGrid(topRightposx, topRightposy, grid, config);
  }
  // Bottom Left
  const bottomLeftposx = posx - (config.altInsertHop);
  const bottomLeftposy = posy + (config.insertHop);
  if (bottomLeftposx >= 0 && bottomLeftposy < config.height && !grid[bottomLeftposx][bottomLeftposy]){
    insertIntoGrid(bottomLeftposx, bottomLeftposy, grid, config);
  }
  // Bottom Right
  const bottomRightposx = posx + (config.insertHop);
  const bottomRightposy = posy + (config.altInsertHop);
  if (bottomRightposx < config.width && bottomRightposy < config.height && !grid[bottomRightposx][bottomRightposy]){
    insertIntoGrid(bottomRightposx, bottomRightposy, grid, config);
  }
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
  let count  = 0;
  grid.forEach((row) => {
    row.forEach((cell) => {
      if (cell) {
        count ++;
      }
    });
  });
  return count;
};

const createGrid = (width, height) => {
  return Array(width).fill(1).map((i) => {
    return Array(height).fill(1).map((j) => {
      return 0;
    });
  });
};

module.exports = {
  findPercentFull
};
