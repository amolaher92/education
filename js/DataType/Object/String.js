/**
 * @reference String
 * The String object is used to represent and manipulate a sequence of characters.
 * Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
 */
const fullName = 'Amol Arun Aher';
const city = "AP Vadner Bhairav Main Road";
const college = `My name is ${fullName}. I am from ${city}. My college HAL college of science and commerce`;
const objectString = new String("My Biography");
console.log(objectString);
console.log(college);

/**
 * length
 * get the string length
 *
 * @method valueOf()
 * The valueOf() method returns the primitive value of a String object.
 */
console.log(`${fullName.length} || ${city.length} || ${college.length} || ${objectString.length}`);
console.log(objectString.valueOf());

/**
 * @method concat()
 * The concat() method concatenates the string arguments to the calling string and returns a new string.
 *
 * concat(str1)
 * concat(str1, str2)
 * concat(str1, str2, ... , strN)
 *
 * A new string containing the combined text of the strings provided.
 */
const first = "Hello";
const second = "World";
console.log(first.concat(' ', second));

/**
 * @method toLocaleLowerCase()
 * The toLocaleLowerCase() method returns the calling string value converted to lower case,
 * according to any locale-specific case mappings.
 *
 * @method toLocaleUpperCase()
 * The toLocaleUpperCase() method returns the calling string value converted to upper case,
 * according to any locale-specific case mappings.
 *
 * @method toLowerCase()
 * The toLowerCase() method returns the calling string value converted to lower case.
 *
 * @method toUpperCase()
 * The toUpperCase() method returns the calling string value converted to uppercase
 * (the value will be converted to a string if it isn't one).
 *
 * @method toString()
 * The toString() method returns a string representing the specified object.
 */
const app = "abcdEFGHijklMN";
console.log(`${app.toLocaleLowerCase()}`);
console.log(`${app.toLocaleUpperCase()}`);
console.log(`${app.toLowerCase()}`);
console.log(`${app.toUpperCase()}`);

//object to string
console.log(`${objectString.toString()}`);


/**
 * @method includes()
 * The includes() method performs a case-sensitive search to determine whether one string
 * may be found within another string, returning true or false as appropriate.
 * includes(searchString)
 * includes(searchString, position)
 *
 * @method search()
 * The search() method executes a search for a match between a regular expression and this String object.
 * search(regexp)
 * The index of the first match between the regular expression and the given string, or -1 if no match was found.
 */
const sentence = 'I am clever Boy and I never give up';
const word = 'Boy';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

let regex = /[B]/g;
console.log(sentence.search(regex));

/**
 * @method match()
 * The match() method retrieves the result of matching a string against a regular expression.
 * match(regexp)
 *
 * @method matchAll()
 * The matchAll() method returns an iterator of all results matching a string against a
 * regular expression, including capturing groups.
 * matchAll(regexp)
 */
regex = /[A-Z]/g;
console.log(sentence.match(regex));

let check = [...sentence.matchAll(regex)];
console.log(check);


/**
 * @method replace()
 * The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement can be a string or a
 * function to be called for each match. If pattern is a string, only the first occurrence will be replaced.
 *
 * replace(regexp, newSubstr)
 * replace(regexp, replacerFunction)
 * replace(substr, newSubstr
 * replace(substr, replacerFunction)
 *
 * @method replaceAll()
 * The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
 * The pattern can be a string or a RegExp, and the replacement can be a string or a
 * function to be called for each match.
 *
 * replaceAll(regexp, newSubstr)
 * replaceAll(regexp, replacerFunction)
 *
 * replaceAll(substr, newSubstr)
 * replaceAll(substr, replacerFunction)
 */
console.log(`${sentence.replace('Boy', "Girl")}.`);
console.log(`${sentence.replaceAll('I am', "We are")}.`);

/**
 * @method substring()
 * The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
 * substring(indexStart)
 * substring(indexStart, indexEnd)
 * A new string containing the specified part of the given string.
 *
 * @method slice()
 * The slice() method extracts a section of a string and returns it as a new string,
 * without modifying the original string.
 * slice(beginIndex)
 * slice(beginIndex, endIndex)
 * A new string containing the extracted section of the string.
 *
 * @method split()
 * The split() method divides a String into an ordered list of substrings,
 * puts these substrings into an array, and returns the array.  The division is
 * done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
 * split()
 * split(separator)
 * split(separator, limit)
 *
 */
console.log(`${fullName.substring(0, 5)}`);
console.log(`${fullName.slice(10, 14)}`);

//String to Array conversion
const words = fullName.split(' ');
console.log(words[1]);
/**
 * @method trim()
 * The trim() method removes whitespace from both ends of a string and returns a new string,
 * without modifying the original string.
 *
 * @method trimStart()
 * The trimStart() method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.
 *
 * @method trimEnd()
 * The trimEnd() method removes whitespace from the end of a string. trimRight() is an alias of this method.
 *
 */
let triming = '  Hello Amol  ';
console.log(triming);
console.log(triming.trim());
console.log(triming.trimEnd());
console.log(triming.trimStart());
/**
 * @method
 *
 */


/**
 * @method
 *
 */

/**
 * @method
 *
 */

/**
 * @method
 *
 */

/**
 * @method
 *
 */

/**
 * @method
 *
 */


