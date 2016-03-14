angular
	.module('app')
	.controller('beersCtrl', beersCtrl);

	function beersCtrl(dbService, $state) {
		var ctrl = this;

			ctrl.state = $state;
			ctrl.dbService = dbService;
			ctrl.getAll = getAll;
			ctrl.goToDetails = goToDetails;
	
			getAll();

		function getAll(){
				var addr = '/api/beers/allBeers';
				ctrl.dbService.getAll(addr).then(function(res){
					ctrl.beers = res;
				});
		};

		function goToDetails (beer) {
			var ctrl = this;
			ctrl.dbService.beer = beer;
			ctrl.state.go('beer_subpage',{beerName:beer.name});
		}
	}