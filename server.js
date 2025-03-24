import express from "express";

// Initializing an express application
const app = express();

// Define PORT to run our server
const PORT = 3000;

// Send "Hello express server" to client requesting on "/" path
app.get("/", (req, res) => {
  res.send("Hello express server");
});

// Send a json object { data: "Hello express server" } to client requesting on "/json" path
app.get("/json", (req, res) => {
  res.json({ data: "Hello express server" });
});

// App will start listening for incoming requests on the specified PORT.
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running successfully at http://localhost:${PORT}`);
});
