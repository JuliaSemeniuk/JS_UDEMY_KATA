const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "steve@aol.com",
  hobbbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val;

val = person;

//Get specific value
val = person.firstName; //Steve
val = person["lastName"]; //Smith
val = person.age; //30
val = person.hobbbies; //['music', 'sports']
val = person.hobbbies[1]; //sports
val = person.address.state; //FL
val = person.address["city"]; //Miami
val = person.getBirthYear(); //1991

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Mike", age: 23 },
  { name: "Nancy", age: 40 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
} //John Mike Nancy
