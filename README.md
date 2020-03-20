# backstage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Ego商城后台系统

### 技术
    1.网络请求axios
    2.Vue-Router路由
    3.Vuex数据处理
    4.Element UI  安装：vue add element
    
###富文本编辑器使用  UEditor
API参考地址： https://github.com/HaoChuan9421/vue-ueditor-wrap
    
    
### 文件目录结构
mock：模拟服务器端口登陆

vue.config.js：跨域所需要创建

  assete：存放css与图片
    css：
    img：  
    
   common：js文件
   
  components：存放公共组件
        common：其他项目也可以用到的公共组件
        content：只能这个项目用到的公共组件
            NavBar:顶部导航栏
        
  network:网络请求
    http：封装了axios
    Storage：本地存储数据
        
  plugins：Element UI 生成的文件 安装：vue add element
    element：把官网里的完整组件列表复制进来
  
  router：路由
  
  store：Vuex插件
  
  views：页面组件
    login：登陆与注册
    
    productSelect：商品查询
    
    params：规格参数
    
    contentCategory：内容分类管理
    
    layout：登陆的页面
