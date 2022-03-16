const path = require('path');

//The path.basename() method returns the @last portion of a path, similar to the Unix basename command.
const basenameFirst = path.basename('../JS/DataType/Array/Array.js', '.js');
const basenameSecond = path.basename('../JS/DataType/Array/Array.js');
console.log(basenameFirst);
console.log(basenameSecond);

