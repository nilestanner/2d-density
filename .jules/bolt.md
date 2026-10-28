## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.

## 2026-10-28 - Uint8Array optimization rejected due to public API change
**Learning:** While replacing `new Array(size).fill(0)` with `new Uint8Array(size)` is a massive performance win for internal processing, it changes the type and behavior of the returned object (e.g. `Array.isArray`, serialization, available array methods). If the function (`createGrid`) is part of the public exported API, this constitutes a breaking change and will be rejected.
**Action:** Before applying type-changing optimizations like Typed Arrays, verify if the affected object is exposed externally via exports. If it is, consider either limiting the optimization to strictly internal functions or explicitly seeking approval for the breaking change.
