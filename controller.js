angular.module('myApp').controller('MainController', MainController).controller('FilmController', FilmController);
function MainController($http) {
	var vm  =this;
	$http.get('http://swapi-tpiros.rhcloud.com/films').then(function (response){
       vm.films = response.data;
        console.log(response);
    });
}

function FilmController($http, $routeParams) {
	var vm  =this;
    var id = $routeParams.id;
	$http.get('http://swapi-tpiros.rhcloud.com/films/' + id).then(function(response){
       vm.film =response.data; 
        console.log(response);
    });
}
