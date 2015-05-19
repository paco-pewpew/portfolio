(function() {
  'use strict';

  angular
    .module('portfolio')
    .factory('Preloader', Preloader);

  /* @ngInject */
  function Preloader($q) {
 		function PreloaderC(locations) {
 			this.locations = locations;
 			this.itemCount = locations.length;
 			this.loadCount = 0;
 			this.deferred = $q.defer();
 			this.promise = this.deferred.promise;
 		}
 		PreloaderC.prototype.load = function() {
 			var preloader = this;
 			
 			this.locations.forEach(function(location) {
 				preloader.loadLocation(location);
 			});

 			return preloader.promise;
 		};
 		PreloaderC.prototype.loadLocation = function(location) {
 			var preloader = this;
 			var image = new Image();

 			image.src = location;
 			image.addEventListener('load', function() {
 				preloader.loadCount ++;
 				
 				preloader.deferred.notify({
 					percent: Math.floor(preloader.loadCount / preloader.itemCount * 100)
 				});

 				if (preloader.loadCount === preloader.itemCount) {
 					preloader.deferred.resolve();
 				}
 			});
 		};

 		return (PreloaderC);
  }
})();