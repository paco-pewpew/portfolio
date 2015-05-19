(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsPreloader', awsPreloader);

  /* @ngInject */
  function awsPreloader ($animateCss, Preloader, gitExperiments) {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      link: link,
      restrict: 'E',
      scope: {
      },
      template: '<span class="preloader-bar"></span>'
    };
    return directive;

    function link(scope, element, attrs) {
	  	element.css({ display: 'block', position: 'relative' });
	  	var $title = angular.element(element[0].querySelector('span'));
	  	$title.css({ display: 'block', position: 'absolute', width: '100%', height: '2px', transform: 'translateY(-6px)', 'background-color': 'rgb(0,255,255)' });
	  	var imageLocations = [];

	  	//populate imageLocations with shots of gitExperiments
	  	gitExperiments.forEach(function(experiment) {
	  		experiment.shots.forEach(function(shot) {
	  			imageLocations.push('assets/images/experimentsRenders/' + shot +'_dark.png');
	  			imageLocations.push('assets/images/experimentsRenders/' + shot +'_light.png');
	  		});	
	  	});

	  	var imgResources = new Preloader(imageLocations);

	  	imgResources.load().then(
	  		function handleResolve() {
	  			//TO DO load success
	  		},function handleReject() {
	  			//TO DO load error
	  		},function handleNotify(event) {
	  			var animator = $animateCss($title, {
	  				event: 'item-loaded',
	  				duration: 0.1,
	  				to: {
	  					'width': event.percent + '%'
	  				}
	  			});
	  			animator.start();
	  		});

    }
  }
  
})();