## 2023-10-27 - [Memory Exhaustion DoS in Array Allocation]
**Vulnerability:** The package lacks input validation and size bounding on array dimensions in `createGrid(width, height)`. Calling `findPercentFull` with excessively large arbitrary values (or strings that are cast/cause issues) forces enormous allocations (`Array(width).fill(1).map(...)`) leading to node process heap exhaustion (OOM crashes) or freezing.
**Learning:** Functions designed to generate complex permutations or huge data structures on the fly must have safety circuit-breakers for size variables.
**Prevention:** Always validate that inputs for array allocations are integers within acceptable bounds and add fixed limits before the memory-allocation function executes.

## 2023-10-27 - [Array Dimension Constraint Bypass via Zeros]
**Vulnerability:** While an array size limit based on `width * height > MAX_LIMIT` was present to prevent memory exhaustion, it could be bypassed. If an attacker could supply `width = 1000000000` and `height = 0`, the product is `0` which is `< MAX_LIMIT`. However, the code still allocates `new Array(1000000000)`, causing a fatal V8 memory exhaustion (DoS).
**Learning:** Checking the product of dimensions is not sufficient for memory allocation limits because zeros or NaNs can bypass the product check while still triggering massive initial array allocations.
**Prevention:** Constrain both the individual dimensions (e.g., `width > MAX_LIMIT || height > MAX_LIMIT`) AND the product, and explicitly check for valid numeric types before allocation.
