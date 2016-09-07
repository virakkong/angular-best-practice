angular.module('myApp').controller('MainController', MainController);
function MainController(FilmFactory) {
	var vm  =this;
	FilmFactory.getAllFilms().then(function(response){
        vm.films =response;
        //we no longer use response.data because
        //in the dataFactory.js, we has function complete(response) 
        //that return response.data; already
    });
    vm.date1 ='12 February 2016';
    vm.date2='11 March 2016';
    vm.date3="3 January 20015";
    vm.date4="25 April 2014";
    
}