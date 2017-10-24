// JavaScript Document
$(document).ready(function(){
    showCharts();
})

function showCharts() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            left: 'center',
            data: ['分值'],
            textStyle: {color: '#fff'},
            itemWidth: 50
        },
        xAxis: {
            type: 'category',
            data: ['8.1', '8.2', '8.3', '8.4', '8.5', '8.6', '8.7'],
            axisLine: {
                lineStyle: {color: '#fff'}
            },
            splitLine: {
                show: true,
                lineStyle: {color: '#fff'}
            },
            axisLabel: {
                textStyle: {fontSize: 32}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            min: 80,
            max: 100,
            axisLine: {
                lineStyle: {color: '#fff'}
            },
            splitLine: {
                lineStyle: {color: '#fff'}
            },
            axisLabel: {
                textStyle: {fontSize: 32}
            }
        },
        series: [
            {
                name: '分值',
                type: 'line',
                data: [90,97,87,98,89,84,92],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {color: '#fff', fontSize: 24}
                    }
                },
            }
        ],
        color: ['#0000ff']
    };
    myChart.setOption(option);
}
