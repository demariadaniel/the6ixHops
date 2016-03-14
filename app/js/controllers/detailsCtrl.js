angular
	.module('app')
	.controller('detailsCtrl', detailsCtrl);

	function detailsCtrl(dbService, $state) {
		var ctrl = this;

			ctrl.state = $state;
			ctrl.dbService = dbService;
			ctrl.brewery = ctrl.dbService.brewery;
			ctrl.beer = ctrl.dbService.beer;
			console.log(ctrl.beer);
	};