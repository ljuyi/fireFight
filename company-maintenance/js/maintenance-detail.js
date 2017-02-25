window.onload = function(){
	//字体设置
	fontSelf();
};
window.onresize = function () {
	fontSelf();
};
function fontSelf() {
	var wHtml = document.getElementById('html');
	var w = document.documentElement.clientWidth;
	w =  w > 768 ? 768 : document.documentElement.clientWidth;
	wHtml.style.fontSize = w * 0.045 + 'px';
}

//测试数据
var picList = {
	'pic1':'img/A.jpg',
	'pic2':'img/B.jpg',
	'pic3':'img/C.jpg'
};
for(var i in picList){
	$('.picList').append('<img src="'+picList[i]+'"/>');
}
//测试数据结束

$.ajax({
	method:'get',
	url:'',
	data:'',
	dataType:'text/json',
	success:function(picList){
		for(var i in picList){
			$('.picList').append('<img src="'+picList[i]+'"/>');
		}
	},
	error:function(){
		console.log('error');
	}
});
$('.success').click(function(){
	//向后台提交数据
	createXHR();
	var name = $('.contentname').val();
	var type = $('select').val();
	var discription = $('textarea').val();
	var locat = $('.location').val();
	var queryString = "url?name=" + name + "&type="+type+"&discription="+discription+"&locat="+locat;
	xhr.open("GET", queryString, true);
	xhr.send(null);
	alert('报警成功！');
});
$('.cancel').click(function(){
	alert('报警已取消！');
});
/*掉摄像头*/
