//var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngMessages', 'ngSanitize', 'ui.bootstrap', 'ui.bootstrap.tpls', 'thatisuday.ng-image-gallery']);

var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngMessages', 'ui.bootstrap', 'ui.bootstrap.tpls', 'thatisuday.ng-image-gallery']);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

  'use strict';

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.useApplyAsync(true);

  $stateProvider
    .state('projects', {
      url: '/',
      template: '',
      controller: 'ProjectsCtrl',
      authenticate: false
    })
    .state('project', {
      url: '/{number:int}',
      templateUrl: 'components/projects/templates/project.html',
      controller: 'ProjectCtrl',
      authenticate: false,
      resolve: {
        project: ['$http', '$stateParams', function ($http, $stateParams) {
          return $http.get('api/projects/' + $stateParams.number + '.json');
        }]
      }
    });

  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
  // $locationProvider.html5Mode(false).hashPrefix('!');

}]);

app.run(['$rootScope', function ($rootScope) {

  console.log('app.run ... ');

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.log('state change, toState: ' + JSON.stringify(toState));
    console.log('state change, fromState: ' + JSON.stringify(fromState));
  });

}]);