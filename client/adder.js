var add = function (num1, num2) {
  return num1 + num2;
}

/* Option 1: require(adder.js).add
    because the object exported has add as a function 
    keyed off the name "add".
    The second option just exports the function add directly,
    and it's the only thing exported from this module
module.exports = {
    add: add
}
*/
/* Option 2: require("adder.js")
*/
module.exports = add;