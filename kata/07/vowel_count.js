//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function countVowels(string) {
  let array = string.toLowerCase().split("");
  let i = 0;
  let arrayVowel = [];

  while (i < array.length) {
    if (
      array[i] === "a" ||
      array[i] === "e" ||
      array[i] === "i" ||
      array[i] === "o" ||
      array[i] === "u"
    ) {
      arrayVowel.push(array[i]);
    }
    i++;
  }

  return arrayVowel.length;
}

console.log(countVowels("Hello, my name is "));
