function convertBinaryToInteger(array) {
  let integer = parseInt(array.join(""), 2);

  return integer;
}

convertBinaryToInteger([0, 0, 0, 1]);
