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
var data = {
    'taskNo':'01010101',
    'taskDes':'A号楼巡视工作，检查设备状态，有无异常。',
    'taskTime':'2016-10-10',
    'taskReporter':'李XX',
    'taskOwner':'张XX'
};

var index = 0;
for(var i in data){
    $('.content li').eq(index).find('p').html(data[i]);
    index ++;
}
//测试数据结束

$.ajax({
    method:'get',
    url:'http://192.168.1.131:8080/task/add',
    success:function(data){
        for(var i in data){
            switch(i){
                case 'taskNo':
                    $('.content li').eq(0).find('p').html(data[i]);
                    break;
                case 'taskDes':
                    $('.content li').eq(1).find('p').html(data[i]);
                    break;
                case 'taskTime':
                    $('.content li').eq(2).find('p').html(data[i]);
                    break;
                case 'taskReporter':
                    $('.content li').eq(3).find('p').html(data[i]);
                    break;
                case 'taskOwner':
                    $('.content li').eq(4).find('p').html(data[i]);
                    break;
            }
        }
    },
    error:function(){
        console.log('error');
    }
});
