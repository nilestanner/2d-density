## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.
## 2026-10-22 - Typed Arrays for simple grids
**Learning:** Initializing large binary or numerical arrays with `new Array(size).fill(0)` consumes significant memory (e.g. 191MB vs 1MB for a 5000x5000 grid) and CPU time compared to `new Uint8Array(size)`. The massive reduction is due to standard JS arrays dealing with generic elements instead of raw continuous bytes.
**Action:** Always prefer Typed Arrays (like `Uint8Array`) over standard JS Arrays when allocating multidimensional buffers, numerical grids, or binary state maps.
