const http = require("http");
const cluster = require("cluster");

console.log(cluster.isMaster);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("响应内容 1");
});

server.listen(3000, () => {
  console.log("Server 1 Listening");
});

console.log(server);

// const server2 = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("响应内容 2");
// });

// setTimeout(() => {
//   server2.listen(server, () => {
//     console.log("Server 2 Listening");
//   });
// }, 1000);
