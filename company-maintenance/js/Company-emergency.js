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
$('.success').click(function(){
	alert('提交数据！');
	//向后台提交数据
	var xhr = createXHR();
	var name = $('.contentname').val();
	var type = $('select').val();
	var discription = $('textarea').val();
	var location = $('.location').val();
	var queryString = "name=" + name + "&type="+type+"&discription="+discription+"&locat="+location;
	alert(queryString);
	xhr.open("post","http://192.168.1.131:8080/task/add",true);
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(queryString);
	xhr.onreadystatechange = function() { //事件监听-状态变化
		if(xhr.readyState == 4) { //事件的状态
			if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) { 			//http的状态码--304表示缓存
				if(xhr.responseText == "success"){
					window.location.href = 'task-list.html';
				}
			}
		}
	}
})

$('.cancel').click(function(){
	alert('报警已取消！');
})
/*调摄像头上传照片*/
$("input[type='file']").on('change', function () {
	$('.content').attr('src',$(this).val());
	alert($(this).val());
	$('#form').submit();
	ajax('http://192.168.1.131:8080/task/add',function(res){
		$('.content').attr('src',res);
	});
});
