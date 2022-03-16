/**
 * @reference Math
 * Math is a built-in object that has properties and methods for mathematical
 * constants and functions. It’s not a function object.
 */
/**
 * @method Math.abs()
 * The Math.abs() function returns the absolute value of a number. That is,
 * it returns x if x is positive or zero, and the negation of x if x is negative.
 *
 * Math.abs(x)
 *
 * The absolute value of the given number.
 */
function difference(a, b) {
    return Math.abs(a / b);
}

console.log(`${difference(5, 2)}`);