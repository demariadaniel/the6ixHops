angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Login";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}