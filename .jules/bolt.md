## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.

## 2026-10-26 - Optimize grid array initialization with Typed Arrays
**Learning:** Initializing large multidimensional grids using `new Array(size).fill(0)` is significantly slower and consumes more memory than using Typed Arrays like `Uint8Array` for simple numerical data. Typed Arrays drastically lower memory footprint and instantiation time.
**Action:** Use Typed Arrays like `Uint8Array` instead of `new Array(size).fill(0)` for large, simple numerical grids to optimize performance and memory usage.
