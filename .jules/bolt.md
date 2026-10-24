## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.

## 2026-10-24 - Use Uint8Array for grid allocation
**Learning:** Using `new Array(size).fill(0)` for multi-dimensional grid arrays creates high memory overhead and slows down instantiation, especially for large sizes. Typed Arrays like `Uint8Array` initialize to zero automatically and are significantly faster and lighter.
**Action:** When building large numeric arrays that only need to hold simple numbers like 0 or 1, use Typed Arrays like `Uint8Array` instead of standard `Array` with `.fill()`.
