var ctx = document.getElementById('clinicalChart').getContext('2d');
var data = {
    labels: [
        'Active',
        'Recurrence',
        'Relapse',
        'Inactive',
        'Remission',
        'Resolved'
    ],
    datasets: [
        {
            label: '13.03.2019',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(68,114,196,0.8)',
            borderColor: 'red', // The main line color
            borderCapStyle: 'square',
            borderDash: [], // try [5, 15] for instance
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'black',
            pointBackgroundColor: 'white',
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [10, 12, 9, 5, 21, 5],
            spanGaps: true
        },
        {
            label: '20.04.2019',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(237,125,49,0.8)',
            borderColor: 'rgb(167, 105, 0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // notice the gap in the data and the spanGaps: false
            data: [4, 5, 8, 8, 17, 8],
            spanGaps: false
        },
        {
            label: '05.05.2019',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(165,165,165,0.8)',
            borderColor: 'rgb(167, 105, 0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // notice the gap in the data and the spanGaps: false
            data: [3, 7, 6, 3, 20, 10],
            spanGaps: false
        },
        {
            label: '01.06.2019',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255,192,0,0.8)',
            borderColor: 'rgb(167, 105, 0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // notice the gap in the data and the spanGaps: false
            data: [7, 2, 0, 2, 9, 6],
            spanGaps: false
        }
    ]
};

// Notice the scaleLabel at the same level as Ticks
var options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: 'Clinical Status',
                    fontSize: 30,
                    gridLines: {
                        display: false
                    }
                }
            }
        ]
    },
    maintainAspectRatio: false
};

// Chart declaration:
var clinicalBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
