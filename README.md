# AI-Powered API Testing Agent

## Overview
This project is an **AI-powered API testing agent** designed to automate API testing with **test case generation, request execution, AI-powered assertions, and adaptive learning**.

## Features
✅ **Test Case Generation** – Automatically generate test cases for API endpoints.  
✅ **Request Execution** – Send API requests and capture responses.  
✅ **AI-Powered Assertions** – Validate API responses using LangChain & OpenAI.  
✅ **Adaptive Learning** – Improve assertions based on past test results.  
✅ **Multi-Framework Support** – Compatible with **Pytest** and **Rest Assured**.  

## Tech Stack
- **Backend:** Express.js (Node.js)
- **AI Component:** LangChain, OpenAI
- **Testing Frameworks:** Pytest, Rest Assured

## Installation
### 1️⃣ Clone the repository:
```sh
git clone https://github.com/sarvesh371/api-automation-ai-agent.git
cd api-automation-ai-agent
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Setup environment variables:
Create a **.env** file and add your OpenAI API key:
```sh
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

### 4️⃣ Run the server:
```sh
npm run dev
```

## Usage
### 🔹 Execute an API Test
Send a POST request to `/api/execute-test` with the following body:
```json
{
  "method": "GET",
  "url": "https://jsonplaceholder.typicode.com/todos/1",
  "headers": {},
  "body": {},
  "expectedResponse": {
    "userId": "integer",
    "id": "integer",
    "title": "string",
    "completed": "boolean"
  }
}
```

### 🔹 Response Example:
```json
{
  "status": 200,
  "data": {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  "aiFeedback": "The API response matches the expected structure."
}
```

## Roadmap
🚀 **Phase 1**: AI-powered assertions (✅ Completed)  
🚀 **Phase 2**: Adaptive learning (🔄 In progress)  
🚀 **Phase 3**: Automated test case generation (🔜 Upcoming)  

## Contributing
1. Fork the repo.
2. Create a new branch (`feature-name`).
3. Commit changes.
4. Open a pull request.

## License
MIT License.

## Contact
👤 **Sarvesh Singh**  
📂 GitHub: [sarvesh371](https://github.com/sarvesh371)
