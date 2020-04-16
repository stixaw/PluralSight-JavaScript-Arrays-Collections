// Accessing the objects
var yearlyLabel = document.getElementById('yearlyTotal');
var newAmount = document.getElementById('itemAmount');
var newMonth = document.getElementById('monthId');
let hikingRadio = document.getElementById('hiking');
let runningRadio = document.getElementById('running');
let huntingRadio = document.getElementById('hunting');

//Array Buffer
let testBuffer = new ArrayBuffer(16);

// View
let view1 = new Int16Array(testBuffer);

view1[0] = 32;
console.log(view1);

//DataView
let view2 = new DataView(testBuffer);

view2.setInt8(2, 43); //position and value
console.log("View2", view2);

let num = view2.getInt8(2);


let view3 = new DataView(testBuffer);
let num2 = view3.getInt8(2);


// GO in to define how many number we want to work with inside of a certain view
let view4 = new DataView(testBuffer, 7, 3);

view4.setInt8(0, 54);
view4.setInt8(1, 23);
view4.setInt8(2, 32);
console.log("View4", view4);
console.log("View1 post Views creations", view1);

let numAlert = console.log(view4.getInt8(0))


// Add Sales
function addSale(){
	


}

function findSale(){

	

}

// Bar chart
// var monthlySalesChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: [],
//         datasets: [{
//             label: '# of Sales',
//             data: [],
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// Pie Chart
// var deptSalesChart = new Chart(pieCtx, {
//     type: 'pie',
//     data: {
//         labels: deptLabels,
//         datasets: [{
//             label: '# of Sales',
//             data: deptSales,
//             backgroundColor: [
//                 'rgba(238, 184, 104, 1)',
//                 'rgba(75, 166, 223, 1)',
//                 'rgba(239, 118, 122, 1)',
//             ],
//             borderWidth: 0
//         }]
//     },
//     options: {
        
//     }
// })