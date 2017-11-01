// JavaScript Document
$(document).ready(function(){
    //初始化页面数据
    updateData();
    setInterval(setTime, 1000);
    
    //////点击地图
    //////////////////////////////////////
    $(".MapClick").click(function(){
        var temp;
        var name = $(this).attr("id");
        if(name == "baoshan2" || name == "baoshan3")  {
            name = "baoshan";
            temp = $("#" + name + "Map");
        }
        else if(name == "door1" || name == "door2" || name == "door3" || name == "door4"){
            temp = $(this);
        }else{
            temp = $("#" + name + "Map");
        }
        temp.animate({opacity:'0.2'},100,function(){temp.animate({opacity:'1'},200);});
    
        //展示弹框，
        showTip();
        
    });
    
    $(".tip-close").click(function(){
        $(".tip").fadeOut(100);
    });
});

//todo 页面数据渲染，填入真实数据
function updateData() {
    initLeftBar();
    initBtmLine();
    showRadar();
    showRanking();
}

//左侧柱状图
function initLeftBar() {
    var myChart = echarts.init(document.getElementById('leftBar'));
    //左侧条纹图
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data: ['押量', '风险情况'],
            top: 70,
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            left: 38,
            top: 106,
            bottom: 23,
            right: 40,
            containLabel: true
        },
        xAxis:  {
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                color: '#00cfff',
                fontSize: 18,
                formatter: function (value, index) {
                    return value/1000 + 'k'
                }
            },
            type: 'value',
            splitLine:{show: false},//去除网格线
            max: 5000,
            splitNumber: 5,
            
        },
        yAxis: {
            type: 'category',
            axisLine: {show: false},
            axisLabel: {color: '#fff', fontSize: 16},
            data: ['黄浦区','徐汇区','静安区','长宁区','普陀区','虹口区','杨浦区','浦东新区',
            '闵行区','奉贤区','松江区','金山区','青浦区','嘉定区','宝山区','崇明区']
        },
        series: [
            {
                type: 'bar',
                stack: '总量',
                name: '押量',
                barWidth: 12,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#fff'
                    }
                },
                //押量对应数据
                data: [320, 302, 301, 334, 1220, 330, 320,320, 302, 301, 334, 390, 330, 320, 890, 230]
            },
            {
                type: 'bar',
                stack: '总量',
                name: '风险情况',
                barWidth: 12,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color: '#fff'
                    }
                },
                //风险情况对应数据
                data: [3200, 3020, 5000, 3340, 3900, 3300, 3200,3200, 3002, 3001, 3034, 3090, 3300, 3200, 4090, 2030]
            }
        ],
        color: ['#ffff00', '#5e53dd']
    };
   myChart.setOption(option);
}

function setTime() {
    var date = new Date();
    var str = date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate()+"."+date.getHours()+":"+ (date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes());
    $(".current-time").text(str);
}

//底测折线图
function initBtmLine() {
    var myChart = echarts.init(document.getElementById('btmLine'));
    
   var option = {
   tooltip: {
       trigger: 'axis'
   },
   legend: {
       data:['崇明区','宝山区','嘉定区','青浦区','金山区','松江区','奉贤区','闵行区','浦东新区','杨浦区','虹口区',
            '普陀区','长宁区','静安区','徐汇区','黄浦区'],
       top: 15,
       right: 45,
       textStyle: {fontSize: 16, color: '#fff'},
       itemGap: 22
   },
   grid: {
       left: 52,
       top: 55,
       bottom: 36,
       right: 45,
       containLabel: true
   },
   xAxis: {
       name: '9月',
       type: 'category',
       nameLocation: 'start',
       nameTextStyle: {fontSize: 24,padding: [40, 0,0, 50],color: '#fff',},
       axisLine: {lineStyle: {color: '#1c486f'}},
       axisTick: {show: false},
       axisLabel: {
           color: '#fff',
           fontSize: 24
       },
       splitLine:{show: true, lineStyle: {color: '#1c486f'}},//去除网格线
       boundaryGap: true,
       data: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14',
           '15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
   },
   yAxis: {
       type: 'value',
       axisLine: {show: false},
       axisTick: {show: false},
       axisLabel: {
           color: '#fff',
           fontSize: 18
       },
       splitLine:{show: false},//去除网格线
   },
   series: [
       {
           name:'崇明区',
           type:'line',
           smooth: true,
           data:[54, 43, 65, 76, 87, 65, 76, 87, 98, 76,54, 43, 65, 76, 87, 65, 76, 87, 98, 76,]
       },
       {
           name:'宝山区',
           type:'line',
           smooth: true,
           data:[ 65, 76, 87, 98, 76,54, 43, 65, 76, 87,98, 76,54, 43, 65, 76, 87, 65, 76, 87, 98]
       },
       {
           name:'嘉定区',
           type:'line',
           smooth: true,
           data:[76, 87, 98, 76,54, 43, 65, 76, 87, 76,54, 43, 65, 76, 87, 65, 76, 87]
       },
       {
           name:'青浦区',
           type:'line',
           smooth: true,
           data:[, 76,54, 43, 65, 76, 87, 65, 76, 87, 98, 76,54, 43, 65, 76, 87, 76,54]
       },
       {
           name:'金山区',
           type:'line',
           smooth: true,
           data:[ 87, 65, 76, 87, 98, 76,54, 43, 65, 76, 87, 76,54, 87, 65, 76, 87, 98, 76,54, 43, 65, 76]
       },
       {
           name:'松江区',
           type:'line',
           smooth: true,
           data:[98, 76,54, 43, 65, 76, 87, 76,54, 87, 65, 76, 98, 76,54, 43, 65, 76, 87, 76,54, 87, 65]
       },
       {
           name:'奉贤区',
           type:'line',
           smooth: true,
           data:[43, 65, 76, 87, 76,54, 87, 65, 76, 98,43, 65, 76, 87, 76,54, 87, 65, 76, 98]
       },
       {
           name:'闵行区',
           type:'line',
           smooth: true,
           data:[76,54, 87, 65, 76, 98,43, 65, 76, 87, 76,54, 87, 65, 76,76,54, 87, 65, 76, 98,43, 65, 76]
       },
       {
           name:'浦东新区',
           type:'line',
           smooth: true,
           data:[65, 76, 98,43, 65, 76, 87, 76,54, 87, 65,76, 98,43, 65, 76, 87, 76,5,76, 98,43, 65, 76, 87]
       },
       {
           name:'杨浦区',
           type:'line',
           smooth: true,
           data:[5, 76, 87, 76,54, 87, 65,76, 98,43, 65, 76, 87, 76,5, 76, 87, 76,54, 87, 65,76, 98,43, 65, 76]
       },
       {
           name:'虹口区',
           type:'line',
           smooth: true,
           data:[54, 87, 65,76, 98,43, 65, 76, 87, 76,5, 76, 87, 76,54, 87,54, 87, 65,76, 98,43, 65, 76,87]
       },
       {
           name:'普陀区',
           type:'line',
           smooth: true,
           data:[7, 65,76, 98,43, 65, 76, 87, 76,5, 76, 87, 76,5,47, 65,76, 98,43, 65, 76, 87, 76,5, 76, 87, 76]
       },
       {
           name:'长宁区',
           type:'line',
           smooth: true,
           data:[13, 65, 76, 87, 76,5, 76, 87, 76,5,47, 65,76, 98,43, 65, 76, 87, 7,3, 65, 76, 87, 76,5, 76,98, 65]
       },
       {
           name:'静安区',
           type:'line',
           smooth: true,
           data:[87, 76,5, 76, 87, 76,5,47, 65,76,3, 65, 76, 87, 76,5, 76, 87, 76,5,47, 65,76, 98,43, 65, 76, 87, 7]
       },
       {
           name:'徐汇区',
           type:'line',
           smooth: true,
           data:[5,47, 65,76,3, 65, 76, 87, 76,5, 76, 87, 76,5,47, 65,76, 98,43, 65,5,47, 65,76,65, 76, 87, 65,43, 65]
       },
       {
           name:'黄浦区',
           type:'line',
           smooth: true,
           data:[76, 98,43, 65,5,47,76, 98,43, 65,5,47,76, 98,43, 65,5,47,76, 98,43, 65,5,47,76, 98,43, 65,5,47,]
       }
   ],
   color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#ffff00', '#5e53dd', '#fff', '#ff0000', '#00ffff']
};
    myChart.setOption(option);
}

//展示右侧排行榜
function showRanking() {
    //todo 静态数据，后续替换
    var ranking = [{
        name: '崇明区',
        grade: 98
    },{
        name: '宝山区',
        grade: 97
    },{
        name: '嘉定区',
        grade: 95
    },{
        name: '青浦区',
        grade: 80
    },{
        name: '金山区',
        grade: 60
    },{
        name: '松江区',
        grade: 58
    },{
        name: '奉贤区',
        grade: 56
    },{
        name: '闵行区',
        grade: 52
    },{
        name: '浦东新区',
        grade: 50
    },{
        name: '杨浦区',
        grade: 48
    },{
        name: '虹口区',
        grade: 45
    },{
        name: '普陀区',
        grade: 42
    },{
        name: '长宁区',
        grade: 40
    },{
        name: '静安区',
        grade: 36
    },{
        name: '徐汇区',
        grade: 32
    },{
        name: '黄浦区',
        grade: 28
    }]
    
    var html = ''
    ranking.forEach(function(obj, index) {
        //根据分数占比，算出显示长度
        html += '<li class="level'+(index + 1)+'"><div class="r-index">'+(index + 1)+'</div><div class="r-name">'+obj.name+'</div><div class="grade-box"><div class="r-progress"><i style="width: '+ obj.grade * 141/100+'px"></i></div><div class="r-grade">'+obj.grade+'</div></div></li>'
    })
    $('.right-box ul').html(html);
}

//todo 展示弹框内容，为其赋值
function showTip() {
    showRadar();
    
    $(".tip").fadeOut(0);
    $(".tip").fadeIn(200);
}
//弹出框雷达图
function showRadar() {
    var myChart = echarts.init(document.getElementById('indexRadar'));
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
                    {text: '在押人员', max: 100, min: 50},
                    {text: '民警管理', max: 100, min: 50},
                    {text: '基础设施', max: 100, min: 50},
                    {text: '安防设施', max: 100, min: 50},
                    {text: '客观因素', max: 100, min: 50}
                ],
                axisLine: {
                    show: false
                },
                splitLine: {
                    lineStyle: {color: '#fff'}
                },
                splitArea: {
                    areaStyle: {color: 'rgba(0,0,0,0)'}
                },
                splitNumber: 6,
            }
        ],
        series: [
            {
                type: 'radar',
                tooltip: {
                    trigger: 'item'
                },
                label: {
                    normal : {show: true, color: '#fff', textStyle: {fontSize: 18}}
                },
                itemStyle: {normal: {color: '#ffff00'}},
                lineStyle: {normal: {color: '#ffff00'}},
                areaStyle: {normal: {color: '#ffff00', opacity: 0.2}},
                data: [
                    {
                        value: [55, 65, 76, 76, 92]
                    }
                ]
            }
        ]
    }
    myChart.setOption(option);
}