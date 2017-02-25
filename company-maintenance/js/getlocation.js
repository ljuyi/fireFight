function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }else{
        alert("�������֧�ֵ���λ��");
    }
}

function showPosition(position) {
    $("#latlon").html("γ��:" + position.coords.latitude + '������:' + position.coords.longitude);
    var latlon = position.coords.latitude + ',' + position.coords.longitude;

    //baidu
    var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=" + latlon + "&output=json&pois=0";
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        beforeSend: function () {
            $("#baidu_geo").val('���ڶ�λ...');
        },
        success: function (json) {
            if (json.status == 0) {
                $("#baidu_geo").val(json.result.formatted_address);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#baidu_geo").val(latlon + "��ַλ�û�ȡʧ��");
        }
    });
}
function showError(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("��λʧ��,�û��ܾ��������λ");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("��λʧ��,λ����Ϣ�ǲ�����");
            break;
        case error.TIMEOUT:
            alert("��λʧ��,�����ȡ�û�λ�ó�ʱ");
            break;
        case error.UNKNOWN_ERROR:
            alert("��λʧ��,��λϵͳʧЧ");
            break;
    }
}
    getLocation();/**
 * Created by Rose on 2016/12/31.
 */
