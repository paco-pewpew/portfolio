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
    
    activate();

    ////////////////

    function activate() {
      //Add properties to be used by directive
      vm.gitExperiments.forEach(function(element, index) {
        element.count = vm.gitExperiments.length;
        element.place = index;
        element.rotation = { x: 0, y: 0, z: 0 };
        /*element.translation = { x: (- 180 - (280*index)), y: 150, z: 0 };*/
        element.translation = { x: (- 372 - (88 * index)), y: 150, z: 0 };
        element.activated = false;
      });
    }
    
    function activateCube(index) {
      vm.activatedCube = index;
      console.log('Activated Cube');
      vm.gitExperiments.forEach(function(el, id) {
        if (id === index) {
          el.activated = true;
        } else {
          el.activated = false;
        }
      });
    }

    function deactivateCube(index) {
      console.log('Deactivated');
      vm.gitExperiments[index].activated = false;
      vm.activatedCube = -1;
    }

  }
})();