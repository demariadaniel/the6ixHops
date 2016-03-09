angular
	.module('app')
	.controller('adminPanelCtrl', adminPanelCtrl);

	function adminPanelCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View D";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}