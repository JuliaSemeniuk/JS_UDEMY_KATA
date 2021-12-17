//const id = "100";

//EQUAL TO

if (id == 100) {
  console.log("correct"); //correct
} else {
  console.log("incorrect");
}

//NOT EQUAL TO

if (id != 101) {
  console.log("correct"); //correct
} else {
  console.log("incorrect");
}

//EQUAL TO VALUE & TYPE

if (id === 100) {
  console.log("correct");
} else {
  console.log("incorrect"); //incorrect
}

//NOT EQUAL TO VALUE & TYPE

if (id !== 100) {
  console.log("correct"); //correct
} else {
  console.log("incorrect");
}

//?? Test if undefined

if (typeof id !== "undefined") {
  console.log(`The id is ${id}`);
} else {
  console.log("There is no id");
}

//GREATER OR LESS THAN
if (id >= 100) {
  console.log("correct"); //correct
} else {
  console.log("incorrect");
}

//IF ELSE
const color = "yellow";

if (color === "red") {
  console.log("color is red");
} else if (color === "blue") {
  console.log("color is blue");
} else {
  console.log("color is not red or blue");
}

//LOGICAL OPERATORS

const name = "Steve";
const age = 66;

//AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} can run in race`);
}

//TERNARY PERATOR
console.log(id === 100 ? "correct" : "incorrect");
