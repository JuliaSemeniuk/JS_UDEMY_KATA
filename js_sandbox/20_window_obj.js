//WINDOW - The window object represents an open window in a browser

//ALERT
// alert("Hello");

//PROMPT (is similar to alert but it takes an input)
// const input = prompt();
// alert(input);

//CONFIRM (is using when you're deleting smth)
// if (confirm("Are you sure?")) {
//   console.log("Yes"); //Yes (if you choose OK)
// } else {
//   console.log("No"); //NO (if you choose Cancel)
// }

let val;

//OUTER HEIGHT AND WIDTH

val = window.outerHeight; // 834
val = window.outerWidth; //1536

//INNER HEIGHT AND WIDTH

val = window.innerHeight; //731
val = window.innerWidth; //1286

//SCROLL POINTS

val = window.scrollY; //vertical
val = window.scrollX; //horizontal

//LOCATION OBJECT
val = window.location;
val = window.location.host; //127.0.0.1:5500
val = window.location.port; //5500
val = window.location.href; //http://127.0.0.1:5500/
val = window.location.search; //show info after "?" in address bar

//REDIRECT
//window.location.href = "https://www.google.com/";

//RELOAD
//window.location.reload();

//OBJECT HISTORY
//window.history.go(-1); //it shows web site i visited one time ago; -2 - two times
val = window.history.length; // 6 - 6 web sites behind

//NAVIGATOR
val = window.navigator;
val = window.navigator.appName; //The value of the Navigator.appName property is always "Netscape", in any browser. This property is kept only for compatibility purposes.
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; //Win32 - Returns a string representing the platform of the browser. The specification allows browsers to always return the empty string, so don't rely on this property to get a reliable answer.
val = window.navigator.vendor; //Google Inc. - The value of the Navigator vendor property is always either "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.

console.log(val);
