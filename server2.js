const http = require("http");
const url = require("url");
const productData = require("./Models/product");
const userData = require("./Models/user");
const HOSTNAME = "localhost";
const PORT = 8000;

const server = http.createServer((request, response) => {
  const products = JSON.stringify(productData);
  const users = JSON.stringify(userData);
  response.setHeader("Content-Type", "application/json");

  const { query, pathname } = url.parse(request.url, true);

  if (pathname === "/") {
    response.statusCode = 200;
    response.end("Welcome to our API");
  } else if (pathname === "/products") {
    response.statusCode = 200;
    if (query) {
      response.end(JSON.stringify(productData[query.id]));
    } else {
      response.end(products);
    }
  } else if (pathname === "/users") {
    response.statusCode = 200;
    response.end(users);
  } else {
    response.statusCode = 404;
    response.end("😂404 Route Not Found 😂");
  }
});

server.listen(PORT, HOSTNAME, () => console.log(`running on port ${PORT}`));
