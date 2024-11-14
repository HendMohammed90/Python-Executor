# Python Executor

This project is a Python code execution API built with Node.js and Express, designed to be used with a front-end application built in React. It allows users to send Python code snippets to the server, where they will be executed in a sandboxed environment, and the output (or errors) will be returned to the client. This project includes a simple server setup to handle cross-origin requests (CORS) and manage persistent sessions for running code interactively.

## Features
- Code Execution: Execute Python code from client requests and return ```stdout``` or ```stderr``` based on the result.
- Session Management: Uses unique session IDs to allow clients to execute additional code in the same context.
- Timeout Handling: Limits execution time to prevent the server from hanging due to long-running code.
- CORS Support: Configured with CORS to allow cross-origin requests, making it easier to integrate with front-end applications.

### Prerequisites
- Node.js and npm installed on your machine.
### Project Structure
src/
├── components/
│   ├── CodeInput.js
│   ├── OutputDisplay.js
│   ├── Header.js
├── services/
│   ├── api.js
├── App.js
├── App.css
├── server.js


- ```server.js``` - Main server file where the Express server and the ```/execute``` API endpoint are defined.
- ```App.js``` - Main Component folder.



## Setup Instructions
1. Install Dependencies:
Clone the project and navigate into the project directory. Then install the dependencies:

```bash
npm install
```
2. Run the App:
```bash
npm run start
```
3. Run the server:
```bash
node server.js
```


## Handling CORS Errors in the server
When attempting to send requests from a front-end application to this server, you may encounter a CORS (Cross-Origin Resource Sharing) error if the front-end runs on a different origin. To handle this, the server includes the CORS middleware, allowing cross-origin requests.

```javascript
const cors = require('cors');
app.use(cors());
```
This line enables CORS, which allows the server to accept requests from different origins, making it easier to connect to front-end applications running on different ports or domains.

### Notes: 
- Security: This setup is designed for local or controlled environments, as executing arbitrary code presents security risks. For production use, additional sandboxing and security measures should be implemented.
- Error Handling: The server captures syntax and runtime errors in Python, which are sent back to the client through ```stderr```.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
