angular
	.module('app')
	.controller('breweriesCtrl', breweriesCtrl);

	function breweriesCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View A";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}