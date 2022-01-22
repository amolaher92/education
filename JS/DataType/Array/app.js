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
let forArr = ['red', 'green', 'yellow', 'skyblue', 'indigo'];
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