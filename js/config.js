// JavaScript Document
$(document).ready(function(){
	$(".Sub_Nav_Top").slideUp(0);
	$("#ShangHai_Arrow").fadeIn(0);
	$("#ShangHai_Small").fadeIn(0);
	// SetShangHai();
	$(".tip-close").click(function(){
			$(".tip").fadeOut(100);
	});
	//
	remove();
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

function remove() {
	$(".whole").removeClass("whole_1920");
	$(".whole").removeClass("whole_1600");
	$(".whole").removeClass("whole_1440");
	$(".whole").removeClass("whole_1366");
	$(".whole").removeClass("whole_1280");
}

function Loading(isShow){
    if(isShow == true)
    $("#Loading").fadeIn(100);
    else
    $("#Loading").fadeOut(100);
}