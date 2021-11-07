const moduleA = require("./a");
const moduleB = require("./b");

console.log(moduleA);
console.log(moduleB);

// setInterval(() => {
//   console.log(moduleA);
// }, 1000);

// 修改值
setTimeout(() => {
  moduleA.obj.b = 3;
}, 2000);
