(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('MainCtrl', MainCtrl);

  /* @ngInject */
  function MainCtrl() {
    var vm = this;
    vm.title = 'MainCtrl';
    vm.likeList = ['javascript', 'AngularJS', 'animation', 'graphics', 'workflow automation', 'pudding', 'fat cats'];
    activate();

    ////////////////

    function activate() {
   		console.log(vm.title);
      console.log('derp derp');
    }
  }
})();