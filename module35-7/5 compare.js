// const first = 2;
// // const second = '2';
// const second = 2;

// const first = {};
// const second = {};

// const first = { a: 2 };
// const second = { a: 2 };

// if (first === second) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// const first = { a: 2 };
// const second = { a: 2 };
// const third = second;

// if (third === second) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// const first = { a: 2 };
// const second = { a: 2 };

// if (first === second) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// don't use this method to compare objects/array.

// const first = { a: 2 };
// const second = { a: 2 };

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// console.log(firstString);
// console.log(secondString);

// if (firstString === secondString) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// const first = { a: 2, b: 2, c: 5 };
// const second = { a: 2, b: 2, c: 5 };

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// console.log(firstString);
// console.log(secondString);

// if (firstString === secondString) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// const first = { a: 2, b: 2, c: 5 };
// const second = { b: 2, a: 2, c: 5 };

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// console.log(firstString);
// console.log(secondString);

// if (firstString === secondString) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// const first = { a: 2, b: 2, c: 5 };
// const second = { b: 2, a: 2, c: 5 };

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);

// console.log(firstString);
// console.log(secondString);

// function compareObject(first, second) {
//   const firstKeys = Object.keys(first);
//   const secondKeys = Object.keys(second);
//   if (firstKeys.length === secondKeys.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isSame = compareObject(first, second);
// console.log(isSame);

const first = { a: 2, b: 2, d: 5 };
const second = { b: 2, a: 2, c: 5 };

function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    // return true;
    for (const key of firstKeys) {
      console.log(key);
      console.log(first[key]);
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const isSame = compareObject(first, second);
console.log(isSame);
