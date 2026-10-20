## 2024-05-15 - Uncovered Recursion Branch in 2D-Density
**Learning:** Branch 109 of the top-left recursion check in `insertIntoGrid` requires specific intermediate rectangle dimensions (like 10x6 with spacing 3) to trigger, as normal square and large grids don't always naturally back-propagate upward-left.
**Action:** Always check intermediate non-square bounding boxes when testing depth-first 2D grid walk logic, as pure symmetrical structures hide edge cases.

## 2024-05-18 - Recursive Bounds Checking Test Requirements
**Learning:** Testing recursive grid logic boundaries in `2d-density` (e.g., `insertIntoGrid` bounds checking) requires sufficiently large matrix sizes (e.g., 15x15 with spacing 5) to prevent early termination and ensure all branching paths (like reverse upward traversals) are executed.
**Action:** When adding tests for grid calculation logic involving recursion, prioritize adding at least one test case with matrix sizes substantially larger than the spacing interval to ensure complete traversal and boundary validation coverage.
