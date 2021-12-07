const firstName = "William";
const lastName = "Johnson";
const str = "Hello there I'm William";

let val;

val = firstName + lastName; //WilliamJohnson

//Concatenation
val = firstName + " " + lastName; //William Johnson

//Append
val = "Brad "; // Brad
val += "Traversy"; //Brad Traversy

val = "Hello, I'm " + firstName + " and I'm am " + 30; //Hello, I'm William and I'm am 30

//Length
val = firstName.length; //7

//concat
val = firstName.concat(" ", lastName); //William Johnson

//case
val = firstName.toUpperCase(); //WILLIAM
val = firstName.toLowerCase(); //william

val = firstName[0]; //W

//indexOf()
val = firstName.indexOf("l"); //2
val = firstName.lastIndexOf("l"); //3

//charAt()
val = firstName.charAt("2"); //l

//Get last char
val = firstName.charAt(firstName.length - 1); //m

//substring()
val = firstName.substring(0, 4); //Will

//slice()
val = firstName.slice(0, 4); //Will
val = firstName.slice(-3); //iam

//split()
val = str.split(" "); //(4) ['Hello', 'there', "I'm", 'William']

//replace
val = str.replace("William", "Jack"); //Hello there I'm Jack

//incudes()
val = str.includes("Hello"); //true

console.log(val);
