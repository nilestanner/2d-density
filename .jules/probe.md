## 2026-10-20 - Testing Recursive Grid Boundaries
**Learning:** Testing recursive grid logic boundaries (e.g., `insertIntoGrid` bounds checking) requires sufficiently large matrix sizes (e.g., 15x15 with spacing 5) to prevent early termination and ensure deep recursion paths are covered.
**Action:** Use larger grid dimensions (like 15x15) when trying to cover complex traversal algorithms that might otherwise stop too early with standard 2x2 or 5x5 test fixtures.
