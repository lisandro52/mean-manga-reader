'use strict';

angular.module('mangaReaderApp')
	.controller('MangaCtrl', function (MangaAPI, $scope) {

	var vm = $scope;
	
	vm.scrollTo = function(element) {
		$('html, body').animate({
			scrollTop: $(element).offset().top
		}, 1000);
	};
	
	vm.renderPage = function (res) {
		vm.img = res.imgUrl;
		vm.scrollTo(".scroll-top");
	};

	vm.prev = function () {
		MangaAPI.prevPage('love-hina', 4)
			.success(function(res) {
				vm.renderPage(res);
		});
	};

	vm.next = function () {
		MangaAPI.nextPage('love-hina', 4)
			.success(function(res) {
				vm.renderPage(res);
		});
	};

	vm.init = function () {
		MangaAPI.initialPage('love-hina', 4)
			.success(function (res) {
				vm.renderPage(res);
		});
	};	
	
	vm.init();
	
});

