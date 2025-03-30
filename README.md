This is a simple RESTful API that calculates the Magic Math function:

magic_math(0) = 0

magic_math(1) = 1

magic_math(N) = magic_math(N−1) + magic_math(N−2) + N

The API is built using Node.js and Express.js with caching to optimize performance.


🚀 Features
✅ RESTful API to compute Magic Math
✅ Optimized with memoization for efficiency
✅ Handles invalid input gracefully
✅ CORS enabled for cross-origin requests



🛠 Tech Stack
Backend: Node.js, Express.js

Caching: In-memory caching (object-based)

Environment Variables: dotenv

Version Control: Git