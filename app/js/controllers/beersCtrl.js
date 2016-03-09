angular
	.module('app')
	.controller('beersCtrl', beersCtrl);

	function beersCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View B";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}