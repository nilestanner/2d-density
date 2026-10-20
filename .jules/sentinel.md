## 2026-10-20 - Array Allocation Bound Limitations
**Vulnerability:** Unbounded array allocations in `createGrid` allowed Out-of-Memory (OOM) Denial of Service (DoS) attacks by providing extremely large grid dimensions that crash the Node.js process.
**Learning:** Functions that dynamically allocate arrays based on external input metrics must have circuit breakers to prevent excessive memory consumption.
**Prevention:** Always implement predefined upper bounds (circuit breakers) for data structures dynamically sized based on untrusted inputs.
