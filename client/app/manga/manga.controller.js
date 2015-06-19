'use strict';

angular.module('mangaReaderApp')
	.controller('MangaCtrl', function (MangaAPI, $scope, $stateParams) {

	var vm = $scope;
	vm.mangaId = $stateParams.manga;
	vm.chapter = $stateParams.chapter;
	vm.page = $stateParams.page;

	vm.scrollTo = function (element) {
		$('html, body').animate({
			scrollTop: $(element).offset().top
		}, 1000);
	};

	vm.renderPage = function (res) {
		vm.img = res.imgUrl;
	};

	vm.prev = function () {
		vm.scrollTo(".scroll-top");
		MangaAPI.prevPage(vm.mangaId, vm.chapter)
			.success(function (res) {
			vm.renderPage(res);
		});
	};

	vm.next = function () {
		vm.scrollTo(".scroll-top");
		MangaAPI.nextPage(vm.mangaId, vm.chapter)
			.success(function (res) {
			vm.renderPage(res);
		});
	};

	vm.init = function () {
		vm.scrollTo(".scroll-top");
		MangaAPI.initialPage(vm.mangaId, vm.chapter)
			.success(function (res) {
			vm.renderPage(res);
		});
	};

	vm.goToPage = function (mangaId, chapter, page) {
		vm.scrollTo(".scroll-top");
		MangaAPI.goToPage(mangaId, chapter, page)
			.success(function (res) {
			vm.renderPage(res);
		});
	}

	vm.goToPage(vm.mangaId, vm.chapter, vm.page);

});

