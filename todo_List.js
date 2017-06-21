<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
</head>
<body ng-app="myApp" ng-controller="myCtrl">

<form ng-submit="addChk()">
    <input type="text" ng-model="txtVal">
    <input type="submit" value="add new checkbox">
</form>
    
<div ng-repeat="check in checkList">
    <input type="checkbox" ng-model="check.selected" >
    <span ng-bind="check.name"></span>
</div>
    
<p><button ng-click="remove()">delete</button></p>
<script>
    var app = angular.module("myApp",[]);
    app.controller("myCtrl",function($scope){
        $scope.checkList=[{name:'checkbox1', selected:false}];
        $scope.addChk=function(){
            $scope.checkList.push({name:$scope.txtVal, selected:false});
        };
        
        $scope.remove=function(){
            var oldList = $scope.checkList;
            $scope.checkList=[];
            angular.forEach(oldList,function(x){
                if( !x.selected ) $scope.checkList.push(x);
            });
        };
    });
</script>
</body>
</html>