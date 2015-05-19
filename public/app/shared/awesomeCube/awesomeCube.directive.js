(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsCube', awsCube);

  /* @ngInject */
  function awsCube ($animateCss) {
    // Usage: display content on one or more sides of the cube?
    //
    // Creates: cube made with divs rotated with css by given as attribute "rotate" object with properties x, y, z 
    //
    var directive = {
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
        content: '=',
        enterFunction: '&',
        exitFunction: '&'
      },
      templateUrl: 'app/shared/awesomeCube/awesomeCube.view.html'
    };
    return directive;

    function link(scope, element, attrs) {
      var $cube = angular.element(element[0].querySelector('div.aws-cube'));
      var median = (scope.vm.content.count - 1) / 2;
      var offset = scope.vm.content.place - median;
      var normalPosition = 'rotate3d(1, 0, 0, -10deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg)' +
                           'translate3d(' + ((offset) * 200 ) + 'px,0,0)';
      
      //Animate cubes to normal position
      var moveCubesToPosition = $animateCss($cube, {
        event: 'move-cubes-to-position',
        addClass: (offset < 0 ? 'roll-left' : (offset > 0 ? 'roll-right' : '')),
        easing: 'ease-out',
        duration: 0.5,
        from: {
          'transform': 'rotate3d(1, 0, 0, -10deg) rotate3d(0, 1, 0, 0deg) rotate3d(0, 0, 1, 0deg) translate3d(0,0,0)'
        },
        to: {
          'transform': normalPosition
        }
      });
      moveCubesToPosition.start().done(function(shit1,shit2){
        $cube.removeClass('roll-left');
        $cube.removeClass('roll-right');
      });

      scope.$watch('vm.content.activated', function(newVal, oldVal) {
        var animator;
        if (newVal) {
          animator = $animateCss($cube, {
            event: 'RotataAndOpen',
            addClass: 'cube-opened spin',
            easing: 'ease-out',
            duration: 1,
            to: {
              'transform': 'rotate3d(1,0,0,' + scope.vm.content.rotation.x + 'deg)' +
                           'rotate3d(0,1,0,' + scope.vm.content.rotation.y + 'deg)' +
                           'rotate3d(0,0,1,' + scope.vm.content.rotation.z + 'deg)' +
                           'translate3d(' +  scope.vm.content.translation.x +'px,' + scope.vm.content.translation.y + 'px,' + scope.vm.content.translation.z +'px)'

            }
          });
          animator.start();
        } else {
          animator = $animateCss($cube, {
            event: 'RotataAndClose',
            removeClass: 'cube-opened spin',
            easing: 'ease-out',
            duration: 1,
            to: {
              'transform': normalPosition
            }
          });
          animator.start();
        }
      });
    }
  }

  /* @ngInject */
  function Controller () {
    var vm = this;
  }
})();