angular.module('myApp').controller('FilmController', FilmController);
//1: inject Filmfactory, we dont use $http anymore
function FilmController($routeParams,FilmFactory) {
	var vm  =this;
    var id = $routeParams.id;
    //more info, go to datafactory.js
	FilmFactory.getOneFilm(id).then(function(response){
       vm.film =response; 
       //we no longer use response.data because
        //in the dataFactory.js, we has function complete(response) 
        //that return response.data; already
    });
}
