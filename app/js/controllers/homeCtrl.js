angular
	.module('app')
	.controller('homeCtrl', homeCtrl);

	function homeCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Home";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}

    