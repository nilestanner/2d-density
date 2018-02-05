
const findPercentFull = (width, height, spacing) => {
  if (spacing === 1) {
    return 1;
  }
  if (spacing === 2) {
    return 2;
  }
  let grid = Array(width).fill(1).map((i) => {
    return Array(height).fill(1).map((j) => {
      return 0;
    });
  });
  const config = {
    width,
    height,
    spacing: Math.floor(spacing/2),
    altSpacing: Math.floor(spacing/2) + (spacing % 2)
  };
  insertIntoGrid(0, 0, grid, config);
  let count = 0;
  grid.forEach((row) => {
    row.forEach((cell) => {
      if (cell) {
        count ++;
      }
    });
  });
  return count / (width * height);
}

const insertIntoGrid = (posx, posy, grid, config) => {
  grid[posx][posy] = 1;
  // Top left
  const topLeftposx = posx - (config.spacing);
  const topLeftposy = posy - (config.altSpacing);
  if (topLeftposx >= 0 && topLeftposy >=0 && !grid[topLeftposx][topLeftposy]){
    insertIntoGrid(topLeftposx, topLeftposy, grid, config)
  }
  // Top Right
  const topRightposx = posx + (config.altSpacing);
  const topRightposy = posy - (config.spacing);
  if (topRightposx < config.width && topRightposy >=0 && !grid[topRightposx][topRightposy]){
    insertIntoGrid(topRightposx, topRightposy, grid, config)
  }
  // Bottom Left
  const bottomLeftposx = posx - (config.altSpacing);
  const bottomLeftposy = posy + (config.spacing);
  if (bottomLeftposx >= 0 && bottomLeftposy < config.height && !grid[bottomLeftposx][bottomLeftposy]){
    insertIntoGrid(bottomLeftposx, bottomLeftposy, grid, config)
  }
  // Bottom Right
  const bottomRightposx = posx + (config.spacing);
  const bottomRightposy = posy + (config.altSpacing);
  if (bottomRightposx < config.width && bottomRightposy < config.height && !grid[bottomRightposx][bottomRightposy]){
    insertIntoGrid(bottomRightposx, bottomRightposy, grid, config)
  }
}


module.exports = {
  findPercentFull
}
