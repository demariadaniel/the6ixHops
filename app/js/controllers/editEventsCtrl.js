angular
	.module('app')
	.controller('editEventsCtrl', editEventsCtrl);

	function editEventsCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit C";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}