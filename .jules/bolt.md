## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.
## 2026-10-25 - Optimize grid allocation with Uint8Array
**Learning:** Using `new Array(size).fill(0)` for large grid allocations incurs significant overhead and memory usage. Replacing this with Typed Arrays like `Uint8Array(size)` drastically lowers memory footprint and improves instantiation time for simple numerical grids.
**Action:** Use Typed Arrays like `Uint8Array` instead of `new Array(size).fill(0)` for large, simple numerical grids to optimize performance and memory footprint.
## 2026-10-28 - Uint8Array optimization rejected due to API compatibility
**Learning:** Changing standard Arrays to Typed Arrays (like `Uint8Array`) in exported APIs can break compatibility because it changes `Array.isArray`, available array methods, serialization, and numeric assignment behavior.
**Action:** Avoid changing the returned data types (e.g., from Array to Typed Array) in exported functions unless explicitly permitted, to preserve API compatibility.
