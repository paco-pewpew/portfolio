(function() {
  'use strict';

  angular
  .module('portfolio')
  .config(config);

  /* @ngInject */
  function config($stateProvider, $urlRouterProvider) {
  	
  	$stateProvider
  		.state('hello', {
  			url: '/hello',
  			templateUrl: 'app/components/hello/hello.view.html',
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

		$urlRouterProvider.otherwise('/hello');
  }
})();