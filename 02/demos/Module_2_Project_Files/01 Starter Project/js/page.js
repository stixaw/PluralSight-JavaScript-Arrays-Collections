// Charts
const ctx = document.getElementById('monthlySales').getContext('2d');
const pieCtx = document.getElementById('deptSales').getContext('2d');
const yearlyLabel = document.getElementById('yearlyTotal');
let yearlyTotal = 0;
let total;

let octNums = Array.of(12000, 1000, 9000)
let novNums = Array.of(11000, 2000, 5000)
let decNums = Array.of(4000, 1000, 5000)

total = Array.of(monthlyTotal(...octNums), monthlyTotal(...novNums), monthlyTotal(...decNums));

let monthlySales = Array.of(...total); // should be  ...total
let monthlyLabels = Array.of('Oct', 'Nov', 'Dec');

monthlySales.forEach(addYearlyTotal);

let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');

function monthlyTotal(a,b,c){
    result = a + b + c;
    return result;
}

function addYearlyTotal(x) {
    yearlyTotal = x + yearlyTotal;
    // return a + b + c;
}

//can be used to filter
function findOver1000(){
	let firstThousand = monthlySales.findIndex(element => element > 1000);
	alert(firstThousand);
}

function resetNum(){
	monthlySales.fill(0);
	monthlySalesChart.update();
}

// let yearlyTotal = addYearlyTotal(...monthlySales);
yearlyLabel.innerHTML = `$${yearlyTotal}`

// Bar
var monthlySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: monthlyLabels,
        datasets: [{
            label: '# of Sales',
            data: monthlySales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Pie
var deptSalesChart = new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: deptLabels,
        datasets: [{
            label: '# of Sales',
            data: deptSales,
            backgroundColor: [
                'rgba(238, 184, 104, 1)',
                'rgba(75, 166, 223, 1)',
                'rgba(239, 118, 122, 1)',
            ],
            borderWidth: 0
        }]
    },
    options: {
        
    }
})
