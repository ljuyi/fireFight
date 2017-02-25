var koa = require('koa');   //koa http库
var koaBody = require('koa-body');   //解析请求body
var cors = require('koa-cors');    //处理跨域问题
var router = require('koa-router')();  //路由中间件
//初始化koa框架
var app = new koa();
//设置路由
router
    .all('/',function* (){
        var data = {
            'A号楼':{
                'route':
                    [
                        '1层01号设备',
                        '1层01号设备',
                        '1层01号设备',
                        '1层01号设备',
                        '1层01号设备',
                        '1层01号设备',
                        '1层01号设备'
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

app.use(cors());    //处理跨域问题
app.use(koaBody());   //解析请求body
app.use(router.routes());   //挂载路由
//启动服务
app.listen(2334,function(){
    console.log("success");
});