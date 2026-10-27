## 2023-10-27 - [Memory Exhaustion DoS in Array Allocation]
**Vulnerability:** The package lacks input validation and size bounding on array dimensions in `createGrid(width, height)`. Calling `findPercentFull` with excessively large arbitrary values (or strings that are cast/cause issues) forces enormous allocations (`Array(width).fill(1).map(...)`) leading to node process heap exhaustion (OOM crashes) or freezing.
**Learning:** Functions designed to generate complex permutations or huge data structures on the fly must have safety circuit-breakers for size variables.
**Prevention:** Always validate that inputs for array allocations are integers within acceptable bounds and add fixed limits before the memory-allocation function executes.

## 2023-10-27 - [Array Dimension Constraint Bypass via Zeros]
**Vulnerability:** While an array size limit based on `width * height > MAX_LIMIT` was present to prevent memory exhaustion, it could be bypassed. If an attacker could supply `width = 1000000000` and `height = 0`, the product is `0` which is `< MAX_LIMIT`. However, the code still allocates `new Array(1000000000)`, causing a fatal V8 memory exhaustion (DoS).
**Learning:** Checking the product of dimensions is not sufficient for memory allocation limits because zeros or NaNs can bypass the product check while still triggering massive initial array allocations.
**Prevention:** Constrain both the individual dimensions (e.g., `width > MAX_LIMIT || height > MAX_LIMIT`) AND the product, and explicitly check for valid numeric types before allocation.
## 2026-10-22 - Recursive Stack Overflow Denial of Service
**Vulnerability:** Deeply recursive grid traversal algorithms ("Maximum call stack size exceeded") could be triggered by specific large grid inputs before triggering out-of-memory protections. This serves as a DoS vulnerability.
**Learning:** Even if an input payload respects physical size/memory constraints (like circuit breakers on maximum area allocation), mathematical processing of that payload must also respect CPU execution context limits, such as maximum stack size limits for recursive logic.
**Prevention:** For mathematical or graphical depth-first searches over potentially large data sets, use an iterative implementation with explicit heap-allocated structures (like an array stack) rather than language-level recursion to prevent call stack limits from becoming a DoS attack vector.

## 2026-10-23 - [RangeError DoS in Array Allocation]
**Vulnerability:** Weak type checking on dimensions (`typeof width !== 'number'`) allowed negative numbers and floating point inputs to reach JavaScript's `new Array(size)` instantiation. This triggered unhandled `RangeError: Invalid array length` exceptions that crashed the Node.js application, resulting in a Denial of Service (DoS).
**Learning:** Checking that a variable is a "number" is insufficient if it will be used for array lengths, which strictly require positive integers.
**Prevention:** Always validate numeric array size inputs with strict `Number.isInteger(val) && val > 0` constraints before performing pre-allocations.

## 2026-10-27 - [Array Object Allocation Overhead DoS]
**Vulnerability:** Even when the total grid area (`width * height`) was safely constrained, an attacker could supply `width=25000000, height=1`, triggering the allocation of 25,000,000 array objects. This excessive V8 object allocation overhead caused Out-Of-Memory (OOM) crashes in Node.js (DoS).
**Learning:** Checking the product of dimensions is not sufficient for memory allocation limits; the absolute number of objects instantiated (like the outer dimension in a 2D array) must also be independently constrained because object metadata has a high memory cost.
**Prevention:** Enforce explicit upper limits on the absolute number of individual array objects allocated (e.g., `width > 5000000`), independently from the total area.
