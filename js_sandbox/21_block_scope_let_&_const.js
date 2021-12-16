//GLOBAL SCOPE

var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: " + a, b, c); //Global Scope: 1 2 3

//FUNCTION SCOPE

function test() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log("Functional Scope: " + a, b, c);
}

test(); //Functional Scope: 4 5 6

//BLOCK SCOPE

if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log("If-Block Scope: " + a, b, c); //If-Block Scope: 7 8 9
}

console.log("Global Scope: " + a, b, c); //Global Scope: 7 2 3 the var was chenged!! but let and const are still the same

//LOOP SCOPE

for (var a = 0; a < 5; a++) {
  console.log("var a: " + a); //0 1 2 3 4
}
console.log("Global Scope: " + a, b, c); //Global Scope: 5 2 3 - var was changed!!

for (let b = 0; a < 5; a++) {
  console.log("let b: " + b); //0 1 2 3 4
}
console.log("Global Scope: " + a, b, c); //Global Scope: 5 2 3 - let is stell the same!!
