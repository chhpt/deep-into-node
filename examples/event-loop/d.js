setTimeout(() => {
  console.log("timer1");
  process.nextTick(() => {
    console.log("next tick1");
  });
  Promise.resolve().then(function() {
    console.log("promise1");
  });
  Promise.resolve().then(function() {
    console.log("promise3");
  });
}, 0);

setTimeout(() => {
  console.log("timer2");
  process.nextTick(() => {
    console.log("next tick2");
  });
  Promise.resolve().then(function() {
    console.log("promise2");
  });
}, 0);
