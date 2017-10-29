// JavaScript Document
$(document).ready(function(){
	$('.left-count').slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:6,interTime:50,trigger:"click"});
    
    $('.info-box').slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:4,interTime:50,trigger:"click"});
    $('.info-box').slide({mainCell:".bd2 ul",autoPlay:true,effect:"topMarquee",vis:9,interTime:50,trigger:"click"});
});
