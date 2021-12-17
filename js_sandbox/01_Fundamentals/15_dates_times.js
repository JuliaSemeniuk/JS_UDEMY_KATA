let val;
const today = new Date(); //Tue Dec 07 2021 12:29:16

let birthday = new Date("9-10-1981 11:25:00"); //Thu Sep 10 1981 11:25:00
// birthday = new Date("September 10 1981"); //Thu Sep 10 1981 00:00:00
// birthday = new Date("9/10/1981"); //Thu Sep 10 1981 00:00:00
// val = today; //Tue Dec 07 2021 12:20:41
// // val = typeof today; //object
// // val = typeof today.toString(); //string

// val = birthday;

val = today.getMonth(); // 11 (0-January; 11 - December)
val = today.getDate(); //13 (today is 13th of December)
val = today.getDay(); //1 (0 - Sunday, 6 - Saturday)
val = today.getFullYear(); //2021
val = today.getHours(); // 8 (now is 8:13)
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //amount of milliseconds since 1.01.1970

birthday.setMonth(2); //Tue Mar 10 1981 11:25:00
birthday.setDate(12); //Thu Mar 12 1981 11:25:00
birthday.setFullYear(1985); //Tue Mar 12 1985 11:25:00
birthday.setHours(3); //Tue Mar 12 1985 03:25:00
birthday.setMinutes(15); //Tue Mar 12 1985 03:15:00
birthday.setSeconds(27); //Tue Mar 12 1985 03:15:27

console.log(val);
console.log(birthday);
