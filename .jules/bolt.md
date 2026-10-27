## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.

## 2026-10-27 - Typed Arrays for Large Numerical Grids
**Learning:** Initializing large 2D grids with `new Array(size).fill(0)` introduces significant memory overhead and slow instantiation time due to V8's array object allocation.
**Action:** Use Typed Arrays like `Uint8Array` when pre-allocating large simple numerical grids to drastically lower memory footprint and instantiation time.
