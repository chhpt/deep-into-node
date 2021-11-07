const moduleA = require("./a");
console.log("load module b");

setInterval(() => {
  console.log(moduleA.obj.b);
}, 2000);

module.exports = {
  module: "b",
  moduleA,
};
