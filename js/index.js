//记录当前选中菜单，先获取参数中的选中index,如没有默认第0个
var tabIndex = getQueryString('tabIndex') || 0;

var tabName = '';

var modeIndex = 0; //默认选中考核模式
var modeName = '';

//定义setTimeout执行方法
var time = null;

$(document).ready(function(){
    
    setInterval(setTime, 1000);
    
    //双击地图, 跳转到对应板块的详情页面
    $(".MapClick").dblclick(function () {
        // 取消上次延时未执行的方法
        clearTimeout(time);
        
        var name = $(this).attr("id");
        if(name == "baoshan2" || name == "baoshan3")  {
            name = "baoshan";
        }
        window.location.href = 'chart.html?name=' + name;
    });
    
    //点击地图
    $(".MapClick").click(function(){
        var that = this;
        // 取消上次延时未执行的方法
        clearTimeout(time);
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
    
        //执行延时，防止双击时触发单击事件
        time = setTimeout(function(){
            //展示弹框，
            showTip();
        }, 200);
        
        
    });
    
    $('.nav-top-ul li').click(function() {
        if ($(this).hasClass('selected')) {
            return;
        }
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
    
        tabName = $(this).attr("id");
        tabIndex = $(this).index();
        
        if(tabName == 'ImportantTips') {
            window.location.href = 'important-tips.html'
        }
        else if(tabName == 'RankingList') {
            //排行榜，更新页面
            alert('排行榜页面')
        }
        else {
            //当前页面的tab，点击完，模拟点击模式
            $('.filter-box').find('li')[modeIndex].click();
        }
    });
    
    // 模式切换
    $(".filter-box li").click(function () {
        if ($(this).hasClass('selected')) {
            return;
        }
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        
        modeName = $(this).attr("id");
        modeIndex = $(this).index();
        
        updateData();
    });
    
    //初始化页面数据
    $('.nav-top-ul').find('li')[tabIndex].click();
    
    $(".tip-close").click(function(){
        $(".tip").fadeOut(100);
    });
});

//todo 页面数据渲染，填入真实数据
function updateData() {
    //tabIndex菜单索引 & modeIndex 模式索引   tabName 菜单名字 & modeName 模式名字 可通过全局的以上变量判断当前选择的tab
    
    //Loading(true);  请求数据时打开loading样式
    //Loading(false); 请求完数据时关闭loading
    initLeftBar();
    initBtmLine();
    showRanking();
    
    showMap();
}


//todo 静态数据，需改成动态渲染
var mapData = [
    //name 对应中文名， alias对应拼音，grade对应分数，type用于区分区域所还是总所
    {name: '崇明区',alias: 'congming',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '宝山区',alias: 'baoshan',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '嘉定区',alias: 'jiading',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '青浦区',alias: 'qingpu',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '金山区',alias: 'jinshan',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '松江区',alias: 'songjiang',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '奉贤区',alias: 'fengxian',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '闵行区',alias: 'minhang',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '浦东新区',alias: 'pudong',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '杨浦区',alias: 'yangpu',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '虹口区',alias: 'hongkou',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '普陀区',alias: 'putuo',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '长宁区',alias: 'changning',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '静安区',alias: 'jingan',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '徐汇区',alias: 'xuhui',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '黄浦区',alias: 'huangpu',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '上海市区',alias: 'shiqu',grade: parseInt(Math.random()*100), type: 'area'},
    {name: '第一看守所',alias: 'door1',grade: parseInt(Math.random()*100), type: 'main'},
    {name: '第二看守所',alias: 'door2',grade: parseInt(Math.random()*100), type: 'main'},
    {name: '第三看守所',alias: 'door3',grade: parseInt(Math.random()*100), type: 'main'},
    {name: '第四看守所',alias: 'door4',grade: parseInt(Math.random()*100), type: 'main'}]

//地图色块显示
function showMap() {
    //mapData 为后台获取数据
    mapData.forEach(function(data) {
        var color = 'green';
        if (data.grade >= 80) {
            color = 'green';
        }
        else if (data.grade < 80 && data.grade > 60) {
            color = 'yellow';
        }
        else if (data.grade <= 60) {
            color = 'red';
        }
        if(data.type == 'area') {
            $("#" + data.alias + "Map").find("img").attr("src","imgs/maps/area/"+data.alias+"-"+color+".png");
        } else {
            var temp = $("#" + data.alias).find('door-img');
            temp.removeClass('red').removeClass('yellow').removeClass('green');
            temp.addClass(color);
        }
    })
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
                fontSize: 16,
                fontFamily: 'sszh'
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
    //todo 静态测试数据，后续替换
    var rankingData = [
        {name: '崇明区',grade: 98},
        {name: '宝山区',grade: 97},
        {name: '嘉定区',grade: 95},
        {name: '青浦区',grade: 80},
        {name: '金山区',grade: 60},
        {name: '松江区',grade: 58},
        {name: '奉贤区',grade: 56},
        {name: '闵行区',grade: 52},
        {name: '浦东新区',grade: 50},
        {name: '杨浦区',grade: 48},
        {name: '虹口区',grade: 45},
        {name: '普陀区',grade: 42},
        {name: '长宁区',grade: 40},
        {name: '静安区',grade: 36},
        {name: '徐汇区',grade: 32},
        {name: '黄浦区',grade: 28}]
    var html = ''
    rankingData.forEach(function(obj, index) {
        //根据分数占比，算出显示长度
        html += '<li class="level'+(index + 1)+'"><div class="r-index">'+(index + 1)+'</div><div class="r-name">'+obj.name+'</div><div class="grade-box"><div class="r-progress"><i style="width: '+ obj.grade * 141/100+'px"></i></div><div class="r-grade">'+obj.grade+'</div></div></li>'
    });
    $('.right-box ul').html(html);
}

//todo 展示弹框内容，为其赋值
function showTip() {
    $(".tip").fadeOut(0);
    $(".tip").fadeIn(200);
    showRadar();
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