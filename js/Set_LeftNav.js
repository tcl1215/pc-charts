// JavaScript Document
$(document).ready(function(){
		/////////////////////////////////////
		//////点击区域2 的导航栏 即左侧导航栏
		/////////////////////////////////////
		$(".Middle_Left_Nav ul li").click(function(){
			ChangPeople("Map","");
			ChangPeople("Door","");
			var name = $(this).attr("id");
			if(name == "IntheNumberOfPeople"){//点击在所人数
				//
				//
				//
				//我这里用纠编及时指数 说一下
				//调用 SetPeople(ID,number) 来设置每个地图的颜色 --  直接输入人数 和  地图ID  即可
				//有多少个地图， 就要调用多少次 
				//在Ajax 等待的时间里  可以调用 Loading(true) 显示等待界面
				//加载完成后 调用 Loading(false)即可关掉 等待界面
				//
				//
				//
				SetPeople(310105111,200);
				SetPeople(310000111,100);
				SetPeople(310000112,300);
				SetPeople(310000113,100);
				SetPeople(310000114,300);
				SetPeople(310106111,200);
				SetPeople(310110111,200);
				SetPeople(310101111,-1);
				SetPeople(310115111,200);
				SetPeople(310112111,300);
				SetPeople(310117111,300);
				SetPeople(310109111,100);
				SetPeople(310225111,-1); //  -1 就是没有权限
				SetPeople(310103111,100);
				SetPeople(310228111,300);
				SetPeople(310107111,100);
				SetPeople(310229111,200);
				SetPeople(310111111,100);
				SetPeople(310104111,300);
				SetPeople(310108111,100);
				SetPeople(310222111,200);
				SetPeople(310230111,-1);
			}else if(name == "NumberOfCivilianPolice"){//点击民警人数
			}else if(name == "NumberOfInpatients"){//点击住院人数
			}else if(name == "MajorLevel"){//点击重大一级
			}else if(name == "MajorTwo"){//点击重大二级
			}else if(name == "MajorThree"){//点击重大三级
			}else if(name == "MembershipInXinjiang"){//点击新疆籍人数
			}else if(name == "ExceedTheNumberOfPeopleInCustody"){//点击超出羁押人数
			}
			
			//下面是特效--------
			TipNumber(true);
			ChangeMap("Cyan");
			Clear(true);
			$(".Sub_Nav_Top").slideUp(200);
			$(this).addClass("Middle_Left_Nav_Click");
			SetShangHai();
		});
		
});