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
	
	mangaAPI.goToPage = function(manga, chapter, page) {
		return mangaAPI.get(manga, chapter, page);
	};
	
	mangaAPI.getMangaList = function() {
		return [{
			title: 'Love hina',
			alias: 'love-hina',
			chapters: [{
				chapterNumber: 2,
				pages: 12
			},
			{
				chapterNumber: 4,
				pages: 20
			}]
		},
		{
			title: 'Round Shell',
			alias: 'round-shell',
			chapters: [{
				chapterNumber: 1,
				pages: 34
			},
			{
				chapterNumber: 2,
				pages: 20
			}]
		}];
	};
	
	return mangaAPI;
	
});

