const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello world");
  res.end();
});

server.listen(4000, () => {
  console.log("server listen on port 4000");
});
