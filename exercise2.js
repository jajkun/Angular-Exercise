<div ng-app="myApp" ng-controller="namesCtrl">
		<p><input type="text" ng-model="test"></p>
		<ul>
			<li ng-repeat="x in names| filter:test| orderBy:'country'">
				{{(x.name+','+x.country)|uppercase}}
			</li>
		</ul>
	</div>

	<script>
		 angular.module('myApp',[]).controller('namesCtrl',function($scope){
			$scope.names=[
				{name:'Jani',country:'Norway'},
				{name:'Hege',country:'Sweden'},
				{name:'Kai',country:'Denmark'}
			];
		});
	</script>
