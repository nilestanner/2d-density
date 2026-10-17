## 2024-05-18 - Optimized Array Operations in Grid Functions
**Learning:** Nested `forEach` loops and chained `Array(n).fill(x).map()` calls introduce significant iteration and allocation overhead compared to standard `for` loops and array pre-allocation.
**Action:** Default to standard `for` loops and `new Array(size).fill(0)` when creating or iterating over large nested data structures to improve execution speed.
