(function(angular){
  'use strict';
  //注册一个新模块
  angular.module('app.services.main',[])
    .service('MainService',['$window',function($window){
      var storage=$window.localStorage;
      var todos=  storage['my_todo_list']?JSON.parse(storage['my_todo_list']) :  [];
      
      //业务逻辑都必须出现在服务中（专门定义业务逻辑）

      //控制私有字段的方位权限
      this.get=function(){
        return todos;
      }

      function getId(){
        var id=Math.random();
        for(var i=0;i<todos.length;i++){
          if(todos[i].id===id){
            id=getId();
            break;
          };
        };
        return id;
      };

      function save(){
        storage['my_todo_list']=JSON.stringify(todos);
      }
      //添加todo
      this.add=function(text){
        todos.push({
          id:getId(),//自动增长?
          //由于$scope.text是双向绑定的，add同时肯定可以同时拿到界面上的输入值
          text:text,
          completed:false
        });
        save();
      };
    
      this.remove=function(id){
        for(var i=0;i<todos.length;i++){
          if(todos[i].id===id){
            todos.splice(i,1);
            break;
          };
        };
        save();
      };
    
      //清空已完成
      this.clearCompleted=function(){
        var result=[];
        for(var i=0;i<todos.length;i++){
          if(!todos[i].completed){
            result.push(todos[i]);
          };
        };
        todos=result;
        save();
        //此时我们将todos指向了一个新的地址
        return todos;
        
      };
    
      //是否有已经完成的
      this.existCompleted=function(){
        for(var i=0;i<todos.length;i++){
          if(todos[i].completed){
            return true;					
          };				
        };
        return false;
      };

      //数据更新
      this.update=function(id,target){
        save();
      };

      //切换状态
      var now=true;
      this.toggleAll=function(){
        for(var i=0;i<todos.length;i++){
          todos[i].completed=now;				
        };
        now=!now;
        save();
      };
    }]);

})(angular)