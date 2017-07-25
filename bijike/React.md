React是什么？  
   Facebook在2013年开源的一个用来构建用户界面的JavaScript库   用来处理视图的(是MVC中的视图层  数据来源ajax)
   在React基于组件进行开发，用户界面是由一个个组件组合而来的。

React组件  组件是React中构建用户界面的基本单位。

React用于开发单页面应用


React 处理视图  facebook 提供技术栈
react + flux|redux + react-router + webpack + babel + fetch|ajax

新名词：函数响应式编程   函数式编程   高阶函数

React信奉Unix哲学   既小、可组装性、目的单一

React与AngularJS对比
AngularJS是一个大而全的框架
React是一个库，（Angular是一个框架，React是一个库）
React只解决视图上面的问题     将基于组件的架构带到了前端世界 

Angular是以html为核心   而 React是以JavaScript为核心
Angular将JS嵌入html     而 React将html嵌入JS

jQuery以DOM结构为驱动
React以数据为驱动的   既数据什么样界面就什么样

虚拟DOM  
1.主要是解决高效的渲染DOM  提供了Diff算法
2.代码写一次可以运行在多个平台    React抽象虚拟DOM ->PC         ReactDOM
                                                   ->Webapp     ReactDOM
                                                   ->原生App    ReactNative


单页面---->问题--->出现框架
angular.js====>react  vue

WEB开发架构的演变
1.多页面跳转
A页面--->B页面---C页面
   1)用户体验差,白屏、加载慢
   2)浪费带宽(html+data)
   3)所有逻辑操作、模板+数据都是在服务器端完成，浪费了服务器的性能
2.单页面应用(SPA)
 index.html指定切换部分

AJAX
 1)DOM操作复杂
 2)业务逻辑复杂 数据+模板处理

框架出现  MV*
单向数据流用来解决开发复杂度(React)

单页面应用(SPA)问题
1.花费大量时间保持UI与数据的同步
2.DOM操作很慢很慢
3.处理HTML模板会很痛苦   逻辑与视图混合
  逻辑极复杂
     数据的逻辑   如购物车中不符合需求数据的处理
     视图的逻辑
4.首屏加载速度慢(gzip压缩、代码压缩、图片压缩)  Caesium_boxed(图片压缩工具)

webpack模块化打包工具  less sass  post-css
base64  是一种8位的编码方式，是用来进行网络传输的   一种图片    使图片可以用代码来表示


React解决问题
数据变化  现阶段问题       大量DOM操作       逻辑极复杂
          React解决方案    自动DOM操作       把混乱的逻辑与视图

快速的DOM操作   不会直接用React修改DOM，而是修改内存中的虚拟的DOM
React核心  自动DOM操作， 虚拟DOM 


React最终输出的html

React特点
简单 学习简单、写代码简单、易读
声明式自动DOM操作（React自动完成）

React的核心是组件，组件设计的目的是提高代码的复用，降低测试难度，代码复杂度等


-------------------------------------------------------------------------
#React基础
## JS库
1.模块化开发环境
-基于nodejs环境
-npm包管理工具，下载大量第三方包
-模块打包  webpack
-编译 babel
   1) 可以使用最新的 ES6 ES2017 语法
   2) 自动解决浏览器新语法兼容问题
-单元测试
-------------------------------------------
需要装  npm install react react-dom
        React-router
        npm install react-router
        redux react-redux
        npm install redux react-redux

        npm install webpack  打包
        npm install babel    编译
-------------------------------------------

2.浏览器引入(不推荐)

##ReactJSX

JSX=JSXML是一种在组建内部构建标签的类XML语法 JSX=JavaScript+XML
JSX不能单独运行  需要通过babel编译成JS
<Hello />===>React.createElement("标签名"，属性，子元素，...)

可以提高开发效率 提高组件的可读性  增强语义化  结构清晰直观  抽象化
使用JSX  1.引入浏览器babel
         2.修改script的type属性
         <script type="text/babel"> <script/>

使用方法
引入react.js（核心）   react-dom.js（DOM操作）
babel.js 是将JSX语法转换为JS语法
要是用jsx语法进行开发需要将type制定为text或babel

例如：
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="react.min.js"></script>   //核心
    <script src="react-dom.min.js"></script>   //关于DOM的操作
    <script src="babel.min.js"></script>    //JS编译库
</head>
<body>
<div id="box">

</div>
<script type="text/babel">

    ReactDOM.render(
        <div>
           <h1>预报今日天气</h1>
           <p>今天天气很热，很热，很热，但是教室很凉快呀！</p>
        </div>,
        document.querySelector("#box"),
        function () {
            console.log("渲染完成")
        }
    )
</script>

</body>
</html>
----------------------------------------------------------------------------------
React提供核心方法
1.创建组件 
ES5语法
var 组件 = React.createClass({
    render:function(){
       return(组件模板结构) 
    }
})  

ES6语法
class  组件名 extends React.Component{
   render(){
         return(组件模板结构) 
   }
}

2.ReactDOM.render('组件|Element',要插入DOM节点,回调函数)  渲染组件

3.React.createElement('虚拟DOM名称（元素名）',null（属性为空时写null）,'内容'|元素)   创建虚拟DOM

例如：
<script>
    var h1=React.createElement('h1',{title:'hi'},"hello word");
    ReactDOM.render(
        h1,
        document.querySelector("#box"),
        function () {
            console.log("渲染完成")
        }
    )
</script>
-----------------------------------------------------------------------------------

使用JSX注意事项
1.元素名（组件）自定义组件名首字母必须大写，与html标签区分
<Hello />
<Hello></Hello>	

2.符合嵌套规则
<div>
	<h1></h1>
	<div>
		<p></p>
		<span></span>
	</div>
</div>

<div>
	<Title></Title>
	<div>
		<Hello>
			<Time></Time>
		</Hello>
	</div>
</div>

3.可以写入求值表达式{this.props.name}
<div>{data}</div>
<div>hi</div>

4.驼峰命名
CommitInput=React.createClass()

5.不能使用js原生函数的一些关键词，如for和class需替换成htmlFor和className

----------------------------------------------------------------------------
## 注释的写法
1.{/*  */}  作为子节点
2./* */ 直接写在标签中
3.// 单行注释   注意：在写这个注释时，要换行

var Hello = React.createClass({
        render:function () {
            return <div
                    /*这是添加的一个属性title*/
            title="hi"
            className="list" //这是一个类名
            style={{color:'red'}}
            >
                {/*这是所写内容*/}
                Hello world</div>
        }
    })

注：渲染数组时会自动打散，且数组之外要有东西包裹
如：<div>arr</div>


可以是一个函数，也可以是一个变量

----------------------------------------------------------------------
## 求值表达式
{name}            变量
{person.name}     获取对象属性
{arr[0]}          访问数组       遍历数组{arr.map((o,i)=>{})}
{getName()}       调用函数
{name?name:'li'}  三元表达式
{arr.map(function(){})}  调用方法
{}中不能写循环和判断
{}渲染数组时会自动打散，且数组之外要有东西包裹  如<div>{arr}<div/>

实现条件判断
  1.三元表达式
  2.逻辑运算符||
  3.将if写入函数   调用函数

--------------------------------------------------------------------
## 使用样式
1.行内样式   适合样式改变的
因为样式必须在对象中，所以{{style：}}
如：render:function () {
            var styles = {
                width:100,
                height:'50px',
                lineHeight:'50px',
                display:'block',
                border:'1px solid red',
                fontSize:this.props.fsize||20
            };
            return <span style={styles}>{this.getT()}</span>
        }

2.通过类名方式
className='类名'

注：外部想要访问到或改变组件标签中的元素是可以通过添加属性的方法及配合上this.props

##非DOM属性
JSX中有3个非DOM属性 dangerouslySetInnerHTML   ref  key  后两个使用频率较高  
-dangerouslySetInnerHTML(不推荐)  如果有标签   解决安全问题
-ref  父组件引用子组件  获取DOM的引用 
-key  可选的唯一标识符  用来提升组件性能


-------------------------------------------------------------------------------
组件的生命周期
创建  初始化阶段：组件插入到DOM中
更新  运行中状态：组件被重新渲染，查明DOM是否刷新
销毁  销毁阶段：  组件从DOM中移出

  getDefaultProps 获取默认属性，生成组件构造函数时调用，只调用一次(创建类的时候,既React.createClass()时有且调用一次)
创建
  getInitialState 设置组件状态，初始化每个实例的特有初始化状态。在组件挂载之前调用一次。返回值将会作为this.state的初值

  componentWillMount mout就是装载的意思，这个方法的意思就是说组件即将被装载到页面中，也是render之前最后一次修改状态的机会

  Render 必须要添加，组件在render函数生成虚拟节点，最后由react将虚拟节点变成真正DOM节点渲染到页面上
  componentDidMount 组件被装载后才会被调用   (DOM已经渲染成真实的DOM  1.可以做DOM操作    2.可以做数据操作 ajax)



更新(属性或状态发生变化时都会更新)
  componentWillReceiveProps 组件接收到新属性时触发(属性更新是执行),或者父组件属性发生变化，属性在传送到组件之前，可通过此函数处理属性。如修改，更新等。(nextProps)

  shouldComponentUpdate  返回一个布尔值。在组件接收到新的props或者state时被调用。可以在你确认不需要更新组件时使用。(nextProps,nextState)

  componentWillUpdate render之前触发，做准备工作。(nextProps,nextState)

  render  组件在render函数生成虚拟节点，最后由react将虚拟节点变成真正DOM节点渲染到页面上，只能访问props和state,不要修改状态的DOM输出

  componentDidUpdate 更新完成


销毁
  componentWillUnmount  组件将要卸载  这个函数在销毁操作真正执行之前调用，给开发者最后的机会进行一些清理工作

---------------------------------------------------------------------
##操作DOM
1.ref
2.在componentDidUpdate获取DOM元素  ReactDOM.findDOMNode(组件名)
findDOMNode
ReactDOM.findDOMNode(组件名)   用来获取组件
一般用在componentDidMount函数里面
componentDidMount:function () {
            console.dir(this.refs.text);
            var r = ReactDOM.findDOMNode(this);
            var input = r.querySelector('input');
            input.autofocus=true;

        }
注意：component为当前组件 this.findDOMNode()只能用于组件已经被放进DOM中


------------------------------------------------------------------------------
React属性与状态

数据流
数据流是单向的，只能由父节点传到子节点    

属性(props)
属性是从父组件传递数据到子组件

1.props只读，不能使用this.props修改
2.props用于整个组件树中传递数据和配置
3.访问props,需要通过  this.props.属性名   去获取传递的属性值

属性使用键值对
可以传：字符串 变量 对象  计算表达式 函数 数组  组件


扩展运算符    
ES6只能扩展数组  ES5扩展对象

为组件定义默认值
defaultProps
//ES5语法
React.create.class({
    getDefaultProps:function(){
    return {}
    }
})

//ES6语法
class 组件名 extends React.Component{
    render(){

    }
}
组件名.defaultProps={}


---------------------------------------------------------
PropsTypes
React中用来定义组件的类型
-------------------------------------------------

状态(state)
组件内部使用的一个状态，
ES6
class Name extends React.Component{
        constructor(props){
            super(peops)
            this.state={
                isShow:"none"
            }
        }
        render(){
            return <div>
                <div style={{display:this.state.isShow}}>hello,king</div>
                <button onClick={this.handleClick.bind(this)}>切换</button>
            </div>
        }
        handleClick(){
            var isShow=this.state.isShow;
            this.setState({
                isShow:isShow=="block"?"none":"block"
            })
        }
}

ES5
var 组件 = React.createClass({
    getInitialState:function(){
    return{

    }
    render:function(){

    },
    handleClick(){
        this.setState({
            
            })
    }
    }
})
-----------------------------------------------------------------------
React事件
<div onClick={事件处理程序}><div/>
事件处理器绑定到事件
React实现的事件有如下作用
1.事件委派
2.原生事件
例如：
handleClick(){
    alert(1)
}
componentDidMount(){
  var doms = ReactDOM.findDOMNode(this);
  var btn = doms.querySelector("button");
  btn.addEventListener("click",this.handleClick)
}
componentDidMount(){
  var doms = ReactDOM.findDOMNode(this);
  var btn = doms.querySelector("button");
  btn.addEventListener("click",this.handleClick)
}

事件中this的指向
##bind()
  1.事件调用中调用用bind
  2.构造函数中用bind
##箭头函数
class 组件 extends React.Component{
  render(){}
  handleClick=()=>{

  }
}

鼠标事件：

onClick  onContextMenu  onDoubleClick  onMouseDown  onMouseEnter  onMouseLeave  onMouseMove  

onMouseOut  onMouseOver  onMouseUp  onDrop  onDrag  onDragEnd  onDragEnter  onDragExit

onDragLeave  onDragOver  onDragStart

触摸事件：

onTouchCancel  onTouchEnd  onTouchMove  onTouchStart

键盘事件：

onKeyDown  onKeyPress  onKeyUp

剪切事件：

onCopy  onCut  onPaste

表单事件：

onChange  onInput  onSubmit

焦点事件：

onFocus  onBlur

UI事件:

onScroll

滚动事件：

onWheel


-----------------------------------------------------------------------------
React组件的结合

组件 复用视图、逻辑、样式
子组件必须包含在一个html标签里面

--------------------------------------------------------------------------------

安装babel步骤   babel 新语法编译成兼容当前浏览器语法 将jsx编译成js
1.npm install babel-cli -g   全局环境
2.在所需目录下   npm install babel-preset-es2015 babel-preset-es2016 babel-preset-es2017
3.jsx====>js     npm install babel-preset-react
4.echo { "presets": ["es2015","es2016","es2017","react"] } > .babelrc
  或者在所需目录下建立.babelrc文件  自主输入echo { "presets": ["es2015","es2016","es2017","react"] }


命令行命令   编译一个JS文件到另一个JS文件
             babel a.js - o b.js      实现随时编译则为 babel a.js - o b.js -w
             将目录文件夹名里面的JS文件编译到JS文件
             babel es6(文件夹名) -d js
             目录编译到一个JS文件
             babel es6 -o complie.js


-----------------------------------------------------------------------------
<Button type="" size="" clickFn={}>提交</Button>



--------------------------------------------------------------------
组件间通信
父组件--->子组件
父组件--->A组件---->B组件

子组件与父组件
父组件传递函数给子组件，子组件在要修改时调用父组件传递的函数

----------------------------------------------------------------------
React表单
分为两种类型
-约束组件     React管理该表单
-无约束组件   原生DOM管理该表单   <input type="text" defaultValue="name" />

class Text extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val:"123",
            msg:""
        }
    }

    /*无约束表单*/
    render(){
        return <input type="text" defaultValue="1121212"/>
    }


    /*约束表单*/
    render(){
        return <div>
            <input type="text" value={this.state.val} onChange={this.changeHandle.bind(this)} />
            <span>{this.state.msg}</span>
        </div>
    }
    changeHandle(e){
        var val=e.target.value;
        if(val.length>=15){
            this.setState({
                msg:"长度不能超过15"
            });
            return
        }
        if(val.length<=5){
            this.setState({
                msg:"长度不能小于5",
                val:val
            });
        }
        this.setState({
            val:val

        });

        // val = val.toUpperCase();   将小写转化成大写
        // var val = e.target.value;
        // this.setState({
        //     val:val
        // })
    }
}
ReactDOM.render(<Text/>,document.querySelector('#box'));

-----------------------------------------------------------------------
<input type="radio" checked={}>
  defaultChecked

<input type="checkbox" checked={}>
<select value >

-----------------------------------------------------------------------

Webpack   模块化打包工具         http://allcky.coding.me/webpack

1.安装Webpack (全局)
npm install webpack -g
webpack -h   检测是否安装成功
2.查看 webpack 版本信息
npm info webpack


##开始项目
mkdir move  创建文件夹
cd  move
命令行输入npm init  生成Package.json
开发依赖 npm install webpack --save-dev

例子：
1)建立index.html 并且直接引入bundle.js
2)建立index.js(入口文件)
3)打包 命令行运行webpack  index.js bundle.js
4)创建sum.js 里面写 
exports.sum=function(a,b){
  return a+b
}
5)index.js里面
var o = require('./sum.js');
alert(o.sum(10,20));
命令行运行webpack  index.js bundle.js



commonjs规范  模块    让JS不只是运行在浏览器端
创建模块  module.exports={}
使用模块  require()

## 导入模块
var o = require('./a.js')

## 创建模块
//a.js
function sum(a,b){
  return a+b;
}
exports.sum = sum;

/*
  exports = {
  sum:
}

*/




配置文件   利用commonjs规范
var path = require("path");
module.exports={
  entry:"./index.js", 
    或//['./src/mod1.js', [...,] './src/index.js'],
  output:{
  path:path.resolve(__dirname,"dist"),
  filename:"bundle.js"
  }
}




webpack -w  watch方法，实时打包更新
webpack -p  对打包后的文件进行压缩
webpack --dispaly-modules
webpack --config webpack.dev.config.js


装css与css预处理  路径和样式  打包css
npm install css-loader style-loader --save-dev

装less   less编辑器
npm install less-loader less --save-dev

装图片
npm install url-loader file-loader --save-dev 




## es6
// npm一次性安装多个依赖模块，模块之间用空格隔开
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
ES6 与 JSX 处理

module: {
  loaders: [
    {
        test:/\.(js|jsx)?$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{presets:['react','es2015']}
    }
  ]
}    

------------------------------------------------------------------
vue         vue-router
angularjs   ng-router
react       react-router

React项目
-缺数据
-缺路由


单页面、前端路由
前端路由：通过不同的URL展示不同的内容
前端路由的实现
 第一种：hash的变化
 第二种：html5中的history api(基于内存)
     实现如下处理
     1. 在A页面 通过发AJAX请求 请求页面中的B数据。
     2. 在页面A中通过JS装载相应的信息到相应的位置来。
     3. 通过History API在不刷新页面的情况下在浏览器的地址栏中从页面A的URL地址切换到页面B的URL地址。 

     html5中的history api有以下几种
     1. history.pushState(data, title [, url])：往历史记录堆栈顶部添加一条记录；data会在onpopstate事件触发时作为参数传递过去；title为页面标题，当前所有浏览器都会 忽略此参数；url为页面地址，可选，缺省为当前页地址。
     2. history.replaceState(data, title [, url]) ：更改当前的历史记录，参数同上。
     3. history.state：用于存储以上方法的data数据，不同浏览器的读写权限不一样。
     4. popstate事件：当用户单击浏览器的后退或者前进按钮时触发该事件。在事件处理函数中读取触发事件的事件对象的state属性值，该属性值即为执行pushState方法时所使用的第一个参数值，其中保存了在向浏览器历史记录中添加记录同步保存的对象。



ReactRouter

学习地址 http://react-guide.github.io/react-router-cn/index.html

Router是react组件，是一个容器


import { Router,Route,Link} from "react-router" 

路由方式 History   browserHistory
                   hashHistory
                   createMemoryHistory

精确匹配  indexLink
模糊匹配  


混合app  react-native   ==> native-app
                            hybird-app
                            web-app

web-app+native-app==>hybird-app   混合APP
混合APP的开发
html5+js+开发平台（调用手机接口js接口） ==> hybird-app 



安装router
npm install react-router-dom --save



import React from 'react'
import { BrowserRouter as Router,Route,Link} from "react-router-dom"
const Home=function (props) {
    return<div>Home</div>
};
const Login=function (props) {
    return<div>Login</div>
};
const Reg=function (props) {
    return<div>Reg</div>
};
const About=function (props) {
    return<div>About</div>
};
ReactDOM.render(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Reg">Reg</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Reg" component={Reg}/>
            <Route path="/About" component={About}/>
        </div>
    </Router>,document.querySelector("#box")
);

添加类名和样式时    用NAVlink  同时设置exact=true
地址重定向
<Redirect>
--------------------------------------------------------------------------

fetch
使用 XHR 发送一个 json 请求一般是这样：
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.responseType = 'json';

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Oops, error");
};

xhr.send();

使用 Fetch 后
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(e) {
  console.log("Oops, error");
});

使用 ES6 的 箭头函数 后：
fetch(url).then(response => response.json())
  .then(data => console.log(data))
  .catch(e => console.log("Oops, error", e))


componentDidMount(){
  fetch(url
).then((res)=>{
  return res,json()
}).then((data)=>{
  
})
-------------------------------
if(window in fetch){
  
}else{
  ajax+promise
}
fetch().then().then


export aa=function(){}
export bb=function(){}
export obj={}



1.fetch
npm install whatwg-fetch --save-dev
import "whatwg-fetch"


//post请求

String q = req.getParameter("q");
fetch("/search/project/", {
  method: "POST",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: "q=参数q"
}).then(function(response) {
  // do sth
});



2.import    export

 ES6模块的import和export用法总结

ES6之前已经出现了js模块加载的方案，最主要的是CommonJS和AMD规范。commonjs主要应用于服务器，实现同步加载，如nodejs。AMD规范应用于浏览器，如requirejs，为异步加载。同时还有CMD规范，为同步加载方案如seaJS。

ES6在语言规格的层面上，实现了模块功能，而且实现得相当简单，完全可以取代现有的CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案。

ES6模块主要有两个功能：export和import

export用于对外输出本模块（一个文件可以理解为一个模块）变量的接口

import用于在一个模块中加载另一个含有export接口的模块。

也就是说使用export命令定义了模块的对外接口以后，其他JS文件就可以通过import命令加载这个模块（文件）。如下图(假设a和b文件在同一目录下)
// a.js

var sex="boy";
var echo=function(value){
　　console.log(value)
}
export {sex,echo}  
//通过向大括号中添加sex，echo变量并且export输出，就可以将对应变量值以sex、echo变量标识符形式暴露给其他文件而被读取到
//不能写成export sex这样的方式，如果这样就相当于export "boy",外部文件就获取不到该文件的内部变量sex的值，因为没有对外输出变量接口,只是输出的字符串。

复制代码

// b.js
通过import获取a.js文件的内部变量，{}括号内的变量来自于a.js文件export出的变量标识符。
import {sex,echo} from "./a.js" 
console.log(sex)   // boy
echo(sex) // boy

a.js文件也可以按如下export语法写，但不如上边直观，不太推荐。
复制代码

// a.js
export var sex="boy";
export var echo=function(value){
　　console.log(value)
}

//因为function echo(){}等价于 var echo=function(){}所以也可以写成
export function echo(value){
　　　console.log(value)
}

复制代码

以上是export与module的基本用法，再进行拓展学习

前面的例子可以看出，b.js使用import命令的时候，用户需要知道a.js所暴露出的变量标识符，否则无法加载。可以使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名。

//a.js
var sex="boy";
export default sex（sex不能加大括号）
//原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。

复制代码

// b.js
本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any12 from "./a.js" 
console.log(any,any12)   // boy,boy

import

导入整个模块的内容。这将插入myModule当前范围，其中包含由“my-module”标识的模块（通常为“my-module.js”）的所有导出的绑定。
import * as myModule from 'my-module';

导入模块的单个成员。这插入myMember当前范围。
import {myMember} from 'my-module';

导入模块的多个成员。这既插入foo并bar到当前的范围。
import {foo, bar} from 'my-module';

导入一个更方便别名的成员。这插入shortName当前范围。
import {reallyReallyLongModuleMemberName as shortName}
  from 'my-module';

仅导入整个模块以进行副作用，而不导入任何绑定。
import 'my-module';

使用方便的别名导入模块的多个成员。
import {
  reallyReallyLongModuleMemberName as shortName,
  anotherLongModuleName as short
} from 'my-module';


导入默认值

可以有默认的导出（无论是对象，函数，类等）。import 然后该   语句可用于导入此类默认值。

最简单的版本直接导入默认值：
import myDefault from 'my-module';

也可以使用默认语法与上述（命名空间导入或命名导入）。在这种情况下，默认导入将必须首先声明。例如：
import myDefault, * as myModule from 'my-module';
// myModule used as a namespace

要么
import myDefault, {foo, bar} from 'my-module';
// specific, named imports

import 和  import {}  from
import 'lodash';  执行lodash模块，但是不输入任何值。

import {}  from  import 一个模块中的变量等内容必须对其做模块解构，否则只会执行代码而没有任何导入的内容






export
export和import用于JavaScript的模块化操作。你可以在文件A.js中写好一些对象：

export var foo1；
export function foo2(){}；
export class foo3 extend prop{}

然后在其他地方引用这些模块

import {foo1，foo2， foo3} from 'A.js'

export default就是暴露一个默认的变量，函数或者类，而这个变量，函数或者类可以没有名字，直接导入。例如：

//A.js
export default "string";

//B.js
import foo from "A";
console.log(foo);

有两种不同的导出方式，每种方式对应于上述的一种语法：

    命名导出：

    export { myFunction }; // 导出一个函数声明
    export const foo = Math.sqrt(2); // 导出一个常量

默认导出 (每个脚本只能有一个)：

export default myFunctionOrClass // 或者 'export default class {}'
// 这里没有分号

对于只导出一部分值来说，命名导出的方式很有用。在导入时候，可以使用相同的名称来引用对应导出的值。

关于默认导出方式，每个模块只有一个默认导出。一个默认导出可以是一个函数，一个类，一个对象等。当最简单导入的时候，这个值是将被认为是”入口”导出值。
示例
Edit
命名导出

在这个模块里，我们可以这么导出：

// module "my-module.js"
export function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
export { foo };

这样的话，在其它脚本 (cf. import)，我们可以这样使用：

import { cube, foo } from 'my-module.js';
console.log(cube(3)); // 27
console.log(foo);    // 4.555806215962888

默认导出

如果我们只想导出一个简单的值或者想在模块中保留一个候选值，就可以使用默认导出：

// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}

然后，在另一个脚本中，默认的导出值就可以被简单直接的导入：

// module "my-module.js"
import cube from 'my-module';
console.log(cube(3)); // 27​​​​​



注意:export default 和 export default function xxx(){}

如果使用了 export default function xxx 那么在引用的时候只能是 

import xxx from './test.js'.  xxx只能是function的名称，使用的时候直接xxx()调用当前函数了。



下面比较一下默认输出和正常输出。

// 第一组
export default function crc32() { // 输出
  // ...
}

import crc32 from 'crc32'; // 输入



// 第二组
export function crc32() { // 输出
  // ...
};

import {crc32} from 'crc32'; // 输入

上面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。

export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能对应一个方法。




