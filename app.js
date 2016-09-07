angular.module('myApp',['ngRoute']).config(config);
function config($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/films.html',
		controller: 'MainController',
		controllerAs: 'vm'
    }).when('/film/:id', {
		templateUrl: 'templates/film.html',
		controller: 'FilmController',
		controllerAs: 'vm'
	});
}