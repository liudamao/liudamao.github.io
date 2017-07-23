var data = [
	{
		id:1,
		name:'苹果',
		pic:'images/pg.jpg',
		price:2.32
	},
	{
		id:2,
		name:'香蕉',
		pic:'images/xj.jpg',
		price:4.32
	},
	{
		id:3,
		name:'火龙果',
		pic:'images/hlg.jpg',
		price:5.3232
	},
	{
		id:4,
		name:'猕猴桃',
		pic:'images/mht.jpg',
		price:3.33333
	}
]

var app = angular.module('app',[]);

app.controller('fruit',function($scope){
	$scope.fruit = data;
	$scope.car=[];
	$scope.buy = function(v){
		var flag = true;
		$scope.car.forEach(function(item,i){
			if(item.id == v.id){
				item.nums+=1;
				flag = false;
			}
		})
		if(flag){
			$scope.car.push({
				id:v.id,
				name:v.name,
				price:v.price,
				nums:1
			})
		}
	}

	$scope.del = function(i){
		$scope.car.splice(i,1);
	}

	$scope.add = function(v){
		v.nums+=1;
	}

	$scope.jian = function(v,i){
		v.nums-=1;
		if(v.nums<=0){
			if(confirm('是否要删除')){
				$scope.del(i)
			}else{
				v.nums=0;
			}
		}
		
	}

	$scope.total = 0;
	$scope.sum = function(){
		$scope.total = 0;
		$scope.car.forEach(function(el, i){
			$scope.total +=el.nums * el.price;
		});
	}

	$scope.$watch("car",function(){
		$scope.sum();
	},true)
})
