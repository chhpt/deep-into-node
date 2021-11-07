const http = require("http");
const hostname = "127.0.0.1";
const port = 4000;
const server = http.createServer((req, res) => {
  testEventLoop();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on("close", () => {
  console.log("server close");
});

function testEventLoop() {
  console.log("=============");

  // Timer
  setTimeout(() => {
    console.log("Timer phase");
    process.nextTick(() => {
      console.log("Timer phase - nextTick");
    });
    Promise.resolve().then(() => {
      console.log("Timer phase - promise");
    });
  });

  // Check
  setImmediate(() => {
    console.log("Check phase");
    process.nextTick(() => {
      console.log("Check phase - nextTick");
    });
    Promise.resolve().then(() => {
      console.log("Check phase - promise");
    });
  });

  // Poll
  console.log("Poll phase");

  process.nextTick(() => {
    console.log("Poll phase - nextTick");
  });

  Promise.resolve().then(() => {
    console.log("Poll phase - promise");
  });

  server.close();
}
