# Angularjs介绍
> Angularjs是一个MVC前端开发框架。

提供了很多服务，数据绑定、DOM
操作、MVC设计模式、模块开发、指令
```
<table>
	<tr>
		<td duiqi3 ></td>  属性指令
	</tr>
</table>

<video src=""></video>  标签指令
```
## 框架 与 库

## 热门前端开发框架
|-- Angularjs 1.0 2.0 4.0
|-- React.js 组件化开发 Facebook HOT
|-- Vue.js   渐进式前端开发框架  HOT

## AngularJS使用场景
AngularJS主要适用于：

1. 单页面Web应用
2. (大量的数据操作)CRUD的管理系统开发
3. 开发前后端分离式的应用
4. 前后端交互频繁、大量AJAX操作

AngularJS不适用于：

1. 需要SEO的内容网站
2. 交互特别多
3. 过于简单页面

### AngularJS核心思想
- 依赖注入
- 模块化
- 双向数据绑定(MVVM)
- MVC
- 指令

## 使用angularjs
### ng-app指令
ng-app当前页面唯一

### ng-model指令
只能用于表单  用来实现双向数据绑定

### ng-init指令
初始变量

### ng-bind指令
给视图绑定数据


### ng-controller  给指定的视图绑定指定控制器


----------------------------------
## 创建模块
var 模块 = angular.module('模块名',当前模块依赖列表)

var app = angular.module('app',[]);
### 自定义控制器
app.controller('控制器名',回调函数)

app.controller('ctrl',function($scope){
	//业务逻辑
})

视图与控制器关联  需要借助 $scope

$scope是视图与控制器间沟通的一个桥梁

```
<html ng-app="app">
var app = angular.module('app',[]);
app.controller('ctrl',function($scope){
	//业务逻辑
	$scope.title = "hello";
})

<p ng-controller="ctrl">
	{{title}}
</p>
```

## angularjs表达式
只有 变量、运算符、纯文本

## angularjs作用域$scope
$scope  作用域 只属于当前控制器

$rootScope 根作用域 作用在全局
1. app.run(function($rootScope){})
run方法 初始化全局数据

2. 在控制器中 注入$rootScope 、对$rootScope操作


## ng-repeat
独立的作用域、复制模板、暴露特殊属性

