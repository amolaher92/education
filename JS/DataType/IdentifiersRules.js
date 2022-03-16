/**
 * variable declarations
 */

//block scoped
var user;

//block scoped,local scoped
let product;

//block scope read only
const price = 300;

/**
 * Identifiers and Rules
 *
 * An identifier is a sequence of characters in the code that
 * identifies a variable, function, or property.
 *
 * Identifier are case-sensitive.
 * variable must begin | start with an alphabets[a - z | A - Z], dollar sing[$] OR underscore[_].
 * variable can contain alphabet-numeric[a - z | A - Z | 0 - 9], underscore[_] and dollar sign[$].
 * variable can not contain Keywords.
 * variable can not contain white spaces.
 * variable can not contain special symbol.
 * Math operations rule - > Multiplication | Division | Addition | Subtraction.
 * Preferred to use Snake_case, camelCase OR PascalCase.
 */

/**
 * JS Literals
 *
 * JavaScript Literals are the fixed value that cannot be changed, you do not need to
 * specify any type of keyword to write literals.
 *
 * @Numeric Literals
 * 1) Integer
 * 1.1) Decimal[Base 10] are defined as normal integer.-->{[0-9]}.
 * 1.2) Octal[Base 8] are defined a leading zero[0]-->{0[1-7]}.
 * 1.3) Hexadecimal[0-9,A-F] are defined a leading zero+x[0x].-->{0x[0-9,A-F]}.
 * 1.4) Binary[Base 2] are defined a leading zero+b[0b]. -->{0b[0,1]}.
 * 2) Floating
 * 2.1) [digits].[digits][(E|e)[(+|-)]digits] --> {12.12E+2}
 *
 * @String Literals
 * 1) String will be declared double OR single quote.{"string", 'string'}.
 * 2) String will be concatenated with unary plus sign(+).
 *
 * @Template literals
 * 1) Used to back sticks {`string`}.
 * 2) Used to variable in interpolation `${variable}`.
 * 3) Expression Substitution to allow expressions in interpolation.
 *
 * @Array Literals
 * 1) Array define with square bracket{["A","B","c"]}.
 *
 * @Object Literals
 * 1) Object is define to Curly Braces with key and value pairs.[{"Key" : "value"}].
 *
 * @Enhanced Object literals
 * 1) Support setting the prototype at construction,shorthand for assignments, defining methods,
 *     making super calls, and computing property names with expressions.
 * 2) Ex. handler : handler === handler
 *
 * @Boolean Literals
 * 1) The Boolean type has two literal values: true and false.
 *
 * @Regular Expression literals
 * 1) Regular expressions are patterns used to match character combinations in strings.
 * 2) Using a regular expression literal, which consists of a pattern enclosed between slashes.
 * 3) Ex. let re = /ab+c/;
 * 4) Ex. let re = new RegExp('ab+c');
 */

