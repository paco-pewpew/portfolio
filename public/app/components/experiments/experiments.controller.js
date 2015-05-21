(function() {
  'use strict';

  angular
    .module('portfolio')
    .controller('ExperimentsCtrl', ExperimentsCtrl);

  /* @ngInject */
  function ExperimentsCtrl(gitExperiments) {
    var vm = this;
    vm.activatedCube = -1;
    vm.activateCube = activateCube;
    vm.deactivateCube = deactivateCube;
    vm.gitExperiments = gitExperiments;
    vm.activeShot = -1;
    
    activate();

    ////////////////

    function activate() {
      //Add properties to be used by directive
      vm.gitExperiments.forEach(function(element, index) {
        element.count = vm.gitExperiments.length;
        element.place = index;
        element.rotation = { x: 0, y: 0, z: 0 };
        element.translation = { x: (- 450 - (88 * index)), y: 150, z: 0 };
        element.activated = false;
      });
    }
    
    function activateCube(index) {
      vm.activatedCube = index;
      vm.gitExperiments.forEach(function(el, id) {
        if (id === index) {
          el.activated = true;
        } else {
          el.activated = false;
        }
      });
      vm.activeShot = -1;
    }

    function deactivateCube(index) {
      vm.gitExperiments[index].activated = false;
      vm.activatedCube = -1;
      vm.activeShot = -1;
    }

  }
})();