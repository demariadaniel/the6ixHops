angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService, $state) {
		var ctrl = this;

			ctrl.testMsg = "Logged Out";
			ctrl.dbService = dbService;
			ctrl.state =  $state;

			ctrl.user = {
				email: "",
				password: ""
			};

			ctrl.auth_btn = 'Login';
			ctrl.login = login;

			function login(user){
				dbService.login(user).then(function(res){
				if (res.data === false) {
					ctrl.testMsg = "Incorrect Login Info";
				} else {
					ctrl.testMsg = "Logged In";
				}}, function(err){
				ctrl.testMsg = "Incorrect Login Info";
			});
			}



			}