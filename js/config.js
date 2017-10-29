// JavaScript Document
$(document).ready(function(){
	$(".Sub_Nav_Top").slideUp(0);
	$("#ShangHai_Arrow").fadeIn(0);
	$("#ShangHai_Small").fadeIn(0);
	// SetShangHai();
	$(".Tip_Close").click(function(){
			$(".Tip").fadeOut(100);
	});
	//
	Remove();
    if(screen.width >= 3840) {
        //alert(3840 +":::"+ screen.width);
    }
	else if(screen.width >= 1920){
		//alert(1920 +":::"+ screen.width);
		$(".whole").addClass("whole_1920");
	}else if(screen.width >= 1600){
		//alert(1600 +":::"+ screen.width);
		$(".whole").addClass("whole_1600");
	}else if(screen.width >= 1440){
		//alert(1440 +":::"+ screen.width);
		$(".whole").addClass("whole_1440");
	}else if(screen.width >= 1366){
        //alert(1336 +":::"+ screen.width);
        $(".whole").addClass("whole_1366");
    }else{
		//alert(1280 +":::"+ screen.width);
		$(".whole").addClass("whole_1280");
	}
});
function Remove()
{
	$(".whole").removeClass("whole_1920");
	$(".whole").removeClass("whole_1600");
	$(".whole").removeClass("whole_1440");
	$(".whole").removeClass("whole_1366");
	$(".whole").removeClass("whole_1280");
}
// function SetTip(imageUrl,Conn)
// {
// 	$("#Tip_Img").attr("src",imageUrl);
// 	$("#Tip_Text").text(Conn);
// }
// function GetID(name){
// 		if(name == "ChangNing"){//上海市长宁区看守所
// 			return 310105111;
// 		}else if(name == "Door_1"){//上海市第一看守所
// 			return 310000111;
// 		}else if(name == "Door_2"){//上海市第2看守所
// 			return 310000112;
// 		}else if(name == "Door_3"){//上海市第3看守所
// 			return 310000113;
// 		}else if(name == "Door_4"){//上海市第4看守所
// 			return 310000114;
// 		}else if(name == "JingAn"){//上海市静安区看守所
// 			return 310106111;
// 		}else if(name == "YangPu"){//上海市杨浦区看守所
// 			return 310110111;
// 		}else if(name == "HuangPu"){//上海市黄浦区看守所
// 			return 310101111;
// 		}else if(name == "PuDong"){//上海市浦东新区看守所
// 			return 310115111;
// 		}else if(name == "MinHang"){//上海市闵行区看守所
// 			return 310112111;
// 		}else if(name == "SongJiang"){//上海市松江区看守所
// 			return 310117111;
// 		}else if(name == "HongHou"){//上海市虹口区看守所
// 			return 310109111;
// 		}else if(name == "FengXian"){//上海市奉贤区看守所
// 			return 310225111;
// 		}else if(name == "310103111"){//上海市卢湾区看守所
//
// 		}else if(name == "JinShan"){//上海市金山区看守所
// 			return 310228111;
// 		}else if(name == "PuTuo"){//上海市普陀区看守所
// 			return 310107111;
// 		}else if(name == "CongMing"){//上海市崇明县看守所
// 			return 310230111;
// 		}else if(name == "QingPu"){//上海市青浦区看守所
// 			return 310229111;
// 		}else if(name == "BaoShan"){//上海市宝山区看守所
// 			return 310111111;
// 		}else if(name == "XuHui"){//上海市徐汇区看守所
// 			return 310104111;
// 		}else if(name == "310108111"){//上海市闸北区看守所
//
// 		}else if(name == "JiaDing"){//上海市嘉定区看守所
// 			return 310222111;
// 		}
// 	}
// function SetMap(ID,number){
// 		if(ID == "310105111"){//上海市长宁区看守所
// 			ChangColor("SmallMap","ChangNing",number);
// 		}else if(ID == "310000111"){//上海市第一看守所
// 			ChangColor("Door","Door_1",number);
// 		}else if(ID == "310000112"){//上海市第2看守所
// 			ChangColor("Door","Door_2",number);
// 		}else if(ID == "310000113"){//上海市第3看守所
// 			ChangColor("Door","Door_3",number);
// 		}else if(ID == "310000114"){//上海市第4看守所
// 			ChangColor("Door","Door_4",number);
// 		}else if(ID == "310106111"){//上海市静安区看守所
// 			ChangColor("SmallMap","JingAn",number);
// 		}else if(ID == "310110111"){//上海市杨浦区看守所
// 			ChangColor("SmallMap","YangPu",number);
// 		}else if(ID == "310101111"){//上海市黄浦区看守所
// 			ChangColor("SmallMap","HuangPu",number);
// 		}else if(ID == "310115111"){//上海市浦东新区看守所
// 			ChangColor("BigMap","PuDong",number);
// 		}else if(ID == "310112111"){//上海市闵行区看守所
// 			ChangColor("BigMap","MinHang",number);
// 		}else if(ID == "310117111"){//上海市松江区看守所
// 			ChangColor("BigMap","SongJiang",number);
// 		}else if(ID == "310109111"){//上海市虹口区看守所
// 			ChangColor("SmallMap","HongKou",number);
// 		}else if(ID == "310225111"){//上海市奉贤区看守所
// 			ChangColor("BigMap","FengXian",number);
// 		}else if(ID == "310103111"){//上海市卢湾区看守所
//
// 		}else if(ID == "310228111"){//上海市金山区看守所
// 			ChangColor("BigMap","JinShan",number);
// 		}else if(ID == "310107111"){//上海市普陀区看守所
// 			ChangColor("SmallMap","PuTuo",number);
// 		}else if(ID == "310230111"){//上海市崇明县看守所
// 			ChangColor("BigMap","CongMing",number);
// 		}else if(ID == "310229111"){//上海市青浦区看守所
// 			ChangColor("BigMap","QingPu",number);
// 		}else if(ID == "310111111"){//上海市宝山区看守所
// 			ChangColor("BigMap","BaoShan",number);
// 		}else if(ID == "310104111"){//上海市徐汇区看守所
// 			ChangColor("SmallMap","XuHui",number);
// 		}else if(ID == "310108111"){//上海市闸北区看守所
//
// 		}else if(ID == "310222111"){//上海市嘉定区看守所
// 			ChangColor("BigMap","JiaDing",number);
// 		}
//
//
//
// 	}
// function ChangColor(category,name,number){
// 	var color = "";
// 	if(number <= 100 && number > 0){
// 		color = "Red";
// 	}else if(number <= 200 && number > 100){
// 		color = "Yellow";
// 	}else if(number <= 300 && number > 200){
// 		color = "Green";
// 	}else if(number <= 0){
// 		color = "Gray";
// 	}
// 	var temp;
// 	if(category == "BigMap"){
// 		temp = $("#" + name + "_Map");
// 		$("#" + name + "_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/"+name+"_"+color+".png");
// 	}else if(category == "SmallMap"){
// 		temp = $("#" + name + "_Map");
// 		$("#" + name + "_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/"+name+"_"+color+".png");
// 	}else if(category == "Door"){
// 		temp = $("#" + name);
// 		$("#" + name).find(".Door_Img img").attr("src","Images/ShangHaiMap/Door/Door_"+color+".png");
// 	}
// 	if(temp.hasClass("NoClick") == false && color == "Gray"){
// 		temp.addClass("NoClick");
// 	}
// }
// function ChangPeople(category,name,number){
// 	var str = "";
// 	if(number < 0){
// 		str = "无权限";
// 	}else{
// 		str = number + "人";
// 	}
// 	var temp;
// 	if(category == "Map"){
// 		$("#" + name + "_Map").find(".Big_Map_Value_Title").text(str);
// 		temp = $("#" + name + "_Map");
// 	}else if(category == "Door"){
// 		$("#" + name).find(".Big_Map_Value_Title").text(str);
// 		temp = $("#" + name);
// 	}
// 	if(temp.hasClass("NoClick") == false && number < 0){
// 		temp.addClass("NoClick");
// 	}
// }
// function SetPeople(ID,number){
// 	if(ID == "310105111"){//上海市长宁区看守所
// 		ChangPeople("Map","ChangNing",number);
// 	}else if(ID == "310000111"){//上海市第一看守所
// 		ChangPeople("Door","Door_1",number);
// 	}else if(ID == "310000112"){//上海市第2看守所
// 		ChangPeople("Door","Door_2",number);
// 	}else if(ID == "310000113"){//上海市第3看守所
// 		ChangPeople("Door","Door_3",number);
// 	}else if(ID == "310000114"){//上海市第4看守所
// 		ChangPeople("Door","Door_4",number);
// 	}else if(ID == "310106111"){//上海市静安区看守所
// 		ChangPeople("Map","JingAn",number);
// 	}else if(ID == "310110111"){//上海市杨浦区看守所
// 		ChangPeople("Map","YangPu",number);
// 	}else if(ID == "310101111"){//上海市黄浦区看守所
// 		ChangPeople("Map","HuangPu",number);
// 	}else if(ID == "310115111"){//上海市浦东新区看守所
// 		ChangPeople("Map","PuDong",number);
// 	}else if(ID == "310112111"){//上海市闵行区看守所
// 		ChangPeople("Map","MinHang",number);
// 	}else if(ID == "310117111"){//上海市松江区看守所
// 		ChangPeople("Map","SongJiang",number);
// 	}else if(ID == "310109111"){//上海市虹口区看守所
// 		ChangPeople("Map","HongKou",number);
// 	}else if(ID == "310225111"){//上海市奉贤区看守所
// 		ChangPeople("Map","FengXian",number);
// 	}else if(ID == "310103111"){//上海市卢湾区看守所
//
// 	}else if(ID == "310228111"){//上海市金山区看守所
// 		ChangPeople("Map","JinShan",number);
// 	}else if(ID == "310107111"){//上海市普陀区看守所
// 		ChangPeople("Map","PuTuo",number);
// 	}else if(ID == "310230111"){//上海市崇明县看守所
// 		ChangPeople("Map","CongMing",number);
// 	}else if(ID == "310229111"){//上海市青浦区看守所
// 		ChangPeople("Map","QingPu",number);
// 	}else if(ID == "310111111"){//上海市宝山区看守所
// 		ChangPeople("Map","BaoShan",number);
// 	}else if(ID == "310104111"){//上海市徐汇区看守所
// 		ChangPeople("Map","XuHui",number);
// 	}else if(ID == "310108111"){//上海市闸北区看守所
//
// 	}else if(ID == "310222111"){//上海市嘉定区看守所
// 		ChangPeople("Map","JiaDing",number);
// 	}
//
// }
//
// function Clear(isClearNav_Top){
//
// 	$(".Sub_Nav_Top_UL li").each(function(){
// 		$(this).removeClass("Sub_Nav_Top_Click");
// 	});
// 	$(".Middle_Left_Nav ul li").each(function(){
// 		$(this).removeClass("Middle_Left_Nav_Click");
// 	});
// 	if(isClearNav_Top == true){
// 		$(".Nav_Top_UL li").each(function(){
// 			$(this).removeClass("Nav_Top_Click");
// 		});
// 	}
// }
// function ChangeMap(color){
// 	//Big_Map
// 	$("#BaoShan_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/BaoShan_"+color+".png");
// 	$("#SongJiang_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/SongJiang_"+color+".png");
// 	$("#FengXian_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/FengXian_"+color+".png");
// 	$("#JiaDing_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/JiaDing_"+color+".png");
// 	$("#JinShan_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/JinShan_"+color+".png");
// 	$("#MinHang_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/MinHang_"+color+".png");
// 	$("#PuDong_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/PuDong_"+color+".png");
// 	$("#QingPu_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/QingPu_"+color+".png");
// 	$("#ShangHai_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/ShangHai_"+color+".png");
// 	$("#CongMing_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/CongMing_"+color+".png");
// 	//Small_Map
// 	$("#ChangNing_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/ChangNing_"+color+".png");
// 	$("#HongKou_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/HongKou_"+color+".png");
// 	$("#HuangPu_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/HuangPu_"+color+".png");
// 	$("#JingAn_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/JingAn_"+color+".png");
// 	$("#PuTuo_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/PuTuo_"+color+".png");
// 	$("#XuHui_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/XuHui_"+color+".png");
// 	$("#YangPu_Map").find(".Small_Map_Img img").attr("src","Images/ShangHaiMap/Small/YangPu_"+color+".png");
// 	//Door
// 	$("#Door_1").find(".Door_Img img").attr("src","Images/ShangHaiMap/Door/Door_"+color+".png");
// 	$("#Door_2").find(".Door_Img img").attr("src","Images/ShangHaiMap/Door/Door_"+color+".png");
// 	$("#Door_3").find(".Door_Img img").attr("src","Images/ShangHaiMap/Door/Door_"+color+".png");
// 	$("#Door_4").find(".Door_Img img").attr("src","Images/ShangHaiMap/Door/Door_"+color+".png");
// }
// function TipNumber(isShow){
// 	$(".Big_Map_Value").each(function(){
// 		if(isShow){
// 			$(this).hide(0);
// 			$(this).show(200);
// 		}else{
// 			$(this).hide(200);
// 		}
// 	});
// }
// function Loading(isShow){
// 		if(isShow == true)
// 		$("#Loading").fadeIn(100);
// 		else
// 		$("#Loading").fadeOut(100);
// 	}
// function SetShangHai() {
//     $("#ShangHai_Map").find(".Big_Map_Img img").attr("src","Images/ShangHaiMap/ShangHai_Gray.png");
// }
// function SetTime() {
//     var date = new Date();
//     var str = date.getFullYear()+"."+(date.getMonth()+1)+"."+date.getDate()+"."+date.getHours()+":"+ (date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes());
//     $(".current-time").text(str);
// }
// // JavaScript Document
// jQuery(function($){
//
// });