const path = require('path');

//The path.basename() method returns the @last portion of a path, similar to the Unix basename command.
const basenameFirst = path.basename('../JS/DataType/Array/Array.js', '.js');
const basenameSecond = path.basename('../JS/DataType/Array/Array.js');
console.log(`path.basename() method returns the last portion of a path ${basenameFirst}`);
console.log(`path.basename() method returns the last portion of a path ${basenameSecond}`);

const DirectoryName = path.dirname('../JS/DataType/Array/Array.js');
console.log(`path.dirname() method returns the directory name of a path ${DirectoryName}`);

/*
const EnvironmentalPaths = process.env.PATH;
console.log(EnvironmentalPaths);
console.log(EnvironmentalPaths.split(path.delimiter));
*/
