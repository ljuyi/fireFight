var taskIndex;
window.onload = function(){
	//字体设置
	fontSelf();
	//var json = {
	//	"1":"nicas","2":"dcdcs","3":"scefwefw","4":"ddedd"
	//};
	ajax('', function (res) {
		var json = JSON.parse(res);
		for (var attr in json) {
			taskIndex = json[attr]['taskIndex'];
			$('.pagecontent>img').attr('src',json[attr]['imgAddr']);
			$('.pagecontent>p').html(attr);
			for(var i = 0; i < json[attr].length; i ++){
				$('.taskLeft span').eq(i).html(json[attr][i]);
			}
		}
	})
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

var num = 0;
function judge(){
	for(var i = 0; i < $('.taskRight i').length; i ++){
		if($('.taskRight i').eq(i).hasClass('wrong')){
			return 1;
		}
	}
	return 0;
}
$('.taskRight i').click(function(){
	if($(this).index() == 0){
		$(this).addClass('right');
		$(this).siblings('i').removeClass('wrong');
		num++;
	}else{
		$(this).addClass('wrong');
		$(this).siblings('i').removeClass('right');
	}
	if(judge()){
		$('.success').addClass('disabled');
	}else{
		$('.success').removeClass('disabled');
	}
})
$('.botton .btn-default').click(function(){
	window.onload.href = 'Company-emergency.html';
});
$('.botton .success').click(function(){
	$.ajax({
		method:'post',
		url:'http://192.168.1.131:8080/task/add',
		data:$('.pagecontent>p').html(),
		success:function(){
			window.onload.href = 'task-route-detail.html';
		}
	});
});