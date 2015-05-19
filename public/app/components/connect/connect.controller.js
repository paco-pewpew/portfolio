(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ConnectCtrl', ConnectCtrl);

  /* @ngInject */
  function ConnectCtrl() {
    var vm = this;
    vm.connectionsList = [
    	{ caption: 'email', link: 'mailto:pckovachev@gmail.com' },
    	{ caption: 'linkedin', link: 'https://bg.linkedin.com/pub/plamen-kovachev/b9/3a1/b4'},
    	{ caption: 'github', link: 'https://github.com/paco-pewpew'}
    ];
  }
})();