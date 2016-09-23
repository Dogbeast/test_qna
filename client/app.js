var app = angular.module('app', ['ngRoute', 'ngCookies']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: './partials/login.html'
		})
		.when('/', {
			templateUrl: './partials/dashboard.html'
		})
		.when('/new_question', {
			templateUrl: './partials/new_question.html'
		})
		.when('/question/:id', {
			templateUrl: './partials/showQuestion.html'
		})
		.when('/question/:id/new_answer', {
			templateUrl: './partials/new_answer.html'
		})
		.otherwise({
			redirectTo: '/index'
		})
});