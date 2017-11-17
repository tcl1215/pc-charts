function Loading(isShow){
    if(isShow == true)
    $("#loading").fadeIn(100);
    else
    $("#loading").fadeOut(100);
}

//获取url中的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}