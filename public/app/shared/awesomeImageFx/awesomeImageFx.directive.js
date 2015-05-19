(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsImageFx', awsImageFx);

  /* @ngInject */
  function awsImageFx () {
    // Usage: display images in nice way lol
    //
    // Creates:
    //
    var directive = {
      replace: true,
      link: link,
      restrict: 'E',
      scope: {
      	shot: '='
      },
      templateUrl: 'app/shared/awesomeImageFx/awesomeImageFx.view.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  
})();