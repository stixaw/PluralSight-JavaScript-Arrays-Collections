# Javascript Arrays and Collections  Jeff Batt

## Methods for working with Arrays
* Advanced Methods (listof, find, fill)
* New ways to iterate an array
* New Data collections (sets, maps)
* Specific methods for sets and maps
* Typed arrays

Sample Project Carved Rock Fitness Sales Tracker

### Chart.js Framework

1. create canvas on index.html for chart
2. in page.js add getelementById for the two charts and getContext()

### Creating an Array from a list of Arguments

```javascript
let array = Array.of(12, 9, 3) //results [12, 9, 3]
```
This how we are creatingo our arrays for the charts

### Using the Spread Operator with Arrays

Example:
```javascript
let monthlySales = Array.of(12, 9, 3);
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

function addYearlyTotal(a, b, c) {
    return a + b + c
}

// let yearlyTotal = addYearlyTotal(monthlySales);

// alert(yearlyTotal) //results 12,9,3undefinedundefined

let yearlyTotal = addYearlyTotal(...monthlySales); //using the spread operator will take each individual items in the array as individual parameters

alert(yearlyTotal) // result 24
```

### Using Array.find and findIndex to Find a Value

Example find:
```javascript
function findOver1000(){
	let firstThousand = monthlySales.find(element => element > 1000);
	alert(firstThousand); //returns 9000 this is the element
}
// findIndex
function findOver1000(){
	let firstThousand = monthlySales.findIndex(element => element > 1000);
	alert(firstThousand); //returns 1 this is the index of the element
}
```

### Using Array Fill

example:
```javascript
function resetNum(){
	monthlySales.fill(0); // fill tells what to set all the elements to...
	monthlySalesChart.update();
}
```

### Methods for Iterating through Arrays

forEach

example:
```javascript
monthlySales.forEach(addYearlyTotal);
```
-----------------------------------------------------
## Working with Sets
### Reviewing Data Collections

* Python : Lists, Tuples, Dictionaries
* Java: Lists, Sets, Maps, queues
* Ruby: Hashes, Arrays

Focusing on new enhancements in JS ECMAScript 6

#### Data Collection
Stores and structures large amounts of data types for easy access.  Provides methods to access that data.

###### Before ECMA6
* Arrays
* Objects

###### After ECMA6
* Arrays
* Objects
* Sets
* Maps
* WeakSets
* WeakMaps

#### 8 Data Types:
* Boolean
* Null
* Undefined
* Number
* BigInt
* Strings
* Symbols
* Object  Not A Primitive, A Value in memory which can be referenced by an identifier
### Introducing Sets

#### Sets
Enable you to store unique values of any type, whether primitive values or object references.

#### Sets rules
Must Be Unique values
will ignore duplicates

52 118 200 47

can have:
52 "hello" myFunct() {one: 1} 47

#### Properties of Sets
* Size (instead of length)
* 

#### Methods of Sets
* Add
* Clear
* Delete
* Entries
* forEach
* Has
* Keys
* Values
### Adding and Removing Values to a Set

* Chaining the add:
```javascript
test.add(5).add(7)
```
* Declarative
```javascript
const test = new Set([1,4,7,9]);
```
using an object:
example:
```javascript
const test = new Set([{test: 'thisisatest'}]);
```
### Iterating a Set
#### for/of
```javascript
function addTotal() {
    yearlyTotal = 0;
    for(let amount of monthlySales){
        yearlyTotal = amount + yearlyTotal
        console.log(yearlyTotal)
        yearlyLabel.innerHTML= (`$${yearlyTotal}`)
    }
}
```
#### forEach()
```javascript
    monthlySales.forEach((val1, val2, monthlySales) => {
        alert(val1)
    })
```
### Updating Charts

```javascript
Array.from(Values) //creates array from what is in the values
```

```javascript
monthlySalesChart.data.datasets.forEach((dataset) => {
		dataset.data = [];
```
this is because Chart.js doesn't support Sets or maps
### Difference between a Set and WeakSet

#### WeakSet:
* only contain objects
* No primitive data types
* Objects are held "weakly" - may not be a reference
* Not iterable
* No access to size property
* Garbage collected

#### Garbage Collection:
Monitor memory allocation and determin when a block of allocated memory is no longer needed and reclaim it.

Sets by default will not get rid of that memory.
Use a weakset so that when it is no longer used you can get rid of it.

#### Weakset Methods
* Add
* Delete
* Has
### Working with WeakSets

```javascript
const categories = new WeakSet();

let hiking = {category: "Hiking"};
let running = {category: "Running"};
let hunting = {category: "Hunting"};

categories.add(hiking); //because it has to be an object we create an object and assign it to a variable
```
## Creating and Using Maps
maps add functionality on top of sets
### Introducing Maps
Maps uses key-value pairs and keeps the original insertion order of the keys.
Any value (objects and primitive values) may be used as either a key or a value.



### Adding and Removing Values in a Map
### Iterating through a Map
### Difference between Maps and Objects
### Understanding the Difference of Maps and WeakMaps
## Exploring Typed Arrays
### Defined Type Arrays
### Typed Arrays vs Standard Arrays
### Creating Typed Array Buffers
### Access Typed Arrays and Views

