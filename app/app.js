angular
	.module('app',['ui.router', 'angular-jwt', 'ngFileUpload'])
	.config(function($stateProvider, $urlRouterProvider, $httpProvider){

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'/partials/home.html',
				controller: 'homeCtrl as ctrl'
			})
			.state('login',{
				url:'/login',
				templateUrl:'/partials/login.html',
				controller: 'loginCtrl as ctrl'
			})
			.state('breweries',{
				url:'/breweries',
				templateUrl:'/partials/breweries.html',
				controller: 'breweriesCtrl as ctrl',
			})
			.state('adminPanel',{
				url:'/adminPanel',
				templateUrl:'/partials/adminPanel.html',
				controller: 'adminPanelCtrl as ctrl'
			})
			.state('beers',{
				url:'/beers',
				templateUrl:'/partials/beers.html',
				controller: 'beersCtrl as ctrl'
			})
			.state('events',{
				url:'/events',
				templateUrl:'/partials/events.html',
				controller: 'eventsCtrl as ctrl'
			})
			.state('brewery_subpage',{
				url:'/brewery/:breweryName',
				templateUrl:'/partials/brewery_subpage.html',
				controller: 'detailsCtrl as ctrl'
			})
			.state('beer_subpage',{
				url:'/beer/:beerName',
				templateUrl:'/partials/beer_subpage.html',
				controller: 'detailsCtrl as ctrl'
			})
			.state('editBreweries',{
				url:'/editBreweries',
				templateUrl:'/partials/editBreweries.html',
				controller: 'editBreweriesCtrl as ctrl'
			})
			.state('editBeers',{
				url:'/editBeers',
				templateUrl:'/partials/editBeers.html',
				controller: 'editBeersCtrl as ctrl'
			})
			.state('editUsers',{
				url:'/editUsers',
				templateUrl:'/partials/editUsers.html',
				controller: 'editUsersCtrl as ctrl'
			})

			$httpProvider.interceptors.push(function(jwtHelper){
				return {
					request:function(config){
						//console.log(config);
						config.headers.authentication = localStorage.authToken;
						return config;
					},
					response:function(response){
						var auth_token = response.headers('authentication');
						console.log(auth_token);
						if(auth_token){
							var decrypt_token = jwtHelper.decodeToken(auth_token);
							console.log(decrypt_token);
							if(decrypt_token.email){
							localStorage.authToken = auth_token;
						}
						
					}
					return response;
				}
			}
		});
});
