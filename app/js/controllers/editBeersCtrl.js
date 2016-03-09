angular
	.module('app')
	.controller('editBeersCtrl', editBeersCtrl);

	function editBeersCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit B";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}