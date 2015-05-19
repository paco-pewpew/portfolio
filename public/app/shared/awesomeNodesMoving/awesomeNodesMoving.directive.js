(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('awsNodesMoving', awsNodesMoving);

  /* @ngInject */
  function awsNodesMoving ($timeout, $animate, $animateCss) {
    // Usage: Creates nice thing with movable objects interacting with eachother
    //
    // Creates: Element that takes array Objects with 2 keys: TITLE and CONTENT (url)
    //
    var directive = {
      bindToController: true,
      controller: Controller,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      scope: {
      	content: '=',
        title: '='
      },
      templateUrl: 'app/shared/awesomeNodesMoving/awesomeNodesMoving.view.html'
    };
    return directive;

    function link(scope, element, attrs) {
  		var CENTER = { x: 100, y: 100 };
      var NODE = { r: 40 };
  		var DISTANCE = 100;
      var nodeLocations = [];

    	//wrap inside timeout to bring it at the end of digest cycle so ng-repeat is finished rendering
    	$timeout(function() {
	    	var nodes = element[0].querySelectorAll('li');

	    	//SET positions
	    	[].forEach.call(nodes, function(node, id) {
	    		var $node = angular.element(node);
          var enterLocation;

	    		nodeLocations[id] = {
            x: (CENTER.x +  Math.sin(2 * Math.PI / nodes.length * id) * (CENTER.x + DISTANCE) - NODE.r),
            y: (CENTER.y + Math.cos(2 * Math.PI / nodes.length * id) * (CENTER.y + DISTANCE) - NODE.r)
          };

	    		/*$node.css({
	    			left: nodeLocations[id].x + 'px', 
	    			top: nodeLocations[id].y + 'px'
	    		});*/
          var moveNodesToPosition = $animateCss($node, {
            event: 'move-node-to-position',
            duration: 1,
            from: {
              left: CENTER.x - NODE.r + 'px',
              top: CENTER.y - NODE.r + 'px',
            },
            to: {
              left: nodeLocations[id].x + 'px', 
              top: nodeLocations[id].y + 'px'
            }
          });
          moveNodesToPosition.start();

	    		$node.bind('mouseenter', function(event) {
            console.log('entered a node',event);
            enterLocation = {
              x: $node.prop('offsetLeft') + (event.offsetX === undefined ? event.layerX - NODE.r : event.offsetX) - NODE.r,
              y: $node.prop('offsetTop') + (event.offsetY === undefined ? event.layerY - NODE.r : event.offsetY) - NODE.r
            };
            var animator = $animateCss($node, {
              event: 'toCursorPosition',
              easing: 'ease-out',
              duration: 1,
              delay: 0.1,
              from: {
                left: $node.prop('offsetLeft') + 'px',
                top: $node.prop('offsetTop') + 'px'
              },
              to: {
                left: enterLocation.x + 'px',
                top: enterLocation.y + 'px'
              }
            });
            animator.start();
	    		});

          /*$node.bind('mousemove', function(event) {
            //check if it is near original mouseenter
            var moveLocation = {
              x: $node.prop('offsetLeft') + event.offsetX - NODE.r,
              y: $node.prop('offsetTop') + event.offsetY - NODE.r
            };
            console.log('enter at: ',enterLocation,'; move at: ',moveLocation);

            if ( Math.abs(moveLocation.x - enterLocation.x) < NODE.r && Math.abs(moveLocation.y - enterLocation.y) < NODE.r) {
              console.log('ok');
              var animator = $animateCss($node, {
                event: 'sticky',
                transition: '1s linear all',
                easing: 'ease-in-out',
                duration: 0.5,
                //delay: 0.5,
                from: {
                  left: $node.prop('offsetLeft') + 'px',
                  top: $node.prop('offsetTop') + 'px'
                },
                to: {
                  left: moveLocation.x + 'px',
                  top: moveLocation.y + 'px'
                }
              });
              animator.start();
            }

          });*/

          $node.bind('mouseleave', function(event) {
            var animator = $animateCss($node, {
              event: 'toOriginalPosition',
              easing: 'ease-out',
              duration: 1,
              from: {
                left: $node.prop('offsetLeft') + 'px',
                top: $node.prop('offsetTop') + 'px'
              },
              to: {
                left: nodeLocations[id].x + 'px',
                top: nodeLocations[id].y + 'px'
              },
            });
            animator.start();
          });

	    	});

    	});
    }
  }

  /* @ngInject */
  function Controller ($interval) {
  	var vm = this;
  }
})();