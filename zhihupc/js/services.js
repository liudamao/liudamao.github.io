var services = angular.module('services',[]);
services.factory('store',function ($http,$q) {
    return{
        themes:(function () {
            var d = $q.defer();//创建延迟对象
            $http({
                url:'php/api.php?url=http://news-at.zhihu.com/api/4/themes'
            }).then(function (data) {
                d.resolve(data.data);
            })
            return d.promise;
        })(),
        getNews:function (id) {
            var d = $q.defer();
            $http({
                url:'php/api.php?url=http://news-at.zhihu.com/api/4/news/latest'
            }).then(function (data) {
                d.resolve(data.data);
            })
            return d.promise;
        },
        getThemeId:function (id) {
            var d = $q.defer();
            $http({
                url:'php/api.php?url=http://news-at.zhihu.com/api/4/theme/'+id
            }).then(function (data) {
                d.resolve(data.data);
            })
            return d.promise;
        },
        getArticle:function (id) {
            var d = $q.defer();
            $http({
                url:'php/api.php?url=http://news-at.zhihu.com/api/4/news/'+id
            }).then(function (data) {
                console.log(data)
                d.resolve(data.data);
            })
            return d.promise;

        }
    }

})


