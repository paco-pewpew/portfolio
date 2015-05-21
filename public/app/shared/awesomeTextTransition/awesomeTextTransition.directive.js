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
  	vm.current = vm.content[0];
  	vm.previous = '';

  	var changeText = $interval(function() {
      var _current;
      
      do {
        _current = vm.content[Math.floor(vm.content.length*Math.random())] || '';  
      } while (vm.current === _current);
  		
      _current = _current.split('');
  		vm.previous = vm.current;
  		vm.current = '';

  		var chageCurrent = $interval(function() {
  			if (_current.length === 1) $interval.cancel(chageCurrent);
  			vm.current = vm.current.concat(_current.shift());
        $scope.$digest();
        console.log(vm.current);
  		}, 60, 0, false);

  		var changePrevious = $interval(function() {
  			if (vm.previous.length === 1) $interval.cancel(changePrevious);
  			vm.previous = vm.previous.slice(1, vm.previous.length);
        $scope.$digest();
  		}, 60, 0, false);

      $scope.$digest();
  	}, 3000, 0, false);

    $scope.$on('$destroy', function() {
      if (angular.isDefined(changeText)) {
        console.log('canceling Outer interval');
        $interval.cancel(changeText);
        changeText = undefined;
      }
    });
  }
})();