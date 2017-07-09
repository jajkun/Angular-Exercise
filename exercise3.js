	<div ng-app="myApp" ng-controller="myCtrl" ng-init="mySwitch=true">
		<h3>angular DOM</h3>
		<p><button ng-disabled="mySwitch" ng-click="addCount()">Click Me!</button></p>
		<p><input type="checkbox" ng-model="mySwitch"  />Unlock it!</p>
		<!--<p>{{ mySwitch }}</p>-->
		<p>click count: {{ count }}</p>
		<p ng-show="mySwitch">status: locking activated</p>
		<p ng-hide = "mySwitch">status: unlock activated</p>
    Contents:
    <div ng-hide="mySwitch">{{content}}</div>
	</div>
	<script>
		var app=angular.module('myApp',[]);
		app.controller('myCtrl',function($scope){
    	$scope.count=0;
    	$scope.addCount = function(){
      	$scope.count++;
      }
      $scope.content="Demo Content blah blah...."
		});
	</script>
