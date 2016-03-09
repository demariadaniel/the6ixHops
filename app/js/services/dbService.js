	angular
		.module('app')
		.service('dbService', dbService);

	function dbService($http) {

			this.allItem = [];
			this.selectItem = {};

			this.getAll = getAll;
			this.getOne = getOne;
			this.post = post;
			this.put = put;
			this.del = del;

		function getAll(addr){
			console.log("getAll");
			return $http.get(addr)
				.then(function(res){
					this.allItem = res.data;
					return res.data;
				}, function(err){
					console.log(err);
					return err;
			})
		};

		function getOne(addr, id){
			return $http.get(addr+id)
				.then(function(res){
					this.selectItem = res.data;
					return res.data
				}, function(err){
					console.log(err);
					return err
				})
	 	};

		function post(addr, newItem){
			console.log("post");
			return $http.post(addr, newItem)
				.then(function(res){
					console.log(res.data);
					return res
				}, function(err){
					console.log(err);
					return err
				})
		};

		function put(addr, id, update){
			console.log("put");
			return $http.put(addr+id, update)
				.then(function(res){
					return res
				}, function(err){
					console.log(err);
					return err
				})
		};

		function del(addr, id){
			console.log("del");
			return $http.delete(addr+id)
				.then(function(res){
					return res
				}, function(err){
						console.log(err);
						return err
					})
		};

	};