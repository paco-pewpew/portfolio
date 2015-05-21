(function() {
  'use strict';

  angular
    .module('portfolio')
    .factory('GIT', GIT);

  /* @ngInject */
  function GIT($http) {
    var apiUrl = 'https://api.github.com';
    var service = {
      getUser: getUser,
      getRepos: getRepos
    };
    return service;

    ////////////////

    function getUser(name) {
    	return $http.get(apiUrl + '/users/' + name);
    }

    function getRepos(name) {
    	return $http.get(apiUrl + '/users/' + name + '/repos');
    }
  }
})();