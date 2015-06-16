'use strict';

angular.module('mangaReaderApp')
	.factory('MangaAPI', function ($http) {
    
	var mangaAPI = {};
		
	mangaAPI.page = 0;
	mangaAPI.maxPage = 6;
		
	mangaAPI.get = function(manga, chapter, page) {
		return $http.get('/api/manga/'+ manga + '/' + chapter + '/' + page);
	};
	
	mangaAPI.nextPage = function(manga, chapter) {
		if(mangaAPI.page < mangaAPI.maxPage) {
			mangaAPI.page++;
		}
		return mangaAPI.get(manga, chapter, mangaAPI.page);
	};
	
	mangaAPI.prevPage = function(manga, chapter) {
		if(mangaAPI.page > 0) { 
			mangaAPI.page--;
		}
		return mangaAPI.get(manga, chapter, mangaAPI.page);
	};
	
	mangaAPI.initialPage = function(manga, chapter) {
		mangaAPI.page = 0;
		return mangaAPI.get(manga, chapter, mangaAPI.page);
	};
	
	return mangaAPI;
	
});

