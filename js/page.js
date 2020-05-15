// Charts

let ctx = document.getElementById('monthlySales').getContext('2d');
let pieCtx = document.getElementById('deptSales').getContext('2d');
let yearlyLabel = document.getElementById('yearlyTotal');

let monthlySales = [1200,900,300];
let monthlyLabels = ['Oct', 'Nov', 'Dec'];

let deptSales = [12, 19, 3];
let deptSalesLabels = ['Hiking', 'Running', 'Hunting'];

let yearlyTotal = 0;

function addYearlyTotal(x) {
    yearlyTotal += x;
}

monthlySales.forEach(addYearlyTotal);

function findOver1000() {
    let number =  monthlySales.find(element => element > 1000);
    alert(number);
}

function resetNum() {
    monthlySales.fill(0, 0, 1);
    monthlySalesChart.update();
}

yearlyLabel.innerHTML = "$" + yearlyTotal;

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
        labels: deptSalesLabels,
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