(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsParalaxBg', awsParalaxBg);

  /* @ngInject */
  function awsParalaxBg ($state, $rootScope, $animateCss) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
        link: link,
        restrict: 'A',
        scope: {
        }
    };
    return directive;

    function link(scope, element, attrs) {
      var statePositions= {
        main: '50px 100px, 0px 50px',
        experiments: '100px 150px, 100px 70px',
        connect: '120px 200px, 120px 140px'
      };

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) { 
        console.log('from ', fromState.name, ' to', toState.name);
        var animator = $animateCss(element, {
          event: 'moveBGs',
          easing: 'ease-out',
          duration: 1,
          from: {
            'background-position': statePositions[fromState.name]
          },
          to: {
            'background-position': statePositions[toState.name]
          }
        });
        animator.start();

      });
    }
  }
})();