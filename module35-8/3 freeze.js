const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: 1,
};

console.log(Object.keys(bottle));
console.log(Object.values(bottle));
console.log(Object.entries(bottle));
console.log(bottle.color);
console.log(bottle);
console.log(delete bottle.isCleaned);
console.log(bottle);
delete bottle.capacity;
console.log(bottle);
console.log(bottle.isCleaned);

// if we seal an object, we can't delete any property from it.
console.log(bottle);
Object.seal(bottle);
delete bottle.color;
console.log(bottle);
// if we seal an object, we can't delete any property from it but we can modify it.
bottle.price = 100;
console.log(bottle);
// if we seal an object, we can't delete any property from it but we can't add.
bottle.size = "big";
console.log(bottle);
// if we freeze an object, we can't delete any property from it and we can't add.
Object.freeze(bottle);
console.log(bottle);
