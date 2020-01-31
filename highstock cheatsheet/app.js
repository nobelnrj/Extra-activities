Highcharts.getJSON(
    'data2.json',
    function (data) {

        Highcharts.chart('preview-chart', {
            chart: {
                type: 'areaspline',
                width: 250,
                height: 90
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            credits:{
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            xAxis: {
                visible: false
            },
            yAxis: {
                visible: false
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0.5
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        enabled: false
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 2
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                name: 'USD to EUR',
                data: data,
                marker: {
                    enabled: false
                }
            }]
        });
    }
);