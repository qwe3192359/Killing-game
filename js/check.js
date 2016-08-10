var arr;
arr = sessionStorage.obj;
var identitys = JSON.parse(arr);
console.log("查看身份页面保存的身份信息："+identitys);				//将传入的数据转变为数组
var i = 0;
var y = 0;
var z = 1;							//定义三个变量，下面要用
function ViewIdentity() {

	var number = document.getElementById("number");			//查看身份界面上面的号码所在元素
	var identity = document.getElementById("identity");		//角色身份所在元素
	var img = document.getElementById("img");				//身份界面中间的图片
	var button = document.getElementById("button");			//最下面的按钮
	if( i == identitys.length ){								//查看完所有人的身份要进行的事
		location.href="diary.html";
		
        
	}
	else if( i==identitys.length-1){						//最后一个人查看完身份所做的事
		number.innerHTML = i + 1;
		identity.style.display = "block";
		img.src = "images/identitys.png";
		identity.innerHTML = "角色："+identitys[i];
		button.innerHTML = "法官点击";
		i++;

	}
	else if (i == y) {										//隐藏身份信息并传给下一个人
		number.innerHTML = i+1;
		identity.style.display = "block"; 
		img.src = "images/identitys.png";
		identity.innerHTML = "角色："+identitys[i];
		button.innerHTML = "隐藏并传递到"+(z+1)+"号";
		i++;
		z++;
	}
	else if(i != y){										//查看自己的身份信息
		number.innerHTML = i+1;
		identity.style.display = "none";
		img.src = "images/flop.png";
		button.innerHTML = "查看"+(i+1)+"身份";
		y++;
	}

		
	
}