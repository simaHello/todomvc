(function (angular) {
	'use strict';//使用严格模式,不允许使用不安全的语法

	/**
	 * MyToDoMvc Module
	 * 
	 * 应用程序的主要模块
	 */
	//为应用程序创建一个模块，用来管理界面的结构
	var myApp=angular.module('app',['ngRoute','app.controllers.main']);

	//路由配置
	myApp.config(['$routeProvider',function($routeProvider){
		$routeProvider
			.when('/:status?',{
				controller:"MainController",
				templateUrl:"main_tmpl"
			})
			.otherwise({redirectTo:'/'});
	}])

	//注册一个主要的控制器 $routeParams
	


	//注册一个主要的控制器 $location服务
	// myApp.controller('MainController',['$scope','$location',function($scope,$location){
	//  获取卫衣ID
	// 	function getId(){
	// 		var id=Math.random();
	// 		for(var i=0;i<$scope.todos.length;i++){
	// 			if($scope.todos[i].id===id){
	// 				id=getId();
	// 				break;
	// 			};
	// 		};
	// 		return id;
	// 	};

	// 	//文本框需要一个模型
	// 	$scope.text='';

	// 	//任务列表需要一个模型
	// 	//每一个任务的结构{id:1, text:'学习',completed:true}
	// 	$scope.todos=[
	// 		{id:1, text:'学习',completed:false},
	// 		{id:2, text:'睡觉',completed:false},
	// 		{id:3, text:'打豆豆',completed:true},
	// 	];

	// 	//添加todo
	// 	$scope.add=function(){
	// 		if(!$scope.text){
	// 			return;
	// 		}
	// 		$scope.todos.push({
	// 			id:getId(),//自动增长?
	// 			//由于$scope.text是双向绑定的，add同时肯定可以同时拿到界面上的输入值
	// 			text:$scope.text,
	// 			completed:false
	// 		});
	// 		//清空文本框
	// 		$scope.text='';
	// 	};

	// 	$scope.remove=function(id){
	// 		//删除谁
	// 		for(var i=0;i<$scope.todos.length;i++){
	// 			if($scope.todos[i].id===id){
	// 				$scope.todos.splice(i,1);
	// 				break;
	// 			};
	// 		};
	// 	};

	// 	//清空已完成
	// 	$scope.clear=function(){
	// 		var result=[];
	// 		for(var i=0;i<$scope.todos.length;i++){
	// 			if(!$scope.todos[i].completed){
	// 				result.push($scope.todos[i]);
	// 			};
	// 		};
	// 		$scope.todos=result;
	// 	};

	// 	//是否有已经完成的
	// 	$scope.existCompleted=function(){
	// 		//该函数一定要有返回值
	// 		for(var i=0;i<$scope.todos.length;i++){
	// 			if($scope.todos[i].completed){
	// 				return true;					
	// 			};				
	// 		};
	// 		return false;
	// 	};


	// 	//当前编辑哪个元素
	// 	$scope.currentEditingId=-1;
	// 	$scope.editing=function(id){
	// 		$scope.currentEditingId=id;
	// 	}

	// 	$scope.save=function(){
	// 		$scope.currentEditingId=-1;
	// 	}

	// 	var now=true;
	// 	$scope.toggleAll=function(){
	// 		for(var i=0;i<$scope.todos.length;i++){
	// 			$scope.todos[i].completed=now;				
	// 		};
	// 		now=!now;
	// 	};

	// 	//状态筛选
	// 	$scope.selector={};//{}  {completed:true}  {completed:false}
	// 	//点击事件有dom操作，不合适

	// 	$scope.$location=$location;//让$scope也有一个指向location的数据成员
	// 	//$watch只能监视属于$scope的成员
	// 	$scope.$watch('$location.hash()',function(now,old){
	// 		//1、拿到锚点值
	// 		//这样写要求执行环境必须要有window对象
	// 		// var hash=window.location.hash;
	// 		// console.log($location);
	// 		// var hash=$location.hash();
	// 		// console.log(hash);
	// 		//2、根据锚点值对selector做变换
	// 		switch(now){
	// 			case '/active':$scope.selector={completed:false};
	// 			break;
	// 			case '/completed':$scope.selector={completed:true};
	// 			break;
	// 			default:$scope.selector={};
	// 			break;
	// 		};
	// 	});

	// 	//自定义比较函数,默认的filter过滤器使用的是模糊匹配
	// 	$scope.equalCompare=function(source,target){
			
	// 		return source===target;
	// 	}
		
	// }]);
})(angular);
