angular
	.module('app')
	.controller('superUserCtrl', superUserCtrl);

	function superUserCtrl(dbService, $state) {
		var ctrl = this;


			ctrl.testMsg = "Edit C";
			ctrl.dbService = dbService;

			ctrl.users = [];
			ctrl.user = {
				email: "",
				password: "",
			}

			ctrl.breweries = [];
			ctrl.brewery = {
				name: "",
				street:"",
				city:"",
				province:"",
				postcode:"",
				telephone: "",
				email: "",
				image_thumb: "",
				image_main: "",
				hours: "",
				social: "",
				beers: "",
				events: ""
			}

			ctrl.beers = [];
			ctrl.beer = {
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

		function getAll(addr){
			console.log("getAll");
			dbService.getAll(addr).then(function(res){
					ctrl.users = res;
			});
		};

		function getOne(addr, id){
			dbService.getOne(addr, id).then(function(res){
					ctrl.users = [];
					ctrl.users.push(res);
			});
		};

		function post(addr, newItem){
			console.log("post");
			dbService.post(addr, newItem).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(addr, id, update){
			console.log('PUT request id: ' + id);
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(addr, id){
			console.log("del");
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAll();
		});
	};

}