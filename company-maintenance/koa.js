var koa = require('koa');   //koa http��
var koaBody = require('koa-body');   //��������body
var cors = require('koa-cors');    //�����������
var router = require('koa-router')();  //·���м��
//��ʼ��koa���
var app = new koa();
//����·��
router
    .all('/',function* (){
        var data = {
            'A��¥':{
                'route':
                    [
                        '1��01���豸',
                        '1��01���豸',
                        '1��01���豸',
                        '1��01���豸',
                        '1��01���豸',
                        '1��01���豸',
                        '1��01���豸'
                    ],
                'taskIndex':'5'
            }
        }
    this.body = data;
})
.get('/user',function* (){
    this.body = 'user';
})
.post('/qrcode',function* (){
        console.log(this.request.body);
        this.body = num;
})

app.use(cors());    //�����������
app.use(koaBody());   //��������body
app.use(router.routes());   //����·��
//��������
app.listen(2334,function(){
    console.log("success");
});