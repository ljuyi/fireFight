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
}/*
$(function() {
    Qrcode.init($('[node-type=qr-btn]'));
});*/
/*
var data = {
    'A号楼':
        [
            '1层01号设备',
            '1层01号设备',
            '1层01号设备',
            '1层01号设备',
            '1层01号设备',
            '1层01号设备',
            '1层01号设备'
        ]
}*/
/*for(var i in data){
    var title = i;
    $('.content h4').html('<span>' + title + '</span>' + '' +
        '<form id="form" method="post" action="10.70.156.80:9091/company-maintenance/">' +
        '<div class="qr-btn" node-type="qr-btn">' +
        '<input node-type="jsbridge" type="file" name="myPhoto" id="input-file" value="扫一扫" accept="image/!*" capture="camera"/>' +
        '</div>' +
        '</form>' +
        '<div id="swap-file">扫一扫</div>');
}

for(var i = 0; i < data[title].length; i ++){
    $('.content .left').append('<div class="circle"></div>');
    if(i != data[title].length-1){
        $('.content .left').append('<div class="line"></div>');
    }
    $('.content .right').append('<li>'+data[title][i]+'</li>');
}*/
/*点击列表中任一项触发，ajax返回该列表项详情*/
$.ajax({
    method:'get',
    url:'http://192.168.43.223:2334/',
    success:function(data){
      //  data = JSON.parse(data);
        for(var i in data){
            var title = i;
            $('.content h4').html('<span>' + title /*+ '</span>' +
                    '<div class="qr-btn" node-type="qr-btn">' +
                        '<input  id="input-file" node-type="jsbridge" type="file" name="myPhoto" accept="image/!*" capture="camera"/>' +
                    '</div>' +
                    '<div id="swap-file">扫一扫</div>'*/);
        }
        for(var i = 0; i < data[title]['taskIndex']-1; i ++){
            $('.content .gLeft').append('<div class="gCircle"></div><div class="gLine"></div>');
        }
        $('.content .gLeft').append('<div class="gCircle"></div><div class="gLine active"></div>');
        $('.content .gLeft .active').animate({'height':'1.5rem'},800);
        for(var i = 0; i < data[title]['route'].length; i ++){
            $('.content .left').append('<div class="circle"></div>');
            if(i != data[title]['route'].length-1){
                $('.content .left').append('<div class="line"></div>');
            }
            $('.content .right').append('<li>'+data[title]['route'][i]+'</li>');
        }
    },
    error:function(){
        console.log('error');
    }
});
$('.botton .success').click(function(){
    $.ajax({
        method:'post',
        url:'http://192.168.43.223:8080/task/add',
        data:$('.content h4 span').text(),
        success:function(){
            window.onload.href = 'task-management.html';
        },
        error:function(){
            console.log('error');
        }
    });
});
$(function() {
    Qrcode.init($('[node-type=qr-btn]'));
});