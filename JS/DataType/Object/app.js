/**
 * The Object class represents one of JavaScript's data types. It is used to store
 * various keyed collections and more complex entities.
 */

/**
 * @method Object.assign()
 * The Object.assign() method copies all enumerable own properties
 * from one or more source objects to a target object. It returns the modified target object.
 *
 * Object.assign(target, ...sources)
 *
 * The target object.
 */
const target = {a: 'A', b: 'B'};
const source = {b: 'D', c: 'C'};
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

/**
 * @method Object.create()
 * The Object.create() method creates a new object, using an existing object as
 * the prototype of the newly created object.
 ** create new reference Object existed one
 * Object.create(proto)
 * Object.create(proto, propertiesObject)
 *
 * A new object with the specified prototype object and properties.
 */
const me = Object.create(target);
me.a = 'Apple';
me.b = 'Baby';
console.log(me);

/**
 * @method Object.defineProperty()
 * The static method Object.defineProperty() defines a new property directly on an object,
 * or modifies an existing property on an object, and returns the object.
 *
 * Object.defineProperty(obj, prop, descriptor)
 *
 * The object that was passed to the function.
 */
const app2 = {};
Object.defineProperty(app2, 'person', {
    value: 'Amol Aher',
    writable: true
});
console.log(app2.person);

/**
 * @method Object.defineProperties()
 * The Object.defineProperties() method defines new or modifies existing properties
 * directly on an object, returning the object.
 *
 * Object.defineProperties(obj, props)
 *
 * The object that was passed to the function.
 */
const app = {};
Object.defineProperties(app, {
    person: {
        value: 'Amol',
        writable: true,
    },
    person2: {
        value: 'Second'
    }
});
console.log(app.person);
console.log(app.person2);

/**
 *@method Object.entries()
 * The Object.entries() method returns an array of a given object's own
 * enumerable string-keyed property [key, value] pairs. This is the same as
 * iterating with a for...in loop, except that a for...in loop enumerates
 * properties in the prototype chain as well.
 *
 * The order of the array returned by Object.entries() is the same as that
 * provided by a for...in loop. If there is a need for different ordering,
 * then the array should be sorted first,
 *
 * Object.entries(obj)
 *
 * An array of the given object's own enumerable string-keyed property [key, value] pairs.
 */
const person = {
    name: 'Amol',
    age: 28,
    city: 'Nashik'
};
for (const [key, value] of Object.entries(person)) {
    console.log(`${key} : ${value}`);
}

/**
 * @method Object.freeze()
 * The Object.freeze() method freezes an object. A frozen object can no longer be changed;
 * freezing an object prevents new properties from being added to it,
 * existing properties from being removed, prevents changing the enumerability,
 * configurability, or writability of existing properties, and prevents the values of
 * existing properties from being changed. In addition, freezing an object also prevents its
 * prototype from being changed. freeze() returns the same object that was passed in.
 *
 * Object.freeze(obj)
 *
 * The object that was passed to the function.
 */
Object.freeze(person);
console.log(person.name);

/**
 * @method Object.fromEntries()
 * The Object.fromEntries() method transforms a list of key-value pairs into an object.
 *
 * Object.fromEntries(iterable);
 *
 * A new object whose properties are given by the entries of the iterable.
 */
const entries = Array(['name', 'Amol'], ['age', 28]);
const obj = Object.fromEntries(entries);
console.log(obj);

const map = new Map([['foo', 'bar'], ['baz', 42]]);
const objc = Object.fromEntries(map);
console.log(objc);

/**
 * @method Object.getOwnPropertyDescriptor()
 * The Object.getOwnPropertyDescriptor() method returns an object describing the
 * configuration of a specific property on a given object (that is, one directly present on an
 * object and not in the object's prototype chain). The object returned is mutable but mutating it
 * has no effect on the original property's configuration.
 *
 * Object.getOwnPropertyDescriptor(obj, prop)
 *
 * A property descriptor of the given property if it exists on the object, undefined otherwise.
 */
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor.configurable);
console.log(descriptor.value);
console.log(descriptor.writable);

/**
 * @method Object.getOwnPropertyDescriptors()
 * The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.
 */
const describe = Object.getOwnPropertyDescriptors(person);
console.log(describe.name.writable);
console.log(describe.name.value);

/**
 * @method Object.getOwnPropertyNames()
 * The Object.getOwnPropertyNames() method returns an array of all properties
 * (including non-enumerable properties except for those which use Symbol) found directly in a given object.
 *
 ** return object Key
 */
console.log(Object.getOwnPropertyNames(person));

/**
 * @method Object.keys()
 * The Object.keys() method returns an array of a given object's own
 * enumerable property names, iterated in the same order that a normal loop would.
 */
console.log(Object.keys(person));

/**
 * @method Object.values()
 * The Object.values() method returns an array of a given object's own enumerable property values,
 * in the same order as that provided by a for...in loop. (The only difference is that a for...in
 * loop enumerates properties in the prototype chain as well.
 */
console.log(Object.values(person));