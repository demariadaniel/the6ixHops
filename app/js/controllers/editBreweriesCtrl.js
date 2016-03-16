angular
	.module('app')
	.controller('editBreweriesCtrl', editBreweriesCtrl);

	function editBreweriesCtrl(dbService, $state) {
		var ctrl = this;
		if (localStorage.authToken === undefined) {$state.go('login')};

			ctrl.testMsg = "Login";
			ctrl.dbService = dbService;
			ctrl.breweries = [];
			ctrl.update = {
				name: "",
				address: "",
				telephone: "",
				email: "",
				image_thumb: "",
				image_main: "",
				hours: "",
				social: "",
				beers: "",
				events: ""
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

		function post(newUser){
			console.log("post");
			var addr = '/api/breweries/newBrewery';
			dbService.post(addr, newUser).then(function(res){
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