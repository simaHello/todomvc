(function(angular){
  'use strict';

  var controller=angular.module('app.controllers.main',['app.services.main']);
  controller.controller('MainController',['$scope','$route','$routeParams','MainService',function($scope,$route,$routeParams,MainService){
    // function getId(){
    //   var id=Math.random();
    //   for(var i=0;i<$scope.todos.length;i++){
    //     if($scope.todos[i].id===id){
    //       id=getId();
    //       break;
    //     };
    //   };
    //   return id;
    // };
  
    //文本框需要一个模型
    $scope.text='';
  
    //任务列表需要一个模型
    //每一个任务的结构{id:1, text:'学习',completed:true}
    $scope.todos=MainService.get();
  
    //添加todo
    $scope.add=function(){
      //参数校验 页面逻辑
      if(!$scope.text){
        return;
      }
      MainService.add($scope.text)
      //清空文本框
      $scope.text='';
    };
  
    $scope.remove=function(id){
      //删除谁
      MainService.remove(id);
    };
  
    //清空已完成
    $scope.clear=function(){
      var newTodos=MainService.clearCompleted();
      $scope.todos=newTodos;
    };
  
    //是否有已经完成的
    $scope.existCompleted=function(){
      return MainService.existCompleted();
      //该函数一定要有返回值
      // for(var i=0;i<$scope.todos.length;i++){
      //   if($scope.todos[i].completed){
      //     return true;					
      //   };				
      // };
      // return false;
    };
  
  
    //当前编辑哪个元素
    $scope.currentEditingId=-1;
    $scope.editing=function(id){
      $scope.currentEditingId=id;
    }
  
    $scope.save=function(){
      $scope.currentEditingId=-1;
    }
  
    $scope.toggle=function(){
      MainService.update();
    }

    $scope.toggleAll=function(){
      MainService.toggleAll();
    };
  
    //状态筛选
    $scope.selector={};//{}  {completed:true}  {completed:false}
    //点击事件有dom操作，不合适
    //取路由中匹配出来的数据
    var status=$routeParams.status;
    
    switch(status){
      case 'active':$scope.selector={completed:false};
      break;
      case 'completed':$scope.selector={completed:true};
      break;
      default:
        $route.updateParams({status:''});
        $scope.selector = {};
      break;
    };
  
    //自定义比较函数,默认的filter过滤器使用的是模糊匹配
    $scope.equalCompare=function(source,target){
      
      return source===target;
    }
    
  }]);
})(angular)
