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

#### Map Values
Key Value

set1.add(value) is how you add to a set
map1.set(key, value) //similar to a dictionary in Python

Map
('sale', 200), (100, 'label'), (myFunc(), 300), ({sale: 100}, 200)
   Strings        Numbers          Functions	     Objects

Arrays do not iterate in order...
Map iterates in order

#### Properties and Methods for Maps
 Props: Size
 Methods: Clear, Delete, Entries, forEach, Get, Set, Has, Keys, Values
### Adding and Removing Values in a Map
```javascript
const monthlySales = new Map();

// Add Sales
function addSale(){
    monthlySales.set(newMonth.value, Number.parseInt(newAmount.value));
    console.log(monthlySales);
    console.log(monthlySales.size)
}

```
Map(2) {"2020-12" => 1200, "2020-11" => 1400}
	[[Entries]]
		0: {"2020-12" => 1200}
		1: {"2020-11" => 1400}
	size: 2

```javascript
// access key value by key
function findSale(){
    console.log(monthlySales.has('newSale'));
    console.log(monthlySales.get('newSale'));
}
```
result: true 1500

```javascript
// Delete sale by key
function deleteSale() {  
    console.log(monthlySales.delete('newSale'))
}
```
result: true
find sale for newSale result: undefined so it is deleted
### Iterating through a Map

forEach and for/of area available
```javascript
function addSale(){
    yearlyTotal = 0;

    monthlySales.set(newMonth.value, Number.parseInt(newAmount.value));
    monthlySalesChart.data.labels = Array.from(monthlySales.keys());
   
    monthlySalesChart.data.datasets.forEach((dataset) => {
        dataset.data = [];
    })

    for(let amount of monthlySales.values()){
        yearlyTotal = amount + yearlyTotal;
        yearlyLabel.innerHTML = `$${yearlyTotal}`;

        monthlySalesChart.data.datasets.forEach((dataset) => {
            dataset.data.push(amount);
        })
    }

    monthlySalesChart.update();
}
```
### Difference between Maps and Objects

why not use objects?

#### Differences:
Faster Searching with Maps

#### Object:
* key must be simple datatypes
* Integer
* Strings
* Symbols
* Nothing More

#### Map:
* Key can be any data type
* Object
* Array
* Function

#### Element Order:
Objects and Arrays can't guarantee insertion order
Maps Retain insertion order

#### Inheritance
maps inherit from Object
Object is not inherited from a map

#### Functional Differences
##### Creating
##### Object
var obj = {};
var obj = new Object();
var obj = Object.create(null);

##### Map
var map = new Map();

##### Getting:
##### Object
* obj.id
* obj.['id']

##### Map
* map.get('key')

##### Checking
##### Object
Object - var isExist = obj.id === 'someid'
isExist = 'id' in obj.

##### Map
map.has('key')

##### Adding
##### Object
obj['gender'] = 'female'
obj.gender = 'male'

##### Map
map.set('gender', 'female')

##### Size
##### Object
object.keys(obj).length

##### Map
map.size
### Understanding the Difference of Maps and WeakMaps
makes it so data is not available out of the codeblock
#### WeakMaps
* keys must be objects
* objects are held weakly
* not iterable
* garbage collected
* not enumerable

Methods:
* Delete
* Get
* Set
* Has
## Exploring Typed Arrays


### Defined Type Arrays
### Typed Arrays vs Standard Arrays
### Creating Typed Array Buffers
### Access Typed Arrays and Views

