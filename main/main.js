module.exports = function main(inputStr) {
  var sum = 0;
  for (var i = 0; i < inputStr.length; i++) {
    sum += Number(inputStr[i]);
  }
  return sum;
};
