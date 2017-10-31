// JavaScript Document
$(document).ready(function(){
		//////////////////////////////////////
		//////点击地图
		//////////////////////////////////////
		$(".MapClick").click(function(){
			var temp;
			var name = $(this).attr("id");
            if(name == "baoshan2" || name == "baoshan3")  {
                name = "baoshan";
            }
			else if(name == "door1" || name == "door2" || name == "door3" || name == "door4"){
				temp = $(this);
			}else{
				temp = $("#" + name + "Map");
			}
            
			// 下面是显示特效  --- 不用管
			temp.animate({opacity:'0.2'},100,function(){temp.animate({opacity:'1'},200);});
			$(".tip").fadeOut(0);
			$(".tip").fadeIn(200);
			
		});
});