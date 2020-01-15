module.exports = function (arrayAsString) { 
    return arrayAsString.split(",").map(arrayAsString => arrayAsString.trim());
 }