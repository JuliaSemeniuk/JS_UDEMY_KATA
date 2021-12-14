//  FUNCTION DECLARATIONS

function greet(firstName, lastName) {
  return "Hello " + firstName + " " + lastName; //Hello John Doe
}
console.log(greet("John", "Doe"));

function greet2(firstName, lastName) {
  return "Hello " + firstName + " " + lastName; //Hello undefined undefined (13 - parameters didn't exist)
}
console.log(greet2());

function greet3(firstName, lastName) {
  //ES5
  if (typeof firstName === "undefined") {
    firstName = "Mickle";
  }
  if (typeof lastName === "undefined") {
    lastName = "Smith";
  }
  return "Hello " + firstName + " " + lastName;
}
console.log(greet3());

function greet4(firstName = "Mickle", lastName = "Smith") {
  //ES6
  return "Hello " + firstName + " " + lastName;
}
console.log(greet4("Julie")); //Julie Smith

//FUNCTION EXPRESIONS

const square = function (x) {
  return x * x;
};
console.log(square(8)); //64

const square2 = function (x = 3) {
  return x * x;
};
console.log(square2()); //9

//IMMIDIATLY INVOKABLE FUNCTION EXPRESSION - IIFEs (declare and run in the same time)
(function () {
  console.log("IIFE run..");
})();

(function (name) {
  console.log("My name is", name);
})("Julia");

//PROPERTY METHODS (function inside object)

const todo = {
  add: function () {
    console.log("Add todo");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo");
};

todo.add();
todo.edit(22);
todo.delete();
