const http = require("http");

const queue = [];
let count = 0;

const server = http.createServer((req, res) => {
  const seqId = ++count;
  console.log(`${seqId} 进入队列`);
  queue.push(seqId);
  setTimeout(() => {
    const req = queue.unshift();
    console.log(`${req} 处理完成`);
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`响应内容 ${Math.random()}`);
  }, 1000);
});

server.listen(() => {
  console.log(server.address());

  server.close();
});
