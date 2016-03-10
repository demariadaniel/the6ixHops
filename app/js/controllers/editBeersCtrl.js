angular
	.module('app')
	.controller('editBeersCtrl', editBeersCtrl);

	function editBeersCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit B";
			ctrl.dbService = dbService;
			ctrl.beers = [];
			ctrl.update = {
				name: "",
				brewery: "",
				type: "",
				image: "",
				description: "",
				sizes: "",
				price: "",
				strength: "",
				available: "",
				ingredients: "",
				pairs_well: "",
				draft: ""
			}

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;

		function getAll(){
			console.log("getAll");
			var addr = '/api/beers/allBeers';
			dbService.getAll(addr).then(function(res){
					ctrl.beers = res;
			});
		};

		function getOne(id){
			var addr = '/api/beers/';
			dbService.getOne(addr, id).then(function(res){
					ctrl.beers = [];
					ctrl.beers.push(res);
			});
		};

		function post(newBeer){
			console.log("post");
			var addr = '/api/beers/newBeer';
			dbService.post(addr, newBeer).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(id, update){
			console.log('PUT request id: ' + id);
			var addr = '/api/beers/';
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(id){
			console.log("del");
			var addr = '/api/beers/';
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAll();
		});
	};

}