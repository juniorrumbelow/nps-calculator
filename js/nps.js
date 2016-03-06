var app = angular.module('npsApp', []);


app.controller('npsController', function ($scope) {
    
        var one = Number($scope.one || 0);
        var two = Number($scope.two || 0);
        var three = Number($scope.three || 0);
        var four = Number($scope.four || 0);
        var five = Number($scope.five || 0);
        var six = Number($scope.six || 0);

        var seven = Number($scope.seven || 0);
        var eight = Number($scope.eight || 0);

        var nine = Number($scope.nine || 0);
        var ten = Number($scope.ten || 0);
    
    
    
        // Working out the totals
    
        $scope.totalRespondents = function() {
            $scope.sum = one+two+three+four+five+six+seven+eight+nine+ten;
        }

        $scope.totalDetractors = function() {
            $scope.sum = one+two+three+four+five+six;
        }

        $scope.totalNeutrals = function() {
            $scope.sum = seven+eight;
        }

        $scope.totalPromoters = function() {
            $scope.sum = nine+ten;
        }    
  
        
        // Working out the percentage values
        
        $scope.detractorsPercentage = ($scope.totalDetractors / $scope.totalRespondents * 100);

        $scope.neutralsPercentage = ($scope.totalNeutrals / $scope.totalRespondents * 100);
        
        $scope.promotersPercentage = ($scope.totalPromoters / $scope.totalRespondents * 100);
        
        $scope.npsScore = ($scope.promotersPercentage - $scope.detractorsPercentage);
    
        
        // Reset Values Button
    
        $scope.reset = function() {
            $scope.one = null;
            $scope.two = null;
            $scope.three = null;
            $scope.four = null;
            $scope.five = null;
            $scope.six = null;
            $scope.seven = null;
            $scope.eight = null;
            $scope.nine = null;
            $scope.ten = null;
        }
        
        if($scope.one !== undefined) {  
            $scope.one = '';
        }
        else {
            $scope.one = null;
        }
    
        if($scope.seven !== undefined) {  
            $scope.seven = '';
        }
        else {
            $scope.seven = null;
        }
    
        if($scope.ten !== undefined) {  
            $scope.ten = '';
        }
        else {
            $scope.ten = null;
        }
    
    
});

