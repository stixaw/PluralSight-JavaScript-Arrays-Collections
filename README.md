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
Designed to handle direct memory allocation

### Defined Type Arrays
* Typed Arrays:
    Array-like objects that provide a mechanism for accessing raw binary data.

Works great with alot of data

#### Benefits of Typed Arrays
* Accessing raw Binary data
* Faster performance
* Strictly controlled data
* API that support typed arrays

#### APIs that support Typed Arrays
* WebGL
* Canvas
* Web Audio API
* XMLHttpRequests
* Fetch API
* Web Sockets
* Web Workers
* Media Source API
* File APIs

#### Typed Array Structure
THe key to the Typed Array structure is to create an Array Buffer with defined number of Bytes
Defined in the javascript file but the Javascript file can't communicate directly to the Array Buffer
to get the functionality of the array you must create a view.

#### Types of Buffer Arrays:
* UInt8Array
* UInt16Array
* UInt32Array
* Float64Array

Depending on the type of view you create you'll have different sets of structure in there that contain different types of bytes there.
The key is how many bytes you initially create

#### Array Buffer 16 Bytes:
* UInt8Array 1 byte each with 16 different sections
    I can only use certain types of numbers

* UInt16Array 2 bytes each with only 8 different sections

* Uint32Array I can work with higher numbers but only  4 bytes each section i only have 4 spots to work wiht

* Float64Array 8 byte each so larger numbers but only 2 sections with 8 bytes each

Inside your JavaScript you communicate to these views
i defined the number I am working with
I defined the spot that that number will be stored in that array

Remember you are communicating with these different spots
It auto creates the spots with a starting number 0

#### what kind of numbers?
* UInt8Array 0-255,  1byte, size 8-bit unsigned integer
* UInt16Array 0-65535, 2byte size, 16-bit unsigned integer
* UInt32Array 0-4294967295, 4byte size, 32-bit unsigned integer
* Float64Array 5.0x10-324 to 1.8x10308, 8byte size, 64-bit IEEE floating point number

### Typed Arrays vs Standard Arrays

Standard Array                  Typed Array
* Accept most data types        Restricted Data Types
* Standard Variable storage     Binary data
* Standard processing           Faster processing
*                               Once in view, acts like array
*                               Native APIs

### Creating Typed Array Buffers
```javascript
let testBuffer = new ArrayBuffer(16);
```
can test it exist by doing:
```javascript
if(testBuffer.byteLength === 16) alert('yes')
```

### Access Typed Arrays and Views
```javascript
// create view
let view1 = new Int8Array(testBuffer);
view1[0] = 32;
console.log(view1)

//result
Int8Array(16) [32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
buffer: ArrayBuffer(16)
byteLength: 16
byteOffset: 0
length: 16
0: 32
1: 0
2: 0
3: 0
4: 0
5: 0
6: 0
7: 0
8: 0
9: 0
10: 0
11: 0
12: 0
13: 0
14: 0
15: 0
Symbol(Symbol.toStringTag): undefined
__proto__: TypedArray
```

because it is an in8 we can't do anything above 127 if we do
here is what happens
```javascript
view1[2] = 132;
console.log(view1)
//results
0: 32
1: 0
2: -124 // ?? work with the correct data used clamped array for error checking
3: 0
4: 0
5: 0
6: 0
7: 0
8: 0
```

if we change to int16:
```javascript
let testBuffer = new ArrayBuffer(16);

// View
let view1 = new Int16Array(testBuffer);

view1[0] = 32;
console.log(view1);

//results
Int16Array(8) [32, 0, 0, 0, 0, 0, 0, 0]
buffer: ArrayBuffer(16)
byteLength: 16
byteOffset: 0
length: 8
0: 32
1: 0
2: 0
3: 0
4: 0
5: 0
6: 0
7: 0
Symbol(Symbol.toStringTag): undefined
__proto__: TypedArray
```

#### Creating & Setting DataView:
```javascript
//DataView
let view2 = new DataView(testBuffer);

view2.setInt8(2, 43);
console.log(view2);

//results
DataView(16) {}
buffer: ArrayBuffer(16)
[[Int8Array]]: Int8Array(16) [32, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[[Uint8Array]]: Uint8Array(16) [32, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[[Int16Array]]: Int16Array(8) [32, 43, 0, 0, 0, 0, 0, 0]
[[Int32Array]]: Int32Array(4) [2818080, 0, 0, 0]
byteLength: 16
__proto__: ArrayBuffer
byteLength: 16
byteOffset: 0
__proto__: DataView
```
#### Access data in view
```javascript
let num = view2.getInt8(2);
console.log(num)

//results
43
```

#### Create Dataview that only handles a subset of the buffer:
```javascript
// GO in to define how many number we want to work with inside of a certain view
let view4 = new DataView(testBuffer, 7, 3);

view4.setInt8(0, 54);
view4.setInt8(1, 23);
view4.setInt8(2, 32);
console.log("View4", view4);
console.log("View1 post Views creations", view1);

let numAlert = console.log(view4.getInt8(0))
//result:
54
```
