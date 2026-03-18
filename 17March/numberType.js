
function numberparameter(num){

let output = "";

  if (num > 0) {
        output = "The number is positive";
    } else if (num < 0) {
        output = "The number is negative";
    } else {
        output = "The number is zero";
    }
    return output;
}
console.log(numberparameter(10)); // Positive
console.log(numberparameter(-10)); // Negative
