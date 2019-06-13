var ctx = document.getElementById('verificationChart').getContext('2d');
var data = {
    labels: [
        'Confirmed',
        'Provisional',
        'Differential',
        'Refuted',
        'Entered in Error'
    ],
    datasets: [
        {
            label: '14.03.2019',
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
            pointBorderWidth: 1,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'brown',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            // notice the gap in the data and the spanGaps: true
            data: [12, 11, 6, 21, 0],
            spanGaps: true
        },
        {
            label: '17.04.2019',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(237,125,49,0.8)',
            borderColor: 'rgb(167, 105, 0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // notice the gap in the data and the spanGaps: false
            data: [5, 6, 8, 23, 1],
            spanGaps: false
        },
        {
            label: '01.05.2019',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(165,165,165,0.8)',
            borderColor: 'rgb(167, 105, 0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            // notice the gap in the data and the spanGaps: false
            data: [7, 9, 4, 14, 1],
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
                    labelString: 'Verification Status',
                    fontSize: 30
                },
                gridLines: {
                    display: false
                }
            }
        ]
    },
    maintainAspectRatio: false
};

// Chart declaration:
var verificationBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
