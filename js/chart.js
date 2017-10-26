// JavaScript Document
$(document).ready(function(){
    //初始化右上角时间
    setInterval(setDetailTime, 1000);
    
    initBox1();
})

function setDetailTime() {
    var date = new Date();
    var str = date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日  "
            +"星期" + "日一二三四五六".charAt(new Date().getDay()) +' '
        + date.getHours()+":"+ (date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes())
        +":"+ (date.getSeconds().toString().length == 1 ? "0" + date.getSeconds() : date.getSeconds());
    $(".current-time").text(str);
}
function initBox1() {
    
    showRadar();
}
//页面1雷达图
function showRadar() {
    var myChart = echarts.init(document.getElementById('radarChart'));
    var option = {
       tooltip: {
           trigger: 'axis'
       },
       radar: [
           {
               name: {
                   color: '#fff'
               },
               indicator: [
                   {text: '总数', max: 35},
                   {text: '重大一级', max: 35},
                   {text: '重大二级', max: 35},
                   {text: '重大三级', max: 35},
                   {text: '紧闭', max: 35},
                   {text: '械具', max: 35},
                   {text: '未成年', max: 35},
                   {text: '新收', max: 35},
                   {text: 'WZ', max: 35}
               ],
               axisLine: {
                   lineStyle: {color: '#fff'}
               },
               splitLine: {
                   lineStyle: {color: '#fff'}
               },
               splitArea: {
                   areaStyle: {color: 'rgba(0,0,0,0)'}
               },
               splitNumber: 7,
           }
       ],
       series: [
           {
               type: 'radar',
               tooltip: {
                   trigger: 'item'
               },
               label: {
                   normal : {show: true, color: '#fff'}
               },
               itemStyle: {normal: {color: '#ffff00'}},
               lineStyle: {normal: {color: '#ffff00'}},
               areaStyle: {normal: {color: '#ffff00', opacity: 0.2}},
               data: [
                   {
                       value: [15, 20, 3, 23, 12, 15, 15,22,8]
                   }
               ]
           }
       ]
   }
    myChart.setOption(option);
}
function initBox3() {
    //图表对应的数据
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
    //显示四个饼状图
    showPie(pieData1);
    showPie(pieData2);
    showPie(pieData3);
    showPie(pieData4);
    
    //显示柱状图
    showBar();
}

//左上图标折线图
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
                symbol: 'pin',
                symbolSize: 10,
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


//左下角图的
function showPie(params) {
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

function showBar() {
    var myChart = echarts.init(document.getElementById('barChart'));
    var option = {
        tooltip : {
            trigger: 'axis',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine: {
                    lineStyle: {color: '#fff'}
                },
                axisLabel: {
                    textStyle: {fontSize: 26}
                },
                data : ['管理及时', '安防设施健康', '基础设施达标', '安防设施达标', '医疗卫生达标', '在押人员风险', '食物量','重点工作进度'],
            }
        ],
        yAxis : [
            {
                type : 'value',
                name: '（人）',
                nameTextStyle: {fontSize: 30},
                max: 100,
                splitNumber:10,
                axisLine: {
                    lineStyle: {color: '#fff'}
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {fontSize: 30}
                }
            }
        ],
        series : [
            {
                name:'人数',
                type:'bar',
                barWidth: 138,
                barGap:  40,
                data:[10, 52, 67, 54, 78, 98, 56, 88],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            color: '#fff',
                            fontSize: 50
                        },
                        
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#d0ff23'},
                                {offset: 0.5, color: '#60ff86'},
                                {offset: 1, color: '#00ffff'}
                            ]
                        )
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
}
