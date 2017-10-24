// JavaScript Document
$(document).ready(function(){
		/////////////////////////////////////
		//////点击区域1 - 指数 的子栏目
		/////////////////////////////////////
		$(".Sub_Nav_Top_UL li").click(function(){
			var name = $(this).attr("id");
			if(name == "TimelyCorrection"){//点击纠编及时指数
				//
				//
				//
				//我这里用纠编及时指数 说一下
				//调用 SetMap(ID,number) 来设置每个地图的颜色 --  直接输入数字 和  地图ID  即可
				//有多少个地图， 就要调用多少次 
				//在Ajax 等待的时间里  可以调用 Loading(true) 显示等待界面
				//加载完成后 调用 Loading(false)即可关掉 等待界面
				//
				//
				//
				//实例
				SetMap(310105111,-1);//小于0  就是没有权限
				SetMap(310000111,100);
				SetMap(310000112,-1);
				SetMap(310000113,100);
				SetMap(310000114,300);
				SetMap(310106111,200);
				SetMap(310110111,-1);
				SetMap(310101111,100);
				SetMap(310115111,200);
				SetMap(310112111,-1);
				SetMap(310117111,300);
				SetMap(310109111,100);
				SetMap(310225111,300);
				SetMap(310103111,100);
				SetMap(310228111,300);
				SetMap(310107111,100);
				SetMap(310229111,200);
				SetMap(310111111,100);
				SetMap(310104111,300);
				SetMap(310108111,100);
				SetMap(310222111,200);
				SetMap(310230111,100);
			}else if(name == "SecurityFacilitiesHealth"){//点击安防设施健康指数
			}else if(name == "InfrastructureStandards"){//点击基础设施达标指数
			}else if(name == "MedicalAndHealthCompliance"){//点击医疗卫生达标指数
			}else if(name == "OnlinePersonnelRisk"){//点击在线人员风险指数
			}else if(name == "PhysicalQuantity"){//点击实物量指数
			}else if(name == "KeyWorkSchedule"){//点击重点工作进度
			}
			TipNumber(false);
			Clear(false);
			$(this).addClass("Sub_Nav_Top_Click");
			SetShangHai();
		});
});