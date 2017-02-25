;(function(){
	window.onload = function(){
		//字体设置
		fontSelf();
	}
	window.onresize = function () {
		fontSelf();
	};
	function fontSelf() {
		var wHtml = document.getElementById('html');
		var w = document.documentElement.clientWidth;
		w =  w > 768 ? 768 : document.documentElement.clientWidth;
		wHtml.style.fontSize = w * 0.045 + 'px';
	};
	//页面加载
	LodeAjax();
	$("nav ul li:eq(0)").click(
		LodeAjax
	);
	var state = 0;
	function LodeAjax(){
		$(".content").empty(); 
		$('.glide').animate({left:"0"},500);
		$.ajax({
			type:"post",
			url:"http://192.168.1.131:8080/task/add",
			async:true,
			success:function(message){
				var obj = eval(message);
				for(var attr in obj){
					var $content = $('.content');
					var $li = $("<li class='clearfix'></li>");
					$content.append($li);
					var $Img = $("<img src=''>");
					$li.append($Img);
					$Img.attr("src",obj[attr]['Pic']);
					var $introduce = $('<div class="introduce"></div>');
					$li.append($introduce);
					var $p = $('<p class="name">任务名称:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					var $a = $("<a href='#'></a>");
					$span.append($a);
					$a.html(obj[attr]['address']);
					var $p = $('<p class="time">时间:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					$span.html(obj[attr]['time']);
					var $button = $('<button class="receive"></button>');
					$li.append($button);
					//发送接受任务的id
					$button.attr('id',obj[attr]['taskNo']);
					if(obj[attr]['state'] == 1){
						$button.html('接受任务');
						$button.addClass('receive');
						
					}else if(obj[attr]['state'] == 2){
						$button.html('已接受');
						$button.addClass('accepted');
					}
				}
				//接受任务按钮
				$('.receive').on('click',function(){
					var $this = $(this);
					$.ajax({
						type:"get",
						url:"http://192.168.1.131:8080/task/add?taskNo="+$(this).attr('id'),
						async:true,
						success:function(){
							$this.html('已接受');
							$this.addClass('accepted');
						}
					});
				});
				//点击a链接变色
				$('.content li .introduce p a').click(function(){
					$(this).css('color','#93cef1');
					$(this).parent().css('color','#93cef1');
				})
			}
		});
	}
	//点击巡查管理
	$("nav ul li:eq(1)").click(function(){
		$(".content").empty();
		state = 1;
		$.ajax({
			type:"post",
			url:"http://192.168.1.131:8080/task/add",
			async:true,
			success:function(message){
				var obj = eval(message);
				for(var attr in obj){
					var $content = $('.content');
					var $li = $("<li class='clearfix'></li>");
					$content.append($li);
					var $Img = $("<img src=''>");
					$li.append($Img);
					$Img.attr("src",obj[attr]['Pic']);
					var $introduce = $('<div class="introduce"></div>');
					$li.append($introduce);
					var $p = $('<p class="name">任务名称:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					var $a = $("<a href='#'></a>");
					$span.append($a);
					$a.html(obj[attr]['address']);
					var $p = $('<p class="time">时间:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					$span.html(obj[attr]['time']);
					var $button = $('<button></button>');
					$li.append($button);
					$button.attr('id',obj[attr]['taskNo']);
					if(obj[attr]['state'] == 4){
						$button.html('已完成');
						$button.addClass('accepted');
					}else if(obj[attr]['state'] == 5){
						$button.addClass('receive');
						$button.html('开始巡查');
					}
				}
				$('.receive').click(function(){
					$.ajax({
						type:"post",
						url:"http://192.168.1.131:8080/task/add?taskNo="+$(this).attr('id'),
						async:true,
					});
				})
				//点击开始巡查按钮？开始巡查按钮应该是个ajax还是页面跳转
				/*$.ajax({
					type:"post",
					url:"",
					async:true,
				});*/
				//点击a链接变色
				$('.content li .introduce p a').click(function(){
					$(this).css('color','#93cef1');
					$(this).parent().css('color','#93cef1');
				})
			}
		});
		$('.glide').animate({left:"33.3%"},500);
	})
	//点击报警管理
	$("nav ul li:eq(2)").click(function itemOnclick(){
		$(".content").empty();
		state = 2;
		$.ajax({
			type:"post",
			url:"http://192.168.1.131:8080/task/add",
			async:false,
			success:function(message){
				var obj = eval(message);
				for(var attr in obj){
					var $content = $('.content');
					var $li = $("<li class='clearfix'></li>");
					$content.append($li);
					var $Img = $("<img src=''>");
					$li.append($Img);
					$Img.attr("src",obj[attr]['Pic']);
					var $introduce = $('<div class="introduce"></div>');
					$li.append($introduce);
					var $p = $('<p class="name">任务名称:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					$span.html(obj[attr]['address']);
					var $p = $('<p class="time">时间:</p>');
					$introduce.append($p);
					var $span = $('<span></span>');
					$p.append($span);
					$span.html(obj[attr]['time']);
					var $button = $('<button></button>');
					$li.append($button);
					var $button = $('<button></button>');
					$li.append($button);
					$button.html('撤销');
					$button.addClass('police');
					$button.attr('id',obj[attr]['taskNo']);
				}
				//点击撤销按钮
				$('.police').click(function(){
					var butId=$(this).attr("id");
					console.log(this);
					$.ajax({
						type:"post",
						url:"http://192.168.1.131:8080/task/add?taskNo="+butId,
						async:true,
						success:itemOnclick()
					});
				})
				//点击a链接变色
				$('.content li .introduce p a').click(function(){
					$(this).css('color','#93cef1');
					$(this).parent().css('color','#93cef1');
				})
			}			
		});
		$('.glide').animate({left:"66.6%"},500);
	});
	$('.content ul li').on('click',function(){
		var taskID = $(this).attr('id');
		$.ajax({
			method:'get',
			url:'',
			data:taskID,
			success:function(){
				switch(state){
					case 0:
						window.location.href = 'task-detail.html';
						break;
					case 1:
						window.location.href = 'protect-detail.html';
						break;
					case 2:
						window.location.href = 'maintenance-detail.html';
						break;
					default:
						window.location.href = 'task-detail.html';
						break;
				}
			},
			error:function(){
				console.log('error');
			}
		});
	});
})();
/*样例
 * //任务管理字段--taskManagement
 * 	//Pic--图片网络地址
 *  //address--地址
 *  //time--时间
 * 	//taskNo--任务编号
 *  //state--任务管理状态 ，分为三种状态
 * 		1--接受任务
 * 		2--已接受
 * taskManagement = [{
	"Pic":"A.jpg",
	"address":"A号楼",
	"time":"2014-10-10",
	"taskNo":"000001",
	"state":1},
	{
	"Pic":"B.jpg",
	"address":"B号楼",
	"time":"2014-11-10",
	"taskNo":"000002",
	"state":2},
	{
	"Pic":"C.jpg",
	"address":"C号楼",
	"time":"2014-11-10",
	"taskNo":"000003",
	"state":1
	}
]
//巡查管理字段--inquire
	//Pic--图片网络地址
 *  //address--地址
 *  //time--时间
 * 	//taskNo--任务编号
 *  //state--任务管理状态 ，分为三种状态
 * 		4--已完成
 * 		5--开始巡查
	inquire = [{
	"Pic":"A.jpg",
	"address":"A号楼",
	"time":"2014-10-10",
	"taskNo":"000001",
	"state":4},
	{
	"Pic":"B.jpg",
	"address":"B号楼",
	"time":"2014-11-10",
	"taskNo":"000002",
	"state":4},
	{
	"Pic":"C.jpg",
	"address":"C号楼",
	"time":"2014-11-10",
	"taskNo":"000003",
	"state":5
	}
]
//报警管理--police
	//Pic--图片网络地址
 *  //address--地址
 *  //time--时间
 * 	//taskNo--任务编号
 police = [{
	"Pic":"A.jpg",
	"address":"A号楼",
	"time":"2014-10-10",
	"taskNo":"000001",
	},
	{
	"Pic":"B.jpg",
	"address":"B号楼",
	"time":"2014-11-10",
	"taskNo":"000005",
	},
	{
	"Pic":"C.jpg",
	"address":"C号楼",
	"time":"2014-11-10",
	"taskNo":"000007",
	}
]
*/