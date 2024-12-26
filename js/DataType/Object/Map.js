/**
 * @reference Map
 * The Map object holds key-value pairs and remembers the original insertion order of the keys.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 */
const app = new Map();

/**
 * @method set()
 * The set() method adds or updates an element with a specified key and a value to a Map object.
 ** set(key, value)
 * The Map object.
 *
 * @method get()
 * The get() method returns a specified element from a Map object.
 * If the value that is associated to the provided key is an object,
 * then you will get a reference to that object and any change made to that
 * object will effectively modify it inside the Map object.
 ** get(key)
 * The element associated with the specified key, or undefined if the key can't be found in the Map object.
 *
 * @method keys()
 * The keys() method returns a new Iterator object that contains the keys for each
 * element in the Map object in insertion order.
 ** keys()
 * A new Map iterator object.
 *
 * @method values()
 * The values() method returns a new Iterator object that contains the values
 * for each element in the Map object in insertion order.
 ** values()
 * A new Map iterator object.
 */
app.set('name', 'Amol');
app.set('age', 28);
console.log(app.get('name'));
/**
 *
 * @type {IterableIterator<any>}
 */
const iterator = app.keys();
console.log(iterator.next().value);
console.log(iterator.next().value);
/**
 *
 * @type {IterableIterator<any>}
 */
const iterator1 = app.values();
console.log(iterator1.next().value);
console.log(iterator1.next().value);

/**
 * @method has()
 * The has() method returns a boolean indicating whether an element with the specified key exists or not.
 ** has()
 * true if an element with the specified key exists in the Map object; otherwise false.
 */

console.log(app.has('name'));

/**
 *@method entries()
 * The entries() method returns a new Iterator object that contains the [key, value] pairs
 * for each element in the Map object in insertion order. In this particular case,
 * this iterator object is also an iterable, so the for-of loop can be used.
 * @type {IterableIterator<[any, any]>}
 ** entries()
 * A new Map iterator object.
 */
const iterator2 = app.entries();
console.log(iterator2.next().value);
console.log(iterator2.next().value);

/**
 * @method delete()
 * The delete() method removes the specified element from a Map object by key.
 **delete()
 * true if an element in the Map object existed and has been removed, or false if the element does not exist.
 */
console.log(app.delete('age'));
console.log(app.has('age'));

/**
 * @prototype size
 * The size accessor property returns the number of elements in a Map object.
 *
 * @method clear()
 * The clear() method removes all elements from a Map object.
 **clear()
 *
 * undefined.
 */
console.log(app.size);
app.clear();
console.log(app.size);
