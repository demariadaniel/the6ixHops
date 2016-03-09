angular
	.module('app')
	.controller('editEventsCtrl', editEventsCtrl);

	function editEventsCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit C";
			ctrl.dbService = dbService;
			ctrl.breweries = [];
			ctrl.update = {
				name: "",
				address: ""
			}

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;

		function getAll(){
			console.log("getAll");
			var addr = '/api/breweries/allBreweries';
			dbService.getAll(addr).then(function(res){
					ctrl.breweries = res;
			});
		};

		function getOne(id){
			var addr = '/api/breweries/';
			dbService.getOne(addr, id).then(function(res){
					ctrl.breweries = [];
					ctrl.breweries.push(res);
			});
		};

		function post(newBrewery){
			console.log("post");
			var addr = '/api/breweries/newBrewery';
			dbService.post(addr, newBrewery).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(id, update){
			console.log('PUT request id: ' + id);
			var addr = '/api/breweries/';
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(id){
			console.log("del");
			var addr = '/api/breweries/';
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAll();
		});
	};

}