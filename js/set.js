var firstpara = document.getElementsByClassName("main-3")[0];
var peopleNumber = firstpara.getElementsByTagName("input")[0];	//获取class为”main-3“下面的第一个input元素
var identitys = new Array();			//新建一个数组，用来存放身份信息
function test(){  					//检测输入的格式以及分配身份
	var people = peopleNumber.value;
	var killer = parseInt(people/4);
	var civilian = people - killer;
	


	if (people>19&&people<5) {
		alert("输入有误")

	}

	else if (people-Math.floor(people) != 0) {
		alert("请不要输入小数及字符")

	}
	
    else if(people<=18&&people>=6) {
	    for (var i = 0; i < people; i++) {
			identitys[i] = "平民";
		};
	
		for (var i = 0; i < killer; i++) {
			//ki = Math.floor(Math.random() * (people - 1) );
			//identity[ki] = "杀手";				//使用随机数分配杀手
			identitys[i] = "杀手";
		};
		identitys.sort(function(){ return 0.5 - Math.random() });	//使用打乱数组的方式分配身份
		
		for(var i in identitys){  
            console.log( "身份信息："+(i  + " 是 "+identitys[i]));  
        } 
	    var renshu = document.getElementsByClassName("renshu");
		renshu[0].innerHTML=civilian;								//显示平民的数量
		renshu[1].innerHTML=killer;									//显示杀手的数量
		var shenfen = document.getElementsByClassName("shenfen")
		shenfen[0] .innerHTML="";
	    for(i=0;i<people;i++){										//输出所有身份信息
	       shenfen[0] .innerHTML  += "<p>"+(i + 1) + "号" + identitys[i] + "</p>";
	    }
	
	}
	
	else
		{alert("输入有误")};
}

function btn(){
	if (peopleNumber.value == 0) {
		alert("请先设置人数")
	}
	else if(identitys==0)
	{
		alert("请先设置人数");
	}
	else{
		location.href="check.html";
        var arr = JSON.stringify(identitys);
         sessionStorage.obj = arr;//存入
        console.log("第一次保存的身份信息:"+arr);
	}
		
}
