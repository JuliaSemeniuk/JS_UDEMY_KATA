//https://www.codewars.com/kata/554b4ac871d6813a03000035

function getHighestAndLowest(string) {
  let array = string.split(" ");
  let result = [];
  result.push(Math.max(...array), Math.min(...array));
  result = result.join(" ");
  console.log(result);
  return result;
}

getHighestAndLowest("1 2 3 4 5");
