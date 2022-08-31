const numbers = [12, 54, 65, 3, 54];
// for (const number of numbers) {
//   console.log(number);
// }
const bottle = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
for (const key in bottle) {
  console.log(bottle[key]);
}
// for of loop can not be used on objects.
const bottle1 = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
// for (const key of bottle1) {
//   console.log(key);
// }
// first option to loop throgh an object
const keys = Object.keys(bottle1);
console.log(keys);
for (const key of keys) {
  // console.log(bottle1[key]);
  console.log(key);
}

const bottle2 = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
const keys1 = Object.keys(bottle2);
for (const key of keys1) {
  console.log(key);
  console.log(key, bottle2[key]);
}

// for in loop
const bottle3 = { color: "yellow", price: 50, isCleaned: true, capacity: 1 };
for (const key in bottle3) {
  console.log(key);
  console.log(key, bottle3[key]);
  const value = bottle3[key];
  console.log(value);
}

// advanced
const pair = Object.entries(bottle3);
console.log(pair);
for (const [key, value] of pair) {
  console.log(key, value);
}
