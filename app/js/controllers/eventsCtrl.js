angular
	.module('app')
	.controller('eventsCtrl', eventsCtrl);

	function eventsCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View C";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}