## 2023-10-27 - [Memory Exhaustion DoS in Array Allocation]
**Vulnerability:** The package lacks input validation and size bounding on array dimensions in `createGrid(width, height)`. Calling `findPercentFull` with excessively large arbitrary values (or strings that are cast/cause issues) forces enormous allocations (`Array(width).fill(1).map(...)`) leading to node process heap exhaustion (OOM crashes) or freezing.
**Learning:** Functions designed to generate complex permutations or huge data structures on the fly must have safety circuit-breakers for size variables.
**Prevention:** Always validate that inputs for array allocations are integers within acceptable bounds and add fixed limits before the memory-allocation function executes.
