(function() {
  'use strict';

  angular
    .module('portfolio')
    .value('gitExperiments', [
			{
        title: 'mylol',
        link: 'https://github.com/paco-pewpew/mylol',
        description: 'Application utilising Riot Games API intended to help players with the game League of Legends. Mylol is intended for League of Legends players thus needing every user to link their summoner name. The reason behind the app is to be a single point of access for helping users get better in the game and displaying their performance statistic in past games',
        developing: 'The application was a playground for months as the developers of the Riot Games API kept adding more and more endpoints providing various data. During the production I faced many challanges from handling my api endpoints, token authentication and restriction to handling call rate limitis and stability between the server and the 3rd party api.',
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
        link: 'https://github.com/paco-pewpew/rainbow-trail',
        description: 'Multiplayer browser game build with Node and Socketio. Game matching is roulet type for fast start. The match is one vs one, where each player takes control of a fluffy unicorn having donnut starvation. The goal is to consume as much donnuts as you can and win the game by either eating more donnuts or trap the enemy player with your evergrowing rainbow trail while avoiding dangerous stormy clouds',
        developing: 'Developing the game proved an interesting task as the logic kept getting bigger with each new added functionality between players and environment.',
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
        title: 'Tournaments',
        link: 'https://github.com/DMatev/Tournaments',
        description: 'Site for managing and participating in tournaments. Tournaments are specified by game and team count. Aside from the tournament cycle the site has pages for news, past tournaments winners and more. Different users have different roles.',
        developing: 'Toutnaments started as a school project made by me and a colleague of mine - Deyan Matev. Its one of the first big projects where i solidified my basics in backend and used AngularJS for the frontend.',
        keypoints: [
          'Admin - creating tournaments and managing overall state of the site with news and etc.',
          'User(player) - able to join team or make one upgrading himself to state of captain',
          'User(captain) - can make and manage team, see opened tournaments and sign for them;'
        ],
        shots: [
          'tournaments_teamPage',
          'tournaments_tournamentsPage',
          'tournaments_adminPage'
        ]
      }
    ]);


})();