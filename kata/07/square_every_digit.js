//https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num) {
  let digits = num.toString().split("");
  let squredDigits = digits.map(function (digit) {
    return Math.pow(digit, 2);
  });

  console.log(parseInt(squredDigits.join("")));
  return parseInt(squredDigits.join(""));
}

squareDigits(3212);
