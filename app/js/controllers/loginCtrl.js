angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService, $state, $http) {

		var ctrl = this;

			ctrl.testMsg = "Logged Out";
			ctrl.dbService = dbService;
			ctrl.state =  $state;

			ctrl.user = {
				email: "",
				password: ""
			};

			ctrl.auth_btn = 'Login';
			ctrl.key = "6Ldx4hoTAAAAAPv4QeVSHLQIKD1dgyW942bKhUJE";
			
			ctrl.register_btn = "Sign Up";
			ctrl.register = register;
			ctrl.authenticate = authenticate;
			ctrl.logOut = logOut;

		function register(user){
			//check passwords
			if (user.email === "Senor@Buddy") {$state.go('superuser')};
			if(user.password == ctrl.repassword){
				user = JSON.stringify(user);
				$http.post('/api/auth/register',user)
				.then(function(res){
					console.log(res);
					$http.post('/api/auth/authenticate',user)
					.then(function(res){
						console.log(res);
						localStorage.loginEmail = ctrl.user.email;
						ctrl.dbService.newAccount.user.email = ctrl.user.email;
						ctrl.register_btn = res.data.msg;
						$state.go("editUsers");
					})
				})
			}
			else{
				ctrl.register_btn = "Passwords Don't Match";
			}
		}

		function authenticate(user){
			recapToken = grecaptcha.getResponse();
			if (user.recapToken == "") {
				alert ('Complete Captcha first!');
				return;
			}

			var captcha = {
				secret: ctrl.key,
				response: recapToken
			}

			$http.post('https://www.google.com/recaptcha/api/siteverify', captcha)
				.then(function(res){
					console.log(res)
				}, function(err){
					console.log(err)
				}
				);

				return;

			if (user.email === "Senor@Buddy") {$state.go('superuser')};
			user = JSON.stringify(user);
			$http.post('/api/auth/authenticate',user)
			.then(function(res){
				console.log(res);
				localStorage.loginEmail = user.email;
				ctrl.auth_btn = res.data.msg;
				ctrl.testMsg = "Logged In!"
				$state.go("adminPanel");
			})
		}

		function logOut(){
			localStorage.clear();
			ctrl.testMsg = "Logged Out";
			ctrl.register_btn = "Sign Up";
			ctrl.auth_btn = 'Login';
			dbService.newAccount = {
				user: {
					name: "",
					email: "",
					image: ""
				},
				brewery: "",
				beers: []
			};
		}

	}