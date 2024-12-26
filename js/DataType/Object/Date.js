/**
 * @reference Date
 * JavaScript Date objects represent a single moment in time in a platform-independent format.
 * Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
 */
const app = new Date();

console.log(`${app.toDateString()}`);
console.log(`${app.toISOString()}`);
console.log(`${app.toJSON()}`);
console.log(`${app.toLocaleDateString()}`);
console.log(`${app.toLocaleString()}`);
console.log(`${app.toLocaleTimeString()}`);
console.log(`${app.toString()}`);
console.log(`${app.toTimeString()}`);
console.log(`${app.toUTCString()}`);


console.log(`${app.getDate()}`);
console.log(`${app.getMonth()}`);
console.log(`${app.getFullYear()}`);
console.log(`${app.getSeconds()}`);
console.log(`${app.getMinutes()}`);
console.log(`${app.getHours()}`);
console.log(`${app.getTime()}`);

console.log(`${app.getUTCDate()}`);
console.log(`${app.getUTCMonth()}`);
console.log(`${app.getUTCFullYear()}`);
console.log(`${app.getUTCSeconds()}`);
console.log(`${app.getUTCMinutes()}`);
console.log(`${app.getUTCHours()}`);
console.log(`${app.getTimezoneOffset()}`);



