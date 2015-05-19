(function() {
  'use strict';

  angular
  .module('portfolio')
  .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
  	
  	$stateProvider
  		.state('main', {
  			url: '/main',
  			templateUrl: 'app/components/main/main.view.html',
  			controller: 'MainCtrl',
  			controllerAs: 'vm'
  		})
      .state('experiments', {
        url: '/experiments',
        templateUrl: 'app/components/experiments/experiments.view.html',
        controller: 'ExperimentsCtrl',
        controllerAs: 'vm'
      })
      .state('connect', {
        url: '/connect',
        templateUrl: 'app/components/connect/connect.view.html',
        controller: 'ConnectCtrl',
        controllerAs: 'vm'
      });

		$urlRouterProvider.otherwise('/main');
  }
})();