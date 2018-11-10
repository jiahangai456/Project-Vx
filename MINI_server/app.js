const express=require("express");
const mysql=require("mysql");
const pool=require("./pool")
const app=express();
app.listen(3000,()=>{console.log("服务器创建成功！")});

app.use(express.static(__dirname+"/public"))
//首页的功能轮播
app.get("/imageslist",(req,res)=>{
    var sql="SELECT id, img_url, title FROM lbimg"
    pool.query(sql,(err,request)=>{
        if(err) throw err
        res.send(request)
    })
})

//商品信息列表
app.get("/imgdetail",(req,res)=>{
    var sql ="SELECT id, img_url, title, dtitle, price FROM spimg"
    pool.query(sql,(err,request)=>{
        if(err) throw err
        res.send(request)
    })
})


//信息列表 message.wxml
app.get("/message",(req,res)=>{
    var rows = [];
    rows.push(
        {title:"新奇士美国脐橙 甜！ ",date:"2018-11-11",img_url:"http://127.0.0.1:3000/img/xq1.png",des:"VC爆棚 沁甜多汁"},
        {title:"泰国椰青 必抢！",date:"2018-11-12",img_url:"http://127.0.0.1:3000/img/xq2.png",des:"一口轻甜汁 美容养颜"},
        {title:"巨无霸-新西兰猕猴桃",date:"2018-11-13",img_url:"http://127.0.0.1:3000/img/xq3.png",des:"口感甜软 儿童最爱"},
        {title:"西班牙夏橙",date:"2018-11-14",img_url:"http://127.0.0.1:3000/img/xq4.png",des:"天然多汁 爽口"});
    res.send(rows)
})




app.get("/product",(req,res)=>{
    var pid = req.query.pid;
    var obj = {
        pid:pid,
        title:"新鲜水果-fruit",
        oldprice:18.00,
        newprice:15.50,
        info:"凉水洗净、擦干,口感脆爽！"
    }
    res.send(obj)
})

//分页商品列表
app.get("/produts",(req,res)=>{
    var pno = req.query.pno;          //当前页页码
    var pageSize = req.query.pageSize;//页大小
    var sql = "SELECT count(id) as c FROM product";
    var process = 0;
    var obj = {pno:pno,pageSize:pageSize};
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        var pageCount = Math.ceil(result[0].c/pageSize);
        process+=50;
        obj.pageCount = pageCount;
        if(process == 100){
          res.send(obj);
        }
    })
    var sql =" SELECT * FROM product";
        sql+=" LIMIT ?,?";
    var offset = parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
         if(err)throw err;
         process+=50;
         obj.data = result;
         if(process == 100){
             res.send(obj);
         }
    });
 });

const qs = require("querystring");
app.post("/addUser",(req,res)=>{ 
    req.on("data",(buff)=>{

        var obj = qs.parse(buff.toString());
        //console.log(obj)
        //buff.toString(obj);
        res.send(obj);
    })
})