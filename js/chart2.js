// JavaScript Document
$(document).ready(function(){
    initBox2();
})

function initBox2() {
    //参数二和参数三需要动态传入
    //参数index为渲染图标索引，currentCount为当前使用，totalCount为总共使用，color需要画的颜色
    showPercentPie(1, 8, 10, '#64c100');
    showPercentPie(2, 9, 10, '#be111d');
    showPercentPie(3, 7, 10, '#cdbc00');
}

//图二的饼图
//参数index为渲染图标索引，currentCount为当前使用，totalCount为总共使用，color需要画的颜色
function showPercentPie(index,currentCount, totalCount, color) {
    console.log(index)
    var myChart = echarts.init(document.getElementById('pieChart' + index));
    var option = {
        series : [
            {
                type: 'pie',
                radius : ['40%','80%'],
                center: ['50%', '50%'],
                label: { normal: {show: false}},
                labelLine: {normal: {show: false}},
                data:[
                    {value:currentCount},
                    {value:totalCount - currentCount}
                ]
            }
        ],
        color: [color, '#cecece']
    };
    myChart.setOption(option);
}

//图二左边的柱状图
function showPage2Bar() {
    var myChart = echarts.init(document.getElementById('barChart'));
    var option = {
        tooltip : {
            trigger: 'axis',
        },
        grid: {
            top: '2%',
            left: '4%',
            right: '8%',
            bottom: '2%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine: {
                    lineStyle: {color: '#fff'}
                },
                axisLabel: {
                    show: true,
                    color: '#fff',
                    fontSize: 21
                },
                data : ['6', '5', '4'],
            }
        ],
        xAxis: {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {show: false}
            },
        },
        yAxis: {
            type: 'category',
            data: ['出所开庭', '公检法办案', '其他'],
            axisLine: {
                lineStyle: {color: '#fff'}
            },
            axisLabel: {
                textStyle: {fontSize: 23}
            }
        },
        series : [
            {
                barCategoryGap: '50%',
                type:'bar',
                data:[10, 52, 67, 54, 78, 98, 56, 88, 32, 43],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'right',
                            color: '#fff',
                            fontSize: 25
                        },
                        
                        color: '#ffa800'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}
//图二右边的柱状图
function showPage2Bar2() {
    
}