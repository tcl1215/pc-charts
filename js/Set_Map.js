// JavaScript Document
$(document).ready(function(){
		//////////////////////////////////////
		//////点击地图
		//////////////////////////////////////
		$(".MapClick").mousedown(function(){
			var temp;
			var name = $(this).attr("id");
			if(name == "Door_1" || name == "Door_2" || name == "Door_3" || name == "Door_4"){
				temp = $(this);
			}else{
				temp = $("#" + name + "_Map");
			}
			if(temp.hasClass("NoClick") == true) {
				$(".Tip").fadeOut(200);
				return;
			}
			
			SetTip("","");//清空Tip
			if(name == "BaoShan2" || name == "BaoShan3")  name = "BaoShan";
			//alert(1);
			var id = GetID(name);//这一步 就直接得到点击这个地图的ID  往服务器传值即可
			//在Ajax 等待的时间里  可以调用 Loading(true) 显示等待界面
			//加载完成后 调用 Loading(false)即可关掉 等待界面
			//等加载完内容之后  调用 SetTip(imageUrl,Conn); 即可设置区域4 的图片和内容
			//						imageUrl 就是图片的网络路径  Conn 就是内容
			//
			//
			//
			//下面是显示特效  --- 不用管
			temp.animate({opacity:'0.2'},100,function(){temp.animate({opacity:'1'},200);});
			$(".Tip").fadeOut(0);
			$(".Tip").fadeIn(200);
			
		});
		$(".NoClick").mousedown(function(){
			$(".Tip").fadeOut(200);
		});
});