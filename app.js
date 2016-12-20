angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('','/')
    .otherwise('/')


    $stateProvider
    .state('home', {
      templateUrl: 'views/home.html',
      url: '/'
    })
    .state('about', {
      templateUrl: 'views/about.html',
      url: '/about'
    })
    .state('blueprints', {
      templateUrl: 'views/blueprints.html',
      url: '/blueprints'
    })
    .state('schema', {
      templateUrl: 'views/schema.html',
      url: '/schema'
    })
    .state('endpoints', {
      templateUrl: 'views/endpoints.html',
      url: '/endpoints'
    })
    .state('controllers', {
      templateUrl: 'views/controllers.html',
      url: '/controllers'
    })
    .state('todo', {
      templateUrl: 'views/todo.html',
      url: '/todo'
    })






})
