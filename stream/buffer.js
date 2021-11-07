const fs = require("fs");
// 转码
function base64Encode(string) {
  return Buffer.from(string).toString("base64");
}

function base64Decode(string) {
  return Buffer.from(string, "base64").toString();
}

const base64 = base64Encode("xxx");
console.log(base64, base64Decode(base64));

function imgToDataUri() {
  const res = fs.readFileSync("./stream/test.jpg").toString("base64");
  return `data:${res}`;
  console.log(res);
}

imgToDataUri();
