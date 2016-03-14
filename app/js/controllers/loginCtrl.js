angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService, $state) {
		var ctrl = this;

			ctrl.testMsg = "login";
			ctrl.dbService = dbService;
			ctrl.$state = $state;

			ctrl.email = null;
			ctrl.password = null;
			ctrl.login = login
			ctrl.auth_btn = "Login";

			console.log(ctrl.testMsg);

		function login(){
			var ctrl = this;
			var payload = {
			 	email:ctrl.email,
			 	password:ctrl.password
			 }
			 ctrl.auth_btn = "Authorizing";
			 ctrl.dbService.login(payload)
			 .then(function(res){
			 	console.log(res);
			 	//successfull response
			 	if(res.status == 200){
			 		ctrl.auth_btn = "Success";
			// 		//user exists
			 		if(res.data.user != null){
			 			ctrl.$state.go('admin');
			 		}
			 	}
			 	else{
			 		ctrl.auth_btn = 'Invalid Password';
			 	}
				
			 },function(){
			 	//error
			 	console.log(res);
			 	ctrl.auth_btn = "Error: Check console";
			 })
		}

	}

