
window.onload = function () {
    var leftList = document.querySelector(".left-list");
    var clientHeight = document.documentElement.clientHeight;
    var titleHeight = document.querySelector(".left-title").offsetHeight;
    var rightList = document.querySelector(".right-list");
    leftList.style.height = clientHeight-titleHeight+"px";
    rightList.style.height = clientHeight-titleHeight+"px";

};
var todos = [
    {
        id:1,
        title:"列表1",
        color:'#c970e1',
        todos:[
            {
                title:'8点开会',done:true,
                time:2017-5-16
            },
            {
                title:'12点吃饭',done:true,
                time:2017-5-16
            },
            {
                title:'2点做项目',done:false,
                time:2017-5-16
            },
            {
                title:'6点下班',done:false,
                time:2017-5-16
            },
            {
                title:'8点休息',done:false,
                time:2017-5-16
            }
        ]
    },
    {
        id:2,
        title:"列表2",
        color:'#6ddb31',
        todos:[
            {
                title:'8点开会',done:true,
                time:2017-5-16
            },
            {
                title:'12点吃饭',done:true,
                time:2017-5-16
            },
            {
                title:'2点做项目',done:true,
                time:2017-5-16
            },
            {
                title:'6点下班',done:false,
                time:2017-5-16
            },
            {
                title:'8点休息',done:false,
                time:2017-5-16
            }
        ]
    },
    {
        id:3,
        title:"列表3",
        color:'#3fabf8',
        todos:[
            {
                title:'8点开会',done:true,
                time:2017-5-16
            },
            {
                title:'12点吃饭',done:true,
                time:2017-5-16
            },
            {
                title:'2点做项目',done:false,
                time:2017-5-16
            },
            {
                title:'6点下班',done:false,
                time:2017-5-16
            },
            {
                title:'8点休息',done:false,
                time:2017-5-16
            }
        ]
    }
];

var colors=['#c970e1','#6ddb31','#3fabf8','#f2cb00','#9f835d','#f8246a','#f89600'];
var todo = angular.module('todo',[]);
todo.controller('ctrl',function ($scope,$filter) {
    $scope.todos = todos;
    $scope.colors = colors;
    $scope.index = $scope.todos.length-1;

//    选中指定列表
    $scope.selectList = function (i) {
        $scope.index=i;
        $scope.isShow = false;
        getComNum()
    };

//    添加列表
    $scope.addList = function () {
        var lasti = $scope.todos.length-1;
        var id = $scope.todos[lasti].id+1;
        $scope.todos.push({
            id:id,
            title:'列表'+id,
            color:colors[(id-1)%7],
            todos:[]
        });
        $scope.index = $scope.todos.length-1;
    };

// //    已完成的显示隐藏
    $scope.isShow = false;
    $scope.showComList = function () {
        $scope.isShow = !$scope.isShow;

    };

//    获取已完成事项的数量
    $scope.ComNum = 0;
    getComNum();
    function getComNum() {
        var arr = $filter('filter')($scope.todos[$scope.index].todos,true);
        $scope.ComNum = arr.length;
    }
    $scope.$watch('index',function () {
        getComNum();
    });

//    清除已完成
    $scope.clearComItem = function () {
        var tds = $scope.todos[$scope.index].todos;
        $scope.todos[$scope.index].todos = $filter('filter')(tds,false);
        getComNum();
        $scope.isShow = false;
    };

//    新增item
    $scope.addItem = function () {
        var tds = $scope.todos[$scope.index].todos;
        tds.push({
            title:'',
            done:false,
            time:new Date().getTime()
        })

    };

//   修改完成状态
    $scope.changeState = function(v,flag){
        if(!flag){
            v.done=true;
        }else{
            v.done=false;
        }
        getComNum();
    };


//    消失
    $scope.settingFlag = false;
    $scope.showSetting = function () {
        $scope.settingFlag = !$scope.settingFlag;
        $scope.changeTitle = $scope.todos[$scope.index].title;
        $scope.changeColor = $scope.todos[$scope.index].color;
    };

    $scope.changeC = function (c) {
        $scope.changeColor=c;

    };

    //删除
    $scope.delList = function () {
        $scope.todos.splice($scope.index,1);
        $scope.cancel();
        $scope.index = $scope.todos.length-1;
    };

    //取消
    $scope.cancel = function () {
        $scope.settingFlag = false;
    };

    //完成
    $scope.finish = function () {
        var td = $scope.todos[$scope.index];
        td.title = $scope.changeTitle;
        td.color = $scope.changeColor;
        $scope.cancel();

    }




});

