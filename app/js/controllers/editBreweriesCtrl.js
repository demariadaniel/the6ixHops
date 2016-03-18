angular
	.module('app')
	.controller('editBreweriesCtrl', editBreweriesCtrl);

	function editBreweriesCtrl(dbService, $state, Upload) {
		var ctrl = this;
		if (localStorage.authToken === undefined) {$state.go('login')};

			ctrl.testMsg = "Login";
			ctrl.dbService = dbService;
			ctrl.breweries = [];
			ctrl.update = {
				name: "",
				street:"",
				city:"",
				province:"",
				postcode:"",
				description: "",
				telephone: "",
				email: "",
				image_thumb: "",
				image_main: "",
				hours: "",
				twitter: "",
				facebook: "",
				instagram: ""
			}
			ctrl.createBrewery = createBrewery;

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;
			ctrl.upload = upload;

		function createBrewery(newBrewery){
			ctrl.dbService.newAccount.brewery = newBrewery;
			console.log(ctrl.dbService.newAccount);
			$state.go("editBeers");
		};

		function getAll(){
			console.log("getAll");
			var addr = '/api/breweries/allBreweries';
			dbService.getAll(addr).then(function(res){
					ctrl.breweries = res;
					console.log(res);
					//ctrl.breweries.address = JSON.parse(res.address);
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

			ctrl.update.address = JSON.stringify(ctrl.update.address);

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

	   function upload(file, path) {
		file.upload = Upload.upload({
			url: '/api/photo/',
			data: {file: file}
		})
		.then(function(res) {
			if (path === "image_main") {
					ctrl.update.image_main = 'http://localhost:8080/uploads/' + res.data[0].filename;
				} else {
					ctrl.update.image_thumb = 'http://localhost:8080/uploads/' + res.data[0].filename;	
			}

		}, function(err) {
			console.log(err);
		})
	}

}