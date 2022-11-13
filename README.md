# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @SomarGuy/lotide`

**Require it:**

`const _ = require('@SomarGuy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrOne, arrTwo)`: logs whether two arrays are equal.
* `assertEqual(actual, expected)`: Asserts whether two primitive values are equal.
* `assertObjectsEqual(objOne, objTwo)`: Asserts whether two objects are equal.
* `countLetters(str)`: Returns how many times a letter is in a string.
* `countOnly(allItems, itemsToCount)`: Returns how many times items (itemsToCount) appears in a list (allItems).
* `eqArrays(arrOne, arrTwo)`: Compares the data of two arrays to check if they are equal to each other.
* `eqObjects(objOne, objTwo)`: Compares the data of two objects to check if they are equal to each other.
* `findKey(obj, cal)`: Given an object with values containing another object, using a callback, it will return the first key matching the callback.
* `findKeyByValue(object, value)`: Returns the key of an object matching value arg.
* `flatten(arr)`: Given an array with nested arrays no more than 1 level deep, will return simple none nested array with all values in it.
* `head(array)`: Returns the first item in an array.
* `letterPositions(str)`: Given a sentence, and the letter you want the indexes of, it will return an array with the indexes of that letter.
* `map(array, callback)`: Iterates over an passed array and returns a new array with values based of a passed callback.
* `middle(arr)`: Returns an array of the middle value of an array. If even numbered array, will return the middle 2 values of that array.
* `tail(arr)`: Returns an array with every value after the first item in that array.
* `takeUntil(array, callback)`: Returns an array with every value until callback is met.
* `without(source, itemsToRemove)`: Given an array of items, and an array of items you want removed, returns a new array with remaining items.
