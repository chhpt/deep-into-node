const fs = require("fs");
const { exec, execFile } = require("child_process");

// const child = execFile("node", ["--version"], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

// exec("node --version", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("---");
//   stdout && console.log(stdout);
//   stderr && console.log(stderr);
// });

exec("cat ./v8.json", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
  }
  console.log("---");
  stdout && console.log(stdout);
  stderr && console.log(stderr);
});
