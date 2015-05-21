(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl() {
    var vm = this;
    vm.likeList = ['javascript', 'AngularJS', 'animation', 'graphics', 'workflow automation', 'pudding', 'fat cats'];
  }
})();