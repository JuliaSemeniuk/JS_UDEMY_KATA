//FOR (when you know how many iterations it's going to have)

for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log(i, "is my favorite number");
  }
  console.log(i);
} //0 1 2 is my favorite number 2 3 4

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log(i, "is my favorite number");
    continue;
  }
  console.log(i);
} //0 1 2 is my favorite number 3 4

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    console.log(i, "is my favorite number");
    continue;
  }

  if (i === 4) {
    console.log("Stop the loop");
    break;
  }
  console.log(i);
} //0 1 2 is my favorite number 3 Stop the loop

//WHILE (when you don't know how many iterations it's going to have)
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
} // 0 1 2 3 4 5

//DO WHILE (always going to run once no metter what)

let i = 0;

do {
  console.log(i); //0 1 2 3 4
  i++;
} while (i < 5);

let x = 100;
do {
  console.log(x); //100
  i++;
} while (x < 5);

//ARRAYS - FOR

const cars = ["Ford", "Hundai", "Toyota", "Nissan"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]); //Ford Hundai Toyota Nissan
}

//ARRAYS - FOR EACH

cars.forEach(function (car) {
  console.log(car); //Ford Hundai Toyota Nissan
});

cars.forEach(function (car, index) {
  console.log(`${index} : ${car}`); //0 : Ford 1 : Hundai 2 : Toyota 3 : Nissan
});

cars.forEach(function (car, index, array) {
  console.log(array); // [ 'Ford', 'Hundai', 'Toyota', 'Nissan' ] [ 'Ford', 'Hundai', 'Toyota', 'Nissan' ] [ 'Ford', 'Hundai', 'Toyota', 'Nissan' ] [ 'Ford', 'Hundai', 'Toyota', 'Nissan' ]
});

//ARRAYS - MAP - is using to return different array

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Tony" },
  { id: 3, name: "Mark" },
];

const ids = users.map(function (user) {
  return user.id; // [ 1, 2, 3 ]
});

console.log(ids);

//FOR IN (use with objects)

const user = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
};

for (let x in user) {
  console.log(x); //firstName lastName age
}

for (let x in user) {
  console.log(`${x}: ${user[x]}`); //firstName: John lastName: Smith age: 30
}
