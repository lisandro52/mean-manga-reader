'use strict';

angular.module('mangaReaderApp')
	.controller('MangaListCtrl', function (MangaAPI, $scope) {
    
		var vm = $scope;
		
		vm.mangaList = MangaAPI.getMangaList();
	
		/*vm.scrollTo = function (element) {
			$('html, body').animate({
				scrollTop: $(element).offset().top
			}, 1000);
		};
	
		vm.renderPage = function (res) {
			vm.img = res.imgUrl;
		};
	
		vm.prev = function () {
			vm.scrollTo(".scroll-top");
			MangaAPI.prevPage('love-hina', 4)
				.success(function (res) {
				vm.renderPage(res);
			});
		};*/
});
