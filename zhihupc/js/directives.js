var drt = angular.module('drt',[])
drt.directive('item',function () {
    return{
        templateUrl:"tpl/item.html",
        scope:{data:'='}
    };
});