const http = require("http");
const productData = require("./Models/product");
const userData = require("./Models/user");
const HOSTNAME = "localhost";
const PORT = 8000;

const server = http.createServer((request, response) => {
  const products = JSON.stringify(productData);
  const users = JSON.stringify(userData);
  response.setHeader("Content-Type", "application/json");
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.end("Welcome to our API");
      break;
    case "/products":
      response.statusCode = 200;
      response.end(products);
      break;
    case "/users":
      response.statusCode = 200;
      response.end(users);
      break;

    default:
      response.statusCode = 404;
      response.end("😂404 Route Not Found 😂");
      break;
  }
});

server.listen(PORT, HOSTNAME, () => console.log(`running on port ${PORT}`));
