angular
	.module('app')
	.controller('editBreweriesCtrl', editBreweriesCtrl);

	function editBreweriesCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Login";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}