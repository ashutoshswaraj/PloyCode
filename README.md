# Magic Math API

This is a simple RESTful API that calculates the Magic Math function:

```
magic_math(0) = 0
magic_math(1) = 1
magic_math(N) = magic_math(N-1) + magic_math(N-2) + N
```

The API is built using Node.js and Express.js with caching to optimize performance.

## 🚀 Features
✅ RESTful API to compute Magic Math
✅ Optimized with memoization for efficiency
✅ Handles invalid input gracefully
✅ CORS enabled for cross-origin requests

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js
- **Caching:** In-memory caching (object-based)
- **Environment Variables:** dotenv
- **Version Control:** Git

## 📌 API Endpoints

### 1. Get Magic Math Result
#### **GET** `/:n`

- **Request:**
  ```sh
  curl -X GET "https://ploy-code-21tk3y4kl-ashutoshswarajs-projects.vercel.app/9"
  ```
- **Response:**
  ```json
  { "result": 49 }
  ```

## 🚀 Run Locally

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/magic-math-api.git
cd magic-math-api
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Start the Server**
```sh
npm run dev
```
The server will run on `http://localhost:5000`

### 4️⃣ **Test the API**
```sh
curl -X GET "http://127.0.0.1:5000/9"
```

## 🌍 Deploy on Vercel

### 1️⃣ **Install Vercel CLI**
```sh
npm install -g vercel
```

### 2️⃣ **Deploy the API**
```sh
vercel
```
Follow the prompts and your API will be deployed!



## 📝 Environment Variables (Optional)

If needed, create a `.env` file and set variables:
```
PORT=5000
```

Happy Coding! 🚀

