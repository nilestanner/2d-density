# 2d density

An algorithm than can be used to find the maximum number of cells that can fit into a grid with a predefined spacing. In other words two-dimensional density.

## Build Status
[![CircleCI](https://circleci.com/gh/nilestanner/2d-density/tree/master.svg?style=svg)](https://circleci.com/gh/nilestanner/2d-density/tree/master)

## Install

```
npm install 2d-density
```

## Usage

```
const twoDDensity = require('2d-density');

const gridWidth = 100;
const gridHeight = 100;
const spacing = 3;

const result = twoDDensity.findPercentFull(gridWidth, gridHeight, spacing);
```

Width, height and spacing should all be whole numbers.

Spacing does not count diagonals. Thus a cell that is diagonally adjacent is really spaced 2 cells away.  

## Sample output

```
{
  count: 2000,
  percent: 0.2
}
```

## Visual example

Say you have a grid with a width of 5 and a height of 4 and you want to fill cells that are 2 away from each other. You might end up with something like this:

| x |   | x |   | x |
|---|---|---|---|---|
|   | x |   | x |   |
| x |   | x |   | x |
|   | x |   | x |   |

The count would be 10 and percentage full would be 0.5. This would be pretty easy to calculate for spacing of 2 but things get more complex when using spacings with odd numbers.

For example a 5 by 5 grid with spacing of 3.

| x |   |   |   |   |
|---|---|---|---|---|
|   |   |   | x |   |
|   | x |   |   |   |
|   |   |   |   | x |
|   |   | x |   |   |

The count is only 5 and the percentage would be 0.2.
