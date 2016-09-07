angular.module('myApp').controller('MainController', MainController);
function MainController(FilmFactory) {
	var vm  =this;
	FilmFactory.getAllFilms().then(function(response){
        vm.films =response;
        //we no longer use response.data because
        //in the dataFactory.js, we has function complete(response) 
        //that return response.data; already
    })
}