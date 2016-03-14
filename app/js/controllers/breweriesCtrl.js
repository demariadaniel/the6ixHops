angular
	.module('app')
	.controller('breweriesCtrl', breweriesCtrl);

	function breweriesCtrl(dbService, $state) {
		var ctrl = this;

			ctrl.state = $state;
			ctrl.dbService = dbService;
			ctrl.getAll = getAll;
			ctrl.goToDetails = goToDetails;
	
			getAll();

		function getAll(){
			var addr = '/api/breweries/allBreweries';
			ctrl.dbService.getAll(addr).then(function(res){
					ctrl.breweries = res;
			});
		};

		function goToDetails (brewery) {
			var ctrl = this;
			ctrl.dbService.brewery = brewery;
			ctrl.state.go('brewery_subpage',{breweryName:brewery.name})
		}
	}