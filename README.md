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
###
