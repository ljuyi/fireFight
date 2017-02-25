/**
 * Created by Rose on 2016/12/14.
 */
//����XMLHttpRequest����
function createXHR() {
    var xhr = null;
    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest(); //�����������֧�֣�
    }
    else if(window.ActiveXObject) {
        try {
            //IE6+
            xhr = new ActiveXObject('Msxml2.XMLHttp'); //��֧����ᱨһ���쳣��catch����
        } catch(e) {
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
    }
    return xhr;
}

function ajax(url,funSuccess,funFailed){
    var xhr = createXHR();
    //��ʼ������
    xhr.open('GET',url,true);
    //��������
    xhr.send(null);
    //������Ӧ���
    xhr.onreadystatechange = function() { //�¼�����-״̬�仯
        if(xhr.readyState == 4) { //�¼���״̬
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) { //http��״̬��--304��ʾ����
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