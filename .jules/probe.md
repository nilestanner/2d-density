## 2024-05-15 - Uncovered Recursion Branch in 2D-Density
**Learning:** Branch 109 of the top-left recursion check in `insertIntoGrid` requires specific intermediate rectangle dimensions (like 10x6 with spacing 3) to trigger, as normal square and large grids don't always naturally back-propagate upward-left.
**Action:** Always check intermediate non-square bounding boxes when testing depth-first 2D grid walk logic, as pure symmetrical structures hide edge cases.

## 2026-10-20 - Testing Recursive Grid Boundaries
**Learning:** Testing recursive grid logic boundaries (e.g., `insertIntoGrid` bounds checking) requires sufficiently large matrix sizes (e.g., 15x15 with spacing 5) to prevent early termination and ensure deep recursion paths are covered.
**Action:** Use larger grid dimensions (like 15x15) when trying to cover complex traversal algorithms that might otherwise stop too early with standard 2x2 or 5x5 test fixtures.
