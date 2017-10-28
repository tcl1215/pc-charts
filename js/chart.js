// JavaScript Document
$(document).ready(function(){
    //初始化右上角时间
    setInterval(setDetailTime, 1000);
    
    initBox1();
    // initBox2();
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
    showPie();
    showBar();
}

function initBox2() {
    //参数二和参数三需要动态传入
    //参数index为渲染图标索引，currentCount为当前使用，totalCount为总共使用，color需要画的颜色
    showPercentPie(1, 8, 10, '#64c100');
    showPercentPie(2, 9, 10, '#be111d');
    showPercentPie(3, 7, 10, '#cdbc00');
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


//饼形图
function showPie() {
    var myChart = echarts.init(document.getElementById('pieChart'));
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'right',
            top:'middle',
            textStyle: {
                color: '#fff',
                fontSize: 21
            },
            data: ['刑事拘留', '逮捕','公安补充侦查','审查起诉','检查补充侦查','一审','二审','发回重审理','死刑复核','待执行','已决']
        },
        series : [
            {
                type: 'pie',
                radius : '70%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                label: { normal: {show: false}},
                data:[
                    {value:535, name: '刑事拘留'},
                    {value:510, name: '逮捕'},
                    {value:634, name: '公安补充侦查'},
                    {value:735, name: '审查起诉'},
                    {value:535, name: '检查补充侦查'},
                    {value:510, name: '一审'},
                    {value:634, name: '二审'},
                    {value:735, name: '发回重审理'},
                    {value:535, name: '死刑复核'},
                    {value:510, name: '待执行'},
                    {value:510, name: '已决'},
                ]
            }
        ],
        color: ['#ff3300', '#00ffd8', '#42ff00', '#ff6700', '#0042ff', '#f8c200', '#5096d6', '#79b553', '#1e3e78', '#925141','#d2d2d2']
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
                data : ['管理及时', '安防设施健康', '基础设施达标', '安防设施达标', '医疗卫生达标', '在押人员风险', '食物量','重点工作进度'],
            }
        ],
        xAxis: {
            type: 'value',
            axisLabel: {
                fontSize: 33,
                color: '#fff'
            },
            axisTick: {
                show: true,
            },
        },
        yAxis: {
            type: 'category',
            data: ['毒品性案件','盗窃类案件','故意伤害案','诈骗类案件','其他','经济类案件','国安类案件'
            ,'职务类案件','抢劫类案件','杀人类案件'],
            axisLine: {
                lineStyle: {color: '#fff'}
            },
            axisLabel: {
                textStyle: {fontSize: 21}
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

//图二的饼图
//参数index为渲染图标索引，currentCount为当前使用，totalCount为总共使用，color需要画的颜色
function showPercentPie(index,currentCount, totalCount, color) {
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
