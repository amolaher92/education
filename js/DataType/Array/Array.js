/**
 *  The JavaScript Array class is a global object that is used in the construction of arrays;
 *  which are high-level, list-like objects.
 *  Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.
 *  Neither the length of a JavaScript array nor the types of its elements are fixed.
 *  Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array,
 *  JavaScript arrays are not guaranteed to be dense;
 */

let male = ['Amol', 'Sham', 'Rohan', 'Kartik', 'Kiran'];
let female = ['Karina', 'Kajol', 'Madhuri', 'Meena', 'Jannat'];
console.log(male);
console.log(female);
/**
 * Get array length
 * @method length
 */
if ((male.length > 0)) {
    console.log(`The Male students are ${male}`);
}

let checkLength = male.length > 0 ? `The Male students are ${male}` : '';
console.log(checkLength);

/**
 * Check Array
 * @method Array.isArray()
 */
//console.log(Array.isArray(students));
if ((Array.isArray(male)) && (male.length > 0)) {
    console.log(`The Male students are ${male}`);
}

/**
 * @method at()
 * The at() method takes an integer value and returns the item at that index,
 *
 * at(index)
 */
let index = 2;
console.log(`Using the index of ${index} the name returned is ${male.at(index)}`);

index = -2;
console.log(`Using the index of ${index} the name returned is ${male.at(index)}`);

/**
 * @method concat()
 * The concat() method is used to merge two or more arrays.
 * This method does not change the existing arrays, but instead returns a new array.
 *
 * concat()
 * concat(value0)
 * concat(value0, value1)
 * concat(value0, value1, ... , valueN)
 */
let students = male.concat(female);
console.log(students);
console.log(`The number of student ${students.length} and their name ${students}`);

/**
 * @method copyWithin()
 * The copyWithin() method shallow copies part of an array to another location
 * in the same array and returns it without modifying its length.
 *
 * copyWithin(target)
 * copyWithin(target, start)
 * copyWithin(target, start, end)
 */
console.log(`${male.copyWithin(0, 3, 4)}`);


/**
 * @method entries()
 * The entries() method returns a new Array Iterator object that contains the
 * key/value pairs for each index in the array.
 *
 * entries()
 */
for (let [index, element] of male.entries()) {
    console.log(index, element);
}
let iterable = students.entries();

for (let e of iterable) {
    console.log(e);
}

/**
 * @method every()
 * The every() method tests whether all elements in the array pass the test
 * implemented by the provided function. It returns a Boolean value.
 *
 * Return value
 * true|false
 *
 * Arrow function
 * every((element) => {  ...  })
 * every((element, index) => {  ... } )
 * every((element, index, array) => {  ...  } )
 *
 * Callback function
 * every(callbackFn)
 * every(callbackFn, thisArg)
 *
 * Inline callback function
 * every(function(element) {  ...  })
 * every(function(element, index) {  ...  })
 * every(function(element, index, array){  ...  })
 * every(function(element, index, array) {  ...  }, thisArg)
 */
let color = ['red', 'green', 'Orange', 'purple'];

//check element is string
function checkString(msg) {
    return typeof (msg) === 'string';
}

console.log(color.every(checkString));

/**
 * @method fill()
 * The fill() method changes all elements in an array to a static value, from a start
 * index (default 0) to an end index (default array.length). It returns the modified array.
 *
 * fill(value)
 * fill(value, start)
 * fill(value, start, end)
 */
// fill with 0 from position 2 until position 4
console.log(color.fill('red'));
console.log(color.fill('green', 1));
console.log(color.fill('yellow', 1, 2));

/**
 * @method filter()
 * The filter() method creates a @new array with all elements that pass
 * the test implemented by the provided @function.
 *
 * Arrow function
 * filter((element) => {  ...  } )
 * filter((element, index) => {  ...  } )
 * filter((element, index, array) => {  ...  } )
 *
 * Callback function
 * filter(callbackFn)
 * filter(callbackFn, thisArg)
 *
 * Inline callback function
 * filter(function(element) {  ...  })
 * filter(function(element, index) {  ...  })
 * filter(function(element, index, array){  ...  })
 * filter(function(element, index, array) {  ...  }, thisArg)
 */
console.log(students.filter(checkString));

let filterArr = [25, 34, '56', 67, 89, "Amol"];
const result = filterArr.filter((e) => {
    return typeof (e) === 'string';
});
console.log(result);

/**
 * @method find()
 * The find() method returns the value of the @first element in the provided array that satisfies
 * the provided testing function.If no values satisfy the testing @function, undefined is returned.
 *
 * Arrow function
 * find((element) => {  ...  } )
 * find((element, index) => {  ...  } )
 * find((element, index, array) => {  ...  } )
 *
 * Callback function
 * find(callbackFn)
 * find(callbackFn, thisArg)
 *
 * Inline callback function
 * find(function(element) {  ...  })
 * find(function(element, index) {  ...  })
 * find(function(element, index, array){  ...  })
 * find(function(element, index, array) {  ...  }, thisArg)
 *
 */
let findArr = [10, 5, 2, 47, 68, 25, 36,];
const findResult = findArr.find((item) => {
    return item > 20;
});
console.log(findResult);

/**
 * @method findIndex()
 * The findIndex() method returns the index of the @first element in the array that satisfies the
 * provided testing @function. Otherwise, it returns -1, indicating that no element passed the test.
 *
 * Arrow function
 * findIndex((element) => {  ...  } )
 * findIndex((element, index) => {  ...  } )
 * findIndex((element, index, array) => {  ...  } )
 *
 * Callback function
 * findIndex(callbackFn)
 * findIndex(callbackFn, thisArg)
 *
 * Inline callback function
 * findIndex(function(element) {  ...  })
 * findIndex(function(element, index) {  ...  })
 * findIndex(function(element, index, array){  ...  })
 * findIndex(function(element, index, array) {  ...  }, thisArg)
 */
const indexresult = findArr.findIndex((item) => {
    return item > 20;
});
console.log(indexresult);

/**
 * @method flat()
 * The flat() method creates a @new array with all sub-array elements
 * concatenated into it recursively up to the specified depth.
 *
 * flat()
 * flat(depth)
 */
let flatArr = [1, 2, 3, [4, 5, 6, [[7, 8, 9]]]];
console.log(flatArr);
const flatResult1 = flatArr.flat();
const flatResult2 = flatArr.flat(2);
console.log(flatResult1);
console.log(flatResult2);

/**
 * @method flatMap()
 * he flatMap() method returns a @new array formed by applying a
 * given @callback @function to each element of the array, and then flattening the result by one level.
 *
 * Arrow function
 * flatMap((element) => {  ...  } )
 * flatMap((element, index) => {  ...  } )
 * flatMap((element, index, array) => {  ...  } )
 *
 * Callback function
 * flatMap(callbackFn)
 * flatMap(callbackFn, thisArg)
 *
 * Inline callback function
 * flatMap(function(element) {  ...  })
 * flatMap(function(element, index) {  ...  })
 * flatMap(function(element, index, array){  ...  })
 * flatMap(function(element, index, array) {  ...  }, thisArg)
 */
const flatMapResult = findArr.flatMap((item) => {
    return [item * 2];
});
console.log(`${flatMapResult}`);

/**
 * @method forEach()
 * The forEach() method executes a provided function once for @each array element.
 *
 * Arrow function
 * forEach((element) => {  ...  } )
 * forEach((element, index) => {  ...  } )
 * forEach((element, index, array) => {  ...  } )
 *
 * Callback function
 * forEach(callbackFn)
 * forEach(callbackFn, thisArg)
 *
 * Inline callback function
 * forEach(function(element) {  ...  })
 * forEach(function(element, index) {  ...  })
 * forEach(function(element, index, array){  ...  })
 * forEach(function(element, index, array) {  ...  }, thisArg)
 */
let forArr = ['red', 'green', 'yellow', 'skyblue', 'indigo', 'red'];
let colors = []
forArr.forEach((item) => {
    colors.push(item);
})
console.log(colors);

/**
 * @method Array.from()
 * The Array.from() @static method creates a @new, shallow-copied Array
 * instance from an array-like or @iterable object.
 *
 * Arrow function
 * Array.from(arrayLike, (element) => {  ...  } )
 * Array.from(arrayLike, (element, index) => {  ...  } )
 *
 * Mapping function
 * Array.from(arrayLike, mapFn)
 * Array.from(arrayLike, mapFn, thisArg)
 *
 * Inline mapping function
 * Array.from(arrayLike, function mapFn(element) {  ...  })
 * Array.from(arrayLike, function mapFn(element, index) {  ...  })
 * Array.from(arrayLike, function mapFn(element) {  ...  }, thisArg)
 * Array.from(arrayLike, function mapFn(element, index) {  ...  }, thisArg)
 */

//String to array conversion
let box = 'container';
console.log(`${Array.from(box)}`);

/**
 * @method includes()
 * The includes() method determines whether an @array includes a certain value among
 * its entries, @returning true or false as appropriate.
 *
 * includes(searchElement)
 * includes(searchElement, fromIndex)
 */
console.log(`${forArr.includes('red')}`);
console.log(box.includes('z'));

/**
 * @method indexOf()
 * The indexOf() method returns the first index at @which a given element can be found in
 * the array, or @-1 if it is not present.
 *
 * indexOf(searchElement)
 * indexOf(searchElement, fromIndex)
 *
 * The first index of the element in the array; -1 if not found.
 */
console.log(`The index of array element is ${forArr.indexOf('red')}`);
console.log(`The index of array element provided start index is ${forArr.indexOf('red', 2)}`);

/**
 * @method join()
 * The join() method creates and returns a new string by concatenating all the elements
 * in an array (or an array-like object), separated by commas or a specified separator string.
 * If the array has only one item, then that item will be returned without using the separator.
 *
 * join()
 * join(separator)
 *
 * A string with all array elements joined. If arr. length is 0, the empty string is returned.
 * If an element is undefined, null or an empty array [], it is converted to an empty string.
 */
console.log(`The join method return array into string default ${forArr.join()}`);
console.log(`The join method return array into string with separator ${forArr.join('-')}`);

/**
 * @method keys()
 * The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
 *
 * keys()
 *
 * A new Array iterator object.
 */
let keysMethod = forArr.keys();
for (const key of keysMethod) {
    keysMethod += key;
}
console.log(keysMethod);

/**
 * @method lastIndexOf()
 * The lastIndexOf() method returns the @last index at which a given element can be found in the array,
 * or @-1 if it is not present. @The array is searched backwards, starting at fromIndex.
 *
 * lastIndexOf(searchElement)
 * lastIndexOf(searchElement, fromIndex)
 *
 * The last index of the element in the array; -1 if not found.
 */
const lt = [1, 2, 3, 4, 5, 3, 2];
console.log(`The last index of search LR ${lt.lastIndexOf(3)}`);
console.log(`The last index of if provide fromIndex search RL ${lt.lastIndexOf(2, -1)}`);

/**
 * @method map()
 * The map() method creates a @new array populated with the results of calling a provided
 * function on @every element in the calling array.
 *
 * Arrow function
 * map(arrayLike, (element) => {  ...  } )
 * map(arrayLike, (element, index) => {  ...  } )
 *
 * Mapping function
 * map(arrayLike, mapFn)
 * map(arrayLike, mapFn, thisArg)
 *
 * Inline mapping function
 * map(arrayLike, function mapFn(element) {  ...  })
 * map(arrayLike, function mapFn(element, index) {  ...  })
 * map(arrayLike, function mapFn(element) {  ...  }, thisArg)
 * map(arrayLike, function mapFn(element, index) {  ...  }, thisArg)
 *
 * A new array with each element being the result of the callback function.
 */
lt.map((e) => {
    let num;
    num = e * 2;
    console.log(num);
});

/**
 * @method Array.of()
 * The Array.of() method creates a new Array instance from a variable number of arguments,
 * regardless of number or type of the arguments.
 *
 * Array.of(element0)
 * Array.of(element0, element1)
 * Array.of(element0, element1,  ... , elementN)
 *
 * A new Array instance.
 */
let test = Array.of(7);
console.log(test);
test = Array(7);
console.log(test);

/**
 * @method push()
 * The push() method adds one or more elements to the @end of an array and returns the new length of the array.
 *
 * push(element0)
 * push(element0, element1)
 * push(element0, element1, ..., elementN)
 *
 * The new length property of the object upon which the method was called.
 */
forArr.push('pink', 'blue');
console.log(`Add element end of the array ${forArr}`);

/**
 * @method pop()
 * The pop() method removes the @last element from an array and returns that element.
 * This method changes the length of the array.
 *
 * pop()
 *
 * The removed element from the array; undefined if the array is empty.
 */
console.log(`remove the array element end \"${forArr.pop()}\" and after remove given array \"${forArr}\"`);

/**
 * @method shift()
 * The shift() method removes the @first element from an array and returns that removed element.
 * This method changes the length of the array.
 *
 * shift()
 *
 * The removed element from the array; undefined if the array is empty.
 */
console.log(`remove the array element start \"${forArr.shift()}\" and after remove given array \"${forArr}\"`);

/**
 * @method unshift()
 * The unshift() method adds one or more elements to the @beginning of an array and returns the new length of the array.
 *
 * unshift(element0)
 * unshift(element0, element1)
 * unshift(element0, element1, ... ,elementN)
 *
 * The new length property of the object upon which the method was called.
 */
forArr.unshift('navy', 'gray');
console.log(`Add element start from the array ${forArr}`);

/**
 * @method reduce()
 * The reduce() method executes a user-supplied “reducer” callback function on each element of the array,
 * in order, passing in the return value from the calculation on the preceding element.
 * The final result of running the reducer across all elements of the array is a single value.
 *
 * form left-to-right.
 *
 * // Arrow function
 * reduce((previousValue, currentValue) => {  ... })
 * reduce((previousValue, currentValue, currentIndex) => {  ... })
 * reduce((previousValue, currentValue, currentIndex, array) => {  ...})
 * reduce((previousValue, currentValue, currentIndex, array) => {  ... }, initialValue)
 * // Callback function
 * reduce(callbackFn)
 * reduce(callbackFn, initialValue)
 * // Inline callback function
 * reduce(function (previousValue, currentValue) {  ... })
 * reduce(function (previousValue, currentValue, currentIndex) {  ...})
 * reduce(function (previousValue, currentValue, currentIndex, array) {  ...})
 * reduce(function (previousValue, currentValue, currentIndex, array) {  ... }, initialValue)
 *
 * The value that results from running the “reducer” callback function to completion over the entire array.
 */
const rd = [1, 2, 3, 4, 5];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(`Using the reduce method added array value ${rd.reduce(reducer)}`);
console.log(`Using the reduce method added array value with initial value ${rd.reduce(reducer, 5)}`);

/**
 * @method reduceRight()
 * The reduceRight() method applies a function against an accumulator and each value of the
 * array (from right-to-left) to reduce it to a single value.
 *
 * from right-to-left
 *
 * // Arrow function
 * reduceRight((accumulator, currentValue) => { ...  } )
 * reduceRight((accumulator, currentValue, index) => { ...  } )
 * reduceRight((accumulator, currentValue, index, array) => { ...  } )
 * reduceRight((accumulator, currentValue, index, array) => { ...  }, initialValue)
 *
 * // Callback function
 * reduceRight(callbackFn)
 * reduceRight(callbackFn, initialValue)
 *
 * // Callback reducer function
 * reduceRight(function(accumulator, currentValue) { ...  })
 * reduceRight(function(accumulator, currentValue, index) { ...  })
 * reduceRight(function(accumulator, currentValue, index, array){ ...  })
 * reduceRight(function(accumulator, currentValue, index, array) { ...  }, initialValue)
 *
 * The value that results from the reduction.
 */
const sd = [[1, 2], [3, 4], [5, 6]];
const reducerRight = sd.reduceRight((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
});
console.log(`${reducerRight}`);

/**
 * @method reverse()
 * The reverse() method reverses an array in place.
 * The first array element becomes the last, and the last array element becomes the first.
 *
 * reverse()
 *
 * The reversed array.
 */
let alpha = ['A', 'B', 'C', 'D'];
console.log(`reverse the array ${alpha.reverse()}`);

/**
 * @method slice()
 * The slice() method returns a shallow copy of a portion of an array into a new array object
 * selected from start to end (end not included) where start and end represent the index of items in that array.
 * The original array will not be modified.
 *
 * slice()
 * slice(start)
 * slice(start, end)
 *
 * A new array containing the extracted elements.
 */
let fruits = ['Apple', 'Banana', 'Kivi', 'orange', 'Mango', 'Jamun'];
console.log(`The array slice ${fruits.slice()}`);
console.log(`The array slice from start ${fruits.slice(2)}`);
console.log(`The array slice from start reverse ${fruits.slice(-3)}`);
console.log(`The array slice from start and end ${fruits.slice(2, 4)}`);

/**
 * @method some()
 * The some() method tests whether at @least one element in the array passes the test
 * implemented by the provided @function. @It returns true if, in the array,
 * it finds an element for which the provided function returns true; otherwise
 * it returns false. It doesn't modify the array.
 *
 * // Arrow function
 * some((element) => {  ...  } )
 * some((element, index) => {  ...  } )
 * some((element, index, array) => {  ...  } )
 *
 * // Callback function
 * some(callbackFn)
 * some(callbackFn, thisArg)
 *
 * // Inline callback function
 * some(function(element) {  ...  })
 * some(function(element, index) {  ...  })
 * some(function(element, index, array){  ...  })
 * some(function(element, index, array) {  ...  }, thisArg)
 *
 * true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
 */
const even = (item) => item % 2 === 0;
console.log(`The some return true if even \"${rd.some(even)}\"`);


/**
 * @method sort()
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 * The default sort order is ascending, built upon converting the elements into strings,
 * then comparing their sequences of UTF-16 code units values.
 *
 * // Functionless
 * sort()
 *
 * // Arrow function
 * sort((firstEl, secondEl) => {  ...  } )
 *
 * // Compare function
 * sort(compareFn)
 *
 * // Inline compare function
 * sort(function compareFn(firstEl, secondEl) { ...  })
 *
 * The sorted array. Note that the array is sorted in place, and no copy is made.
 *
 */
console.log(`The sorted array [${fruits.sort()}]`);
console.log(`The revered array after sorted array [${fruits.reverse()}]`);

/**
 * @method splice()
 * The splice() method @changes the contents of an array by @removing or replacing @existing
 * elements and/or adding new elements in place. To access part of an array without modifying it,
 * see slice().
 *
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2, itemN)
 *
 * An array containing the deleted elements.
 * If only one element is removed, an array of one element is returned.
 * If no elements are removed, an empty array is returned.
 */
let month = ['Jan', 'March', 'April', 'June'];
month.splice(1, 0, 'Feb')
console.log(month);
month.splice(4, 1, 'May');
console.log(month);

/**
 * @method toLocaleString()
 * The toLocaleString() method returns a string representing the elements of the array.
 * The elements are converted to Strings using their toLocaleString methods and these
 * Strings are separated by a locale-specific String (such as a comma “,”).
 *
 * toLocaleString();
 * toLocaleString(locales);
 * toLocaleString(locales, options);
 *
 * A string representing the elements of the array.
 */
console.log(`Array to string conversion ${sd.toLocaleString()}`);

/**
 * @method toString()
 * The toString() method returns a string representing the specified array and its elements.
 *
 * toString()
 *
 * A string representing the elements of the array.
 */
console.log(`Array to string conversion ${sd.toString()}`);

/**
 * @method values()
 * The values() method returns a new array iterator object that contains the values for each index in the array.
 *
 * values()
 *
 * A new Array iterator object.
 */
const iterator = month.values();
for (const value of iterator) {
    console.log(value);
}
