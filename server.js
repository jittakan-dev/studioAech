// Import necessary modules
import { createServer } from "http";
import { readFile } from "fs";
import { extname as _extname } from "path";

// Create a server
const server = createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  } 

  const extname = _extname(filePath);
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "application/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".html":
      contentType = "text/html";
      break;
    case ".png":
      contentType = "image/png";
      break;
    default:
      contentType = "application/octet-stream"; // default to binary data
      break;
  }

  // Read and serve the requested file
  readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File not found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "binary"); // ensure binary encoding for images
    }
  });
});

// Set the port for the server to listen on
const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
