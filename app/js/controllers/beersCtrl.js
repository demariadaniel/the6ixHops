angular
	.module('app')
	.controller('beersCtrl', beersCtrl);

	function beersCtrl(dbService, $state, beers) {
		var ctrl = this;

			ctrl.beers = beers;
			ctrl.state = $state;
			ctrl.dbService = dbService;
			ctrl.getAll = getAll;
			ctrl.goToDetails = goToDetails;
	
			console.log(ctrl.beers);
			//getAll();

		function getAll(){
			var addr = '/api/beers/allBeers';
				console.log("bears control");
			ctrl.dbService.getAll(addr).then(function(res){
				ctrl.beers = res;
				console.log(ctrl.beers);
			});
		};

		function goToDetails (beer) {
			var ctrl = this;
			ctrl.dbService.beer = beer;
			ctrl.state.go('beer_subpage',{beerName:beer.name});
		}
	}