<div ng-app="myApp" ng-controller="formCtrl">
<form name="myForm" novalidate>
    <p>Username:</p>
      <input type="text" name="Fuser" ng-model="user" ng-model-options="{updateOn: 'blur'}" required>
      <span style="color:red" ng-show="myForm.Fuser.$dirty && myForm.Fuser.$invalid">
        <span ng-show="myForm.Fuser.$error.required">Username is required.</span>
      </span>
    </p>
    <p>{{user}}</p>
    <p>
      <input type="submit" ng-disabled="myForm.Fuser.$invalid">
    </p>
    <button ng-click="reset()">RESET</button>
</form>
</div>
<script>
  var app=angular.module('myApp',[]);
  app.controller('formCtrl',function($scope){
    $scope.reset = function(){
      $scope.user="";
    };//reset
    $scope.reset();
  });
</script>
