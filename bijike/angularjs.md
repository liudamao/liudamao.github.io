5月8日记

coding.net

协同开发
1.代码仓库
2.版本管理   可以回到之前任一时间点的内容
3.版本分之   可以在原有基础上进行分之

----------------------------------------
svn 集中版本管理
git 分布式版本管理

-------------------------------------------

## 热门前端开发框架
|-- AngularJS   1.0（2012年发布）  2.0  4.0 （2017年）
|-- React.js  组件化开发  由Facebook开发          HOT
|-- Vue.js    渐进式前端开发框架   cn.vuejs.org   HOT

--------------------------------------------------------

AngularJS简介
   用js语言编写的一个前端开发框架  由Google开发   MVC的框架
1.简化前端开发负担
2.提供了一系列兼容性良好并且可扩展的服务，包括数据绑定、DOM的操作、MVC设计模式、模块开发、指令
指令：对html进行扩展

AngularJS使用场景
  AngularJS主要适用于：
   1.单页面web应用  SPA
   2.(大量的数据操作)CRUD的管理系统来发
   3.开发前后端分离式的应用   既 前台实现跳转、业务逻辑等    后台只负责数据
   4.前后端交互频繁、大量AJAX操作

  不适用于：
   1.需要SEO的内容网站
   2.交互频繁的，如游戏之类交互体验网站
   3.过于简单页面

核心思想(特点)：
--依赖注入        将这种后端语言的设计模式赋予前端代码，这意味着前端的代码可以提高重用性和灵活性
--模块化          每个模块的代码独立拥有自己的作用域，model，controller等
--双向数据绑定(MVVM)   view层的数据和model层的数据是双向绑定的，其中之一发生更改，另一方会随之变化
--MVC
--指令
--服务

采用AngularJS开发优势 （mvc在前台的优势）
1.分离前后端关注点，前端负责界面显示，后端负责数据存储和计算
2.减轻服务器压力，服务器只用出数据，不用管展示逻辑和页面合成，吞吐能力会提高几倍
3.同一套后端程序代码，不用修改就可以用于web界面、手机、平板等多种客户端

为什么使用AngularJS？
1.减轻服务器压力，服务器只负责输出数据，不管页面逻辑和布局
2.减少DOM操作
3.加快了开发速度
4.体会最深的是能够将关注点分离的非常彻底。
服务层(AJAX请求) --业务层(controller)--展现层(html模板)--交互层(animation)

BOOTCDN

https；//docs.angularjs.org/api


应用组成
MVC

--------------------------
oninput事件

内置控制器    和   自定义控制器
-------------------------
指令：用来扩展浏览器能力的技术之一，指令(directive)是以ng为前缀的html属性

Angularjs常用指令

Ø ng-app通知引入的AngularJS页面中的哪一部分进行管理 可根据需求添加在哪一部分  通常在body 或html
      当前页面唯一

Ø ng-model 只能用于表单  用来实现数据双向绑定  把元素值（比如输入域的值）绑定到应用程序

Ø ng-init 用来初始化应用程序设计

Ø ng-bind 给标签或视图绑定数据

Ø ng-controller 给指定的视图绑定指定控制器

Ø ng-show  显示内容(样式)   (display:block|none)

Ø ng-hide  隐藏内容(样式)

Ø ng-if    通过节点的增加和删除来实现显示和隐藏

Ø ng-class
   字符串数组形式
   <div ng-class="{true:'big',false:'small'}[false]"></div>
   对象key/value处理
   <div ng-class="{big:'true',small:'false'}"></div>
   动态绑定class
   ng-class="dynamicClass"

Ø ng-class-even 类似 ng-class，但只在偶数行起作用

Ø ng-class-odd 类似 ng-class，但只在奇数行起作用

Ø ng-style 表达式返回由CSS属性或值组成的对象

Ø ng-href  添加链接(支持表达式) 写法 ng-href={{}}

Ø ng-src   添加链接(支持表达式)
   
Ø ng-include  指令包含外部的html文件   (需要在服务器环境下,本质是通过ajax请求)

Ø ng-clock   防止js代码未加载完而出现的问题，出现花括号 

Ø ng-repeat 用来遍历一个集合   或成为集合中的每个元素生成一个模板实例
   独立的作用域   复制模板 

     ng-repeat参数
     $index:遍历的进度（0...length-1）
     $first:当元素是遍历的第一个值时为true
     $missle:当元素处于第一个和最后元素之间值时为true
     $last:当元素是遍历的最后一个值时为true
     $even:当$index值是偶数时值为true
     $odd:当$index值是奇数时值为true

遍历时，如果有重复值，必须写track by  如：ng-repeat="a in arr track by $index"
遍历问题解决
  业务上自己生成唯一的id
    item in item track by item.id

  或者直接拿循环的索引变量$index来用
    item in items track by $index


## 事件指令
ng-click/dblclick
Ø ng-mousedown/up
Ø ng-mouseenter/leave
Ø ng-mousemove/over/out
Ø ng-keydown/up/press
Ø ng-focus/blur
Ø ng-submit
Ø ng-copy   拷贝事件的行为
Ø ng-cut    剪切事件的行为
Ø ng-paste  粘贴事件的行为

## 表单指令
Ø ng-value
Ø ng-checked
Ø ng-selected



取数据方式：{{  }}  或者 ng-bind
<div>{{name}}</div>    或者<div ng-bind="name"></div>

 -----------------------------------------------

module 创建一个模块
var 模块=angular.module('模块的名字,如app',[当前模块依赖列表])
var app=angular.module('app',[])

自定义控制器
app.controller('控制器的名字',回调函数)

app.controller('ctrl',function($scope){     //$scopey既是依赖注入   需要什么写什么，如需要$rootscope则写$rootscope根作用域
   //业务逻辑
	
})

视图与控制器关联  需要借助$scope(作用域)   $scope是视图与控制器间沟通的一个桥梁
控制器有作用范围，可以写多个控制器

------------------------------------------
<html ng-app="app">
var app=angular.model('app',[])
app.controller('ctrl',function($scope){
   //业务逻辑
   $scope.title="hello"
	
})
	
<p ng-controller="ctrl">
	{{title}}
</p>
</html>
-------------------------
AngularJS表达式
使用表达式把数据绑定到html
表达式写在双大括号内{{表达式}}   表达式只有写变量、运算符(三元表达式)、纯文本 、函数调用、过滤器   特殊的是不能自增

作用域
   $scope对象是定义应用业务逻辑，控制器方法和视图的地方   不负责处理和操作数据，它是视图与控制器连接的桥梁
      作用域是应用状态的基础，基于动态绑定   只属于当前控制器

   $rootScope 根作用域  作用在全局

   app.run(function($rootScope){
      $rootScope.title="111111"
   })
    run方法   初始化全局数据

  $watch
     $watch是一个scope函数，用于监听模型变化，当你的模板部分发生变化时它会通知你
     $watch(watchExpression,function,objectEquality)
     --watchExpression:监听的对象，它可以是一个表达式或函数
     --function：当变化时会被调用的函数或者表达式，它接收三个参数：newValue(新值)，oldValue(旧值)，scope(作用域的引用)
     --objectEquality：是否深度监听如果设置为true，则告诉你Angular检查所监控的对象中每一个属性的变化
     false则没有深度监听

--------------------------------------------------------------------------------------------------

5月9日记

# 过滤器
用来格式化需要展示给用户的数据

##内置过滤器

常用过滤器
| 过滤器    | 描述                    |
| :-------: | :----------------------:|
| currency  | 格式化数字为货币格式    |
| filter    | 从数组项中选择一个子集  |
| lowercase | 格式化字符串为小写      |
| uppercase | 格式化字符串为大写      |
| orderBy   | 根据某个表达式排列数组  |
| number    | 表示保留小数位数        |
| date      | 格式化日期的格式        |
| limitTo   | 获取指定长度数组或字符串|





##使用过滤器
1.在表达式中使用
#带参数过滤器用法
{{data | 过滤器名:参数1:参数2......}}

#使用多个过滤器
{{data | 过滤器名 | 过滤器名 | 过滤器名 ...}}

### currency  过滤器可以将一个数字格式化为货币格式
currency:"符号":小数位数

$scope.num=10000
{{num | currency}}   //结果   $10,000.00
{{num | currency:"￥"}} //可以修改符号 ￥10,000.00
{{num | currency:"￥":0}} //可以指定保留小数位数   ￥10,000

###uppercase  转换成大写
###lowercase  转换成小写

### date
{{data | 过滤器名}}

格式化字符串的基本参数：
http://blog.csdn.net/smile_panda/article/details/50604868
 date过滤器的功能是基于要求的格式格式化一个日期成为一个字符串。

格式化字符串的基本参数：
‘yyyy’: 用4位数字表示年（例如：AD 1 => 0001, AD 2010 => 2010）

‘yy’: 用两位数字表示年（00-99）（例如：AD 2001 => 01, AD 2010 => 10）

‘y’: 用一位数字代表年（例如：AD 1 => 1, AD 199 => 199）

‘MMMM’: 英文全称表示月（January-December）

‘MMM’: 英文缩写表示月（Jan-Dec）

‘MM’: 两位数字表示月（01-12）

‘M’: 月（1-12）

‘dd’: 两位数字表示日（01-31）

‘d’: 日（1-31）

‘EEEE’: 英文全称的一周中的天（Sunday-Saturday）

‘EEE’: 英文缩写的一周中的天（Sun-Sat）

‘HH’: 两位数表示24小时制的时（00-23）

‘H’: 24小时制的时（0-23）

‘hh’: 两位数字表示上午或下午的时（01-12）

‘h’: 上午或下午的时（1-12）

‘mm’: 两位数字表示分（00-59）

‘m’: 分（0-59）

‘ss’: 两位数字表示秒（00-59）

‘s’: 秒（0-59）

‘sss’: 毫秒（000-999）

‘a’: AM/PM

‘Z’: 4位数字（+符号）代表时区偏移量（-1200——+1200）

‘ww’: 用两位数字表示一年的周数（00-53），第一周（01）是一年中的第一个星期四

‘w’:  一年的周数(0-53)，第一周（1）是一年中的第一个星期四

‘G’,’GG’,‘GGG’: 年代字符串的缩写形式，例如‘AD’（公元）

‘GGGG’: 年代字符串的全称，例如‘Anno Domini’（公元）

上面这些参数我们可以根据自己的意愿自由组合得到自己想要的格式，例如'yyyy-MM-dd'等



### number  表示保留小数位数

### limitTo截取
{{[10,33,44,55,33,34,67,88]| limit:3}}  //10,33,44
{{[10,33,44,55,33,34,67,88]| limit:-3}} //34,67,88
{{[10,33,44,55,33,34,67,88]| limit:3:2}}//55,33    3为起始位置  2为截取几个

###orderBy 排序
{{arr|orderBy}}     默认从小到大排序
{{arr|orderBy:'+'}} 从小到大排序  
{{arr|orderBy:'-'}} 从大到小排序
{{arr|orderBy:['1','1']}} 如果1相同，按照2进行排序

###filter 
{{ arr | filter:search:true}}


2.在javascript中使用

服务
$scope  $window $document $interval $timeout  $http   $filter 

app.controller('c',function($scope,$filter){
  $filter('过滤器名称')(要过滤的内容,参数1,参数2，....);
})




自定义过滤器
app.filter("过滤器名",function(){  //此函数是用来依赖注入的
     return function(){

   }
  
})


1.截取   超过指定字符出现省略号

app.filter("ellipsis",function(){
     return function(str,cilpnum,tag=""){
     return ste.substr(0,clipnum)+tag;
   }
  
})


{{str|ellipsis}}

2.中文汉字排序   [张三  李四 王武]   
app.filter("sortZh",function(){
     return function(arr){
        return arr.sort(function(a,b){
        a.localeCompare(b);
        })
   }
  
})

3.将单词首字母大写
     将所有单词首字母大写






AngularJS知识点记住
phpcms项目





----------------------------------------------
1.应用引擎
创建部署 类型  php5.5web
找到  克隆的地址

2.应用引擎
扩展服务  创建mysql



指令   控制器   前后台分离    

----------------------------------------------------------


