// JavaScript Document
$(document).ready(function(){
	$('.page2 .left-count').slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
    $('.page2 .info-box').slide({mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:4});
    
    $('.page3 .info-box').slide({mainCell:".bd2 ul",autoPage:true,effect:"top",autoPlay:true,vis:9});
    $('.page4 .info-box').slide({mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:3});
});
