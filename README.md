# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pmitchener/lotide`

**Require it:**

`const _ = require('@pmitchener/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(Array)`: returns a new array of the value at index 0 of the array.
*  `tail(Array)`: Returns a new array excluding index 0 of the orginal array.
*  `middle(Array)`: Returns a new array with the middle elements of the given array. 
*  `findKey(Object, function)`: Return first key of the input object that result in the call back function returning true. 
*  `findKeyByValue(Object, String)`: find first key that contains the String in the object"
*  `letterPositions(String)`: Return an object with the index of the occurance of each character in the input string.
*  `countLetters(String)`: Return an object with the count of ehach character occurance of the input string.
*  `countOnly(Array, Object)`: return an object with all the elements of the input array that matches keys in the input object.
*  `map(Array function)`: Return array of values from the input array based on the call back function.
*  `reverse(Array)`: Take an array of strings and display the reverse of each string in the array.
*  `takeUntil(Array, function)`: Return a new array based on the thruthy return of the call back function. 
*  `without(Array)`: Returns a subset of the array without the unwanted elements
*  `flatten(Array)`: Returns a flattened version of the input array. If the array has sub arrays, all sub arrays will be flattened to the same level.