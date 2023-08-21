/* const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const books = [
      { name: "Alximik", author: "Paolo Koelyo", pages: 150 },
      { name: "Shaytanat", author: "Tohir Malik", pages: 305 },
      { name: "Rich dad and poor dad", author: "Robert Kiyosaki", pages: 268 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`)); */

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const books = [
      { name: "AAA", author: "aaa", pages: 150 },
      { name: "BBB", author: "bbb", pages: 200 },
      { name: "CCC", author: "ccc", pages: 300 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
