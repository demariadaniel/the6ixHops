angular
	.module('app')
	.controller('editACtrl', editACtrl);

	function editACtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Login";
			ctrl.dbService = dbService;
			ctrl.users = [];
			ctrl.update = {
				email: "",
				password: ""
			}

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;

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

}