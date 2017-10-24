// JavaScript Document
$(document).ready(function(){
    var pieData1 = {
        index: 1,
        name: '一监区',
        data: [
            {value:335, name:'a'},
            {value:310, name:'b'},
            {value:234, name:'c'},
            {value:135, name:'d'}
        ]
    }
    var pieData2 = {
        index: 2,
        name: '二监区',
        data: [
            {value:335, name:'a'},
            {value:310, name:'b'},
            {value:234, name:'c'},
            {value:135, name:'d'}
        ]
    }
    var pieData3 = {
        index: 3,
        name: '三监区',
        data: [
            {value:335, name:'a'},
            {value:310, name:'b'},
            {value:234, name:'c'},
            {value:135, name:'d'}
        ]
    }
    var pieData4 = {
        index: 4,
        name: '四监区',
        data: [
            {value:335, name:'a'},
            {value:310, name:'b'},
            {value:234, name:'c'},
            {value:135, name:'d'}
        ]
    }
    showCharts(pieData1);
    showCharts(pieData2);
    showCharts(pieData3);
    showCharts(pieData4);
});

function showCharts(params) {
    var myChart = echarts.init(document.getElementById('main' + params.index));
    var option = {
        title: {
            left: 'center',
            bottom: '10',
            text: params.name,
            textStyle: {
                color: '#fff',
                fontSize: '36'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name: params.name,
                type:'pie',
                radius: ['50%', '70%'],
                label: {
                    normal: {
                        show: true,
                        formatter: '扣分项 \n {b}: {c}',
                        position: 'inside',
                        textStyle: {
                            fontSize: '22'
                        }
                    }
                },
                data:params.data
            }
        ],
        color: ['#0000ff','#ff6800','#bdbdbd','#fdbf00']
    };
    myChart.setOption(option);
}
