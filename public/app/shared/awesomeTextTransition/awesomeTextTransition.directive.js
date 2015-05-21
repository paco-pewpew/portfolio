(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsTextTransition', awsTextTransition);

  /* @ngInject */
  function awsTextTransition () {
    // Usage: Transition one string to another in random order.
    //
    // Creates: Element that takes Array of strings and animates them.
    //
    var directive = {
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
      	content: '='
      },
      templateUrl: 'app/shared/awesomeTextTransition/awesomeTextTransition.view.html'
    };
    return directive;
  }

  /* @ngInject */
  function Controller ($interval, $scope) {
  	var vm = this;
    var _current = vm.content[0];
    vm.current = _current;
    vm.previous = '';
    
    var changeText = $interval(function() {
      vm.previous = _current;
      do {
        _current = vm.content[Math.floor(vm.content.length * Math.random())];  
      } while (_current === vm.previous);
      vm.current = '';

  		var chageCurrent = $interval(function() {
  			if (vm.current.length === _current.length) {
          $interval.cancel(chageCurrent);
        } else {
    			vm.current = _current.slice(0,vm.current.length + 1);
          $scope.$digest();
        }
  		}, 60, 0, false);

  		var changePrevious = $interval(function() {
  			if (vm.previous.length === 0) {
          $interval.cancel(changePrevious);
        } else {
    			vm.previous = vm.previous.slice(1, vm.previous.length);
          $scope.$digest();
        }
  		}, 60, 0, false);

      $scope.$digest();
  	}, 3000, 0, false);

    $scope.$on('$destroy', function() {
      if (angular.isDefined(changeText)) {
        $interval.cancel(changeText);
        changeText = undefined;
      }
    });
  }
})();