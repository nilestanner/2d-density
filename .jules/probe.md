## 2024-05-15 - Uncovered Recursion Branch in 2D-Density
**Learning:** Branch 109 of the top-left recursion check in `insertIntoGrid` requires specific intermediate rectangle dimensions (like 10x6 with spacing 3) to trigger, as normal square and large grids don't always naturally back-propagate upward-left.
**Action:** Always check intermediate non-square bounding boxes when testing depth-first 2D grid walk logic, as pure symmetrical structures hide edge cases.

## 2026-10-20 - Testing Recursive Grid Boundaries
**Learning:** Testing recursive grid logic boundaries (e.g., `insertIntoGrid` bounds checking) requires sufficiently large matrix sizes (e.g., 15x15 with spacing 5) to prevent early termination and ensure deep recursion paths are covered.
**Action:** Use larger grid dimensions (like 15x15) when trying to cover complex traversal algorithms that might otherwise stop too early with standard 2x2 or 5x5 test fixtures.
## 2024-05-18 - Gap in short sub-square calculations and remainder bounds
**Learning:** Found an untested boundary condition inside `index.js` where `height < squareSize`. The calculation of `findShortSubSquare` and the remainder blocks `remainerBlockCount` (conditions 0, 1, 2) had no specific test covering them. Although `npx nyc` reported 100% branch/statement coverage (since those lines were run *some* times without failing on those specific boundary logic limits), mutation testing revealed that modifying the mathematical logic inside `findShortSubSquare` or the remainder condition bound (`>` instead of `>=`) did not cause any existing tests to fail. This is a common situation where tests hit code paths but do not assert the correctness of specific computations.
**Action:** Use table-driven tests for calculation functions, and when verifying mathematical block logic, manually calculate expected outputs to cover boundary logic that code-coverage alone does not catch.

## 2024-10-24 - Identifying untested math and boundary limits despite 100% coverage
**Learning:** Found that `npx nyc` can report 100% statement and branch coverage even if intermediate math values (`remainerBlockCount`) or bounds checks (`<= 0`) are not explicitly asserted in the tests because the logic execution doesn't throw and seamlessly merges with broader test expectations. Using manual mutation testing (swapping `<` to `>`, changing mathematical increments) is essential to find specific un-asserted logic paths in dense mathematical modules.
**Action:** Do not trust 100% NYC coverage as proof of correctness in algorithms with extensive math calculations. Actively use mutation testing techniques to probe which boundary conditions actually fail existing tests, and explicitly add focused, assertion-heavy tests for gaps uncovered.
