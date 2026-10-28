## 2024-05-14 - Optimize array iteration and instantiation
**Learning:** Chaining `.fill().map()` and utilizing nested `forEach` array loops introduces measurable overhead due to callback execution. A standard `for` loop iteration and array pre-allocation perform significantly faster for multi-dimensional grid array initialization and summation.
**Action:** Default to simple `for` loops and array pre-allocation for intensive grid iterations, avoiding chained or callback-based map/forEach iterations.

## 2026-10-21 - Optimize grid allocation with Typed Arrays
**Learning:** Instantiating large multi-dimensional matrices with `new Array(size).fill(0)` has significant overhead. Typed arrays like `Uint8Array` natively initialize with zeros and are much faster to allocate while drastically lowering the memory footprint.
**Action:** Default to `Uint8Array` (or other appropriate Typed Arrays) over `Array.fill()` for large, simple numerical grids.

## 2026-10-28 - Uint8Array optimization rejected due to public API change
**Learning:** Changing standard Arrays to Typed Arrays (`Uint8Array`) in exported functions (like `createGrid`) changes the object type (`Array.isArray`), available methods, serialization behavior, and assignment behavior. This is an API-breaking change, even if the internal algorithm only uses 0/1.
**Action:** Do not optimize exported generic arrays to Typed Arrays without explicitly verifying if it breaks expected public API behaviors or standard array methods.
