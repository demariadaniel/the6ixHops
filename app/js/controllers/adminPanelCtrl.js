angular
	.module('app')
	.controller('adminPanelCtrl', adminPanelCtrl);

	function adminPanelCtrl(dbService, $state) {
		var ctrl = this;
		if (localStorage.authToken === undefined) {$state.go('login')};

			ctrl.testMsg = "View D";
			ctrl.dbService = dbService;

			ctrl.newAccount = dbService.newAccount;

			console.log(ctrl.newAccount);
	}