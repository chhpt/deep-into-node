const { spawn } = require("child_process");

// 启动一个 HTTP Server
const cp = spawn("node", ["./process/http_server.js"], {
  // 设置独立的 IO
  stdio: 'ignore',
  // 
  detached: true
});

// 进程 id
console.log(cp.pid);

cp.unref()
