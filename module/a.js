console.log("load module a");

const random = Math.random();
console.log(random);

const obj = {
  b: 2,
};

// // 修改值
// setTimeout(() => {
//   obj.b = 3;
// }, 2000);

module.exports = {
  module: "a",
  random,
  obj,
};
