(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsGitSnippet', awsGitSnippet);

  /* @ngInject */
  function awsGitSnippet () {
    // Usage: display info for git user acc
    //
    // Creates: element with acc name, avatar and more
    //
    var directive = {
      replace: true,
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
      	user: '='
      },
      templateUrl: '/app/shared/awesomeGitSnippet/awesomeGitSnippet.view.html'
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }

  /* @ngInject */
  function Controller (GIT) {
  	var vm = this;
  	vm.userData = {};
  	vm.repos = [];
    vm.errors = {};

  	activate();

  	///////////

  	function activate() {
  		
      GIT.getUser(vm.user)
  			.success(function(data) {
  				vm.errors.user = false;
          vm.userData = data;
  			})
  			.error(function(data) {
          vm.errors.user = true;
  			});

  		GIT.getRepos(vm.user)
  			.success(function(repos) {
  				vm.errors.repos = false;
          vm.repos = repos.filter(function(el) {
            return el.private === false;
          }).map(function(repo) {
            return {
              name: repo.name,
              description: repo.description,
              private: repo.private,
              created: repo.created_at,
              updated: repo.updated_at
            };
          });
  			})
  			.error(function(data) {
          vm.errors.repos = true;
  			});
  	}


  }
})();