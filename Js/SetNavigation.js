// JavaScript Document
//////////////////////////
//*****点击 大导航栏
//////////////////////////
$(document).ready(function(){
		

		/////////////////////////////////////
		//////点击区域1 的导航栏
		/////////////////////////////////////
		$(".Nav_Top_UL li").click(function(){
			
			var name = $(this).attr("id");
			
			if($(this).attr("id") == "index"){
				$(".Sub_Nav_Top").slideToggle(200);
				$(this).toggleClass("Nav_Top_Click");
				return;
			}else{
				$(".Sub_Nav_Top").slideUp(200);}
			if(name == "CompositeScore"){//点击综合得分
				//
				//
				//
				//我这里用综合得分 说一下
				//调用 SetMap(ID,number) 来设置每个地图的颜色 --  直接输入数字 和  地图ID  即可
				//有多少个地图， 就要调用多少次 
				//在Ajax 等待的时间里  可以调用 Loading(true) 显示等待界面
				//加载完成后 调用 Loading(false)即可关掉 等待界面
				//
				//
				//
				//实例
				SetMap(310105111,-1);//小于0  就是没有权限
				SetMap(310000111,300);
				SetMap(310000112,200);
				SetMap(310000113,-1);
				SetMap(310000114,100);
				SetMap(310106111,300);
				SetMap(310110111,100);
				SetMap(310101111,300);
				SetMap(310115111,200);
				SetMap(310112111,300);
				SetMap(310117111,100);
				SetMap(310109111,300);
				SetMap(310225111,200);
				SetMap(310103111,300);
				SetMap(310228111,100);
				SetMap(310107111,300);
				SetMap(310229111,100);
				SetMap(310111111,300);
				SetMap(310104111,200);
				SetMap(310108111,300);
				SetMap(310222111,100);
				SetMap(310230111,300);
			}else if(name == "OnlineStaff"){//点击在线人员
			}else if(name == "PoliceManagement"){//点击民警管理
			}else if(name == "Infrastructure"){//点击基础设施
			}else if(name == "SecurityFacilities"){//点击安防设施
			}else if(name == "ObjectiveFactors"){//点击客观因素
			}else if(name == "SafetyFactors"){//点击安全因素
			}
			
			//下面是特效 --------------
			TipNumber(false);
			
			Clear(true);
			$(this).addClass("Nav_Top_Click");
			SetShangHai();
		});
		
		
		
		

	});
	
	
	