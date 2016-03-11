angular
	.module('app',['ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
	
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
				controller: 'breweriesCtrl as ctrl'
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
});
