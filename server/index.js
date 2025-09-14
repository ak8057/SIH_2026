const express = require("express"); // Import the Express module
const app = express(); // Create an Express application instance
const PORT = 3000; // Define the port for the server

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send(
    "<h1>Hello from Express!</h1><p>This is your simple Express server.</p>"
  );
});

// Make the server listen for requests on the specified port
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
