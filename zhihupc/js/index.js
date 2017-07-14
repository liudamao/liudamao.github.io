var app = angular.module('app',['drt','ngRoute','services','ngSanitize']);
app.run(function ($rootScope,store) {
    store.themes.then(function (data) {
        $rootScope.themes = data.others;
    })
})
app.config(function ($routeProvider) {
    $routeProvider.when('/',{
        templateUrl:'tpl/home.html',
        controller:function ($scope,store) {
            store.getNews().then(
                function (data) {
                    $scope.data = data.stories;
                }
            )
        }
    }).when('/list/:id',{
        templateUrl:'tpl/list.html',
        controller:function ($scope,$routeParams,store) {
            var id = $routeParams.id
            store.getThemeId(id).then(function (data) {
                $scope.data=data
            })
        }

    }).when('/show/:id',{
        templateUrl:'tpl/show.html',
        controller:function ($scope,$routeParams,store) {
            var id = $routeParams.id
            store.getArticle(id).then(function (data) {
                console.log(data)
                $scope.data=data
            })
        }

    })

})





