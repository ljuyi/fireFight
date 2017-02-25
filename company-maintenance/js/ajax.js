/**
 * Created by Rose on 2016/12/14.
 */
//定义XMLHttpRequest对象
function createXHR() {
    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); //主流浏览器均支持；
    }
    else if(window.ActiveXObject) {
        try {
            //IE6+
            xhr = new ActiveXObject('Msxml2.XMLHttp'); //不支持则会报一个异常，catch捕获
        } catch(e) {
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
    }
    return xhr;
}

function ajax(url,funSuccess,funFailed){
    var xhr = createXHR();
    //初始化请求
    xhr.open('GET',url,true);
    //发送请求
    xhr.send(null);
    //处理响应结果
    xhr.onreadystatechange = function() { //事件监听-状态变化
        if(xhr.readyState == 4) { //事件的状态
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) { //http的状态码--304表示缓存
                funSuccess(xhr.responseText);
            }
        }else{
            console.log('failed!');
            if(funFailed){
                funFailed();
            }
        }
    }
}