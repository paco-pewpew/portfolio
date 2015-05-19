(function() {
  'use strict';

  angular
    .module('portfolio')
    .value('gitExperiments', [
			{
        title: 'mylol',
        description: 'Application utilising RIOT api intended to help players with the game League of Legends.',
        keypoints: [
          'bind Summoner name to your local account',
          'recieve stats for your games, overall performance or for certain champions',
          'make templates for champions by making your item build and etc.',
          'set up to 3 other summoners you can watch and get data for their games and coppy their playstyle'
        ],
        shots: [
          'mylol_frontPage',
          'mylol_gamerPage',
          'mylol_templatePage'
        ]
      },
      {
        title: 'rainbow-trail',
        description: 'Multiplayer game with Socketio',
        keypoints: [
          '1 vs 1 games',
          'keep track of your last games',
          'fat unicorns eating donnuts and leaving trail of rainbow farts'
        ],
        shots: [
        	'rainbow-trail_enterPage',
        	'rainbow-trail_homePage',
        	'rainbow-trail_gamePage'
        ]
      },
      {
        title: 'lol-tournaments',
        description: 'Site for game tournaments creation/ management/ participation. Different users have different roles.',
        keypoints: [
          'Admin - creating tournaments and managing overall state of the site with news and etc.',
          'User(player) - able to join team or make one upgrading himself to state of captain',
          'User(captain) - can make and manage team, see opened tournaments and sign for them '
        ],
        shots: [
          'tournaments_teamPage',
          'tournaments_tournamentsPage',
          'tournaments_adminPage'
        ]
      }
    ]);


})();