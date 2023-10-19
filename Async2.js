console.log("1. Code Started");
let a = 10;
const b = 20;

console.log("2. The value of a & b is: ", { a, b });

// After seeing Async task - JS moves it to Queues to execute later
setTimeout(() => {
  console.log("3. I'm LN8 setTimeOut with 0 s");
}, 0);

setTimeout(() => {
  console.log("4. I'm LN12 setTimeOut with 2 s");
}, 2000);

console.log("5. Let me run a loop");

for (let i = 0; i < 5; i++) {
  console.log("6: i: ", i);
}

const p = () => {
  return new Promise((reply, reject) => {
    reply("Promise Done");
  });
};

p()
  .then((data) => console.log("7. Promise Output: ", data))
  .catch((err) => console.log("7.1 Error: ", err));

//line 22-30
//promise is there.

console.log("8. Code end");