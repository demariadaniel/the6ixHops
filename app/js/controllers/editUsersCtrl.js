angular
	.module('app')
	.controller('editUsersCtrl', editUsersCtrl);

	function editUsersCtrl(dbService, $state, Upload) {
		var ctrl = this;
		if (localStorage.authToken === undefined) {$state.go('login')};

			ctrl.testMsg = "Edit C";
			ctrl.dbService = dbService;
			ctrl.users = [];
			ctrl.update = {
				name: "",
				image: ""
			}

			ctrl.createUser = createUser;

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;
			ctrl.upload = upload;

		function createUser(newUser){
			ctrl.dbService.newAccount.user.name = ctrl.update.name;
			ctrl.dbService.newAccount.user.name = ctrl.update.image;
			console.log(ctrl.dbService.newAccount);
			$state.go('editBreweries');
		};

		function getAll(){
			console.log("getAll");
			var addr = '/api/users/allUsers';
			dbService.getAll(addr).then(function(res){
					ctrl.users = res;
			});
		};

		function getOne(id){
			var addr = '/api/users/';
			dbService.getOne(addr, id).then(function(res){
					ctrl.users = [];
					ctrl.users.push(res);
			});
		};

		function post(newUser){
			console.log("post");
			var addr = '/api/users/newUser';
			dbService.post(addr, newUser).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(id, update){
			console.log('PUT request id: ' + id);
			var addr = '/api/users/';
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(id){
			console.log("del");
			var addr = '/api/users/';
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
				ctrl.update.image = 'http://localhost:8080/uploads/' + res.data[0].filename;
			}, function(err) {
				console.log(err);
			})
		}

}