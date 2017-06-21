<html>
<head>
</head>
<body ng-app="myApp" ng-controller="myCtrl">
    <input type="button" ng-repeat="tab in tabList" value="{{tab.name}}" ng-click="showContent($index)">
    <div ng-repeat="tab in tabList" ng-show="currentIndex==$index">{{tab.content}}</div>
    <script>
        var app = angular.module("myApp",[]);
        app.controller("myCtrl",function($scope){
            $scope.tabList=[
                {name:'tab1',content:"content1"},
                {name:'tab2',content:"content2"}
            ];
            $scope.showContent=function(n){
                $scope.currentIndex = n;
            }
        });
    </script>
</body>
</html>
