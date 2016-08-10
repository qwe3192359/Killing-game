var arr = sessionStorage.obj;
var identitys = JSON.parse(arr);		//将保存的身份信息转为数组
var ss = document.getElementById("diary");	
console.log("法官日记页面保存的身份信息："+identitys);	
for (var i = 0; i < identitys.length; i++) {	//显示身份信息
	ss.innerHTML += "<div class='diary-main-content'><div><p>"+identitys[i]+"</p><li>"+(i+1)+"号</li></div></div>";
}
function start () {
	location.href="process.html";
}
