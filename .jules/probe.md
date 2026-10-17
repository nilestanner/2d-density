## 2024-05-15 - Uncovered Recursion Branch in 2D-Density
**Learning:** Branch 109 of the top-left recursion check in `insertIntoGrid` requires specific intermediate rectangle dimensions (like 10x6 with spacing 3) to trigger, as normal square and large grids don't always naturally back-propagate upward-left.
**Action:** Always check intermediate non-square bounding boxes when testing depth-first 2D grid walk logic, as pure symmetrical structures hide edge cases.
