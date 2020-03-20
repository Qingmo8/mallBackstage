/**
 * npm install express --save
 * 服务器模拟要安装的插件
 * 到当前文件夹执行node index.js 输出3300 执行成功
 * 全局安装nodemon   node是后端
 *再启动：nodemon index.js
 * 安装npm install concurrently --save

 在papackage.json中添加"dev": "concurrently \"npm run serve\" \" nodemon mock/index.js \""
 是使前端与后端一起跑起来
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var debug = require("debug")("my-application");

//post请求获取参数的方案
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post("/login", function (req,res) {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "iwen" && password === "123") {
    res.send({
      code:200,
      msg: "登陆成功",
      username: "iwen",
      token: "W3ER33TRHE435TERTGE"
    })
  }else {
    res.send({
      code:500,
      msg: "登陆失败"
    })
  }
});

app.listen(3300, function () {
  console.log(3300);
})
