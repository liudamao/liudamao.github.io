phpcms  内容管理系统
|---企业开发    mvc开发框架
     开源  thinkphp  二次开发
     自己开发
     
|---内容管理系统  完整的、通用的系统
     phpcms dedecms 帝国cms

------------------------------------
{JS_PATH}===><?php  echo JS_PATH?>

{} ==<?php ?>  正则、为本替换

静态资源目录
CSS_PATH
IMG_PATH
JS_PATH


phpcms语法
从后台获取指定模块指定操作的数据
{pc:content action="" num="" return="" page=""}

返回数据默认名称为$data   通过return字段修改变量名称


{loop $data $k $v}  ==> <?php  forecho($data) $k $v?>

{loop $data $v}
  {$v}
{/loop}


模板包含
{template 'module name','file name'}
{template 'content','header'}
{template 'content','wheel'}
{template 'content','footer'}




头部必写 ： 标题    关键字   描述   内核(meta标签)


取出所有栏目
{$CATEGORYS}

轮播图
1 单独建立  轮播图栏目
  title  thumb  url  
-----------------------------------------
2 推荐位
 首页轮播图
 推荐位的内容  是从各个栏目来的
 访问的是推荐位
{pc:content action="position" posid="推荐位id" num=""}    {/pc}

-------------------------------------------------------

树形结构
 首页--栏目页--列表页--内容页
 ---------------------------------------

 首页
 公司介绍  list->show
 新闻资讯category
    企业新闻 cate->list->show

 品牌产品 list->show
 投资者关系
    公司架构 cate->list->show
    公司管制 cate->list->show
    财务概要 cate->list->show
 主题活动  ->list->show
    近期活动
    往期活动
    活动资料
    专家专栏



1.定义模型

2.添加字段

3.{pc:content action="lists" catid="" moreinfo="1"}
  {php $tootinfo = $data[1]}
    <p>通讯地址:{$tootinfo['address']}</p>
    <p>邮编</p>
    <p>邮编</p>
    <p>邮编</p>
    <p>邮编</p>




1.mvc    突出mvc  
2.phpcms  pc  移动端
pc   1
铁府  康尼尔  2
舞蹈培训  内容更换  移动端 1


模型
新闻类的信息：标题 内容 作者 来源 发布时间等属性

模型对比：
内容模型
   标题 内容 作者 来源 发布时间等属性
下载模型
  下载地址 软件语言  软件版本 软件图片  软件平台  软件大小 软件类型  发布时间

首页 a href="{WEB_PATH}"  或者{APP_PATH}

时间{date('Y-m-d',$v['inputtime'])}

如果栏目有子栏目------点击栏目进入栏目页
如果栏目没有子栏目--------点击栏目进入列表页