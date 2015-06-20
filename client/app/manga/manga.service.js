'use strict';

angular.module('mangaReaderApp')
	.factory('MangaAPI', function ($http) {

	var mangaAPI = {};

	mangaAPI.page = 1;
	mangaAPI.mangaList = [{
		title: 'Love hina',
		alias: 'love-hina',
		chapters: [{
			chapterNumber: 1,
			pages: 77
		},
			{
				chapterNumber: 2,
				pages: 25
			},
			{
				chapterNumber: 3,
				pages: 19
			}]
	},
		{
			title: 'Panty & Stockings with Gaterbelt',
			alias: 'psg',
			chapters: [{
				chapterNumber: 1,
				pages: 12
			},
				{
					chapterNumber: 2,
					pages: 14
				}]
		}];


	mangaAPI.getMaxChapterPage = function (manga, chapter) {
		var maxPages;
		$.each(mangaAPI.mangaList, function (i, m) {
			if (m.alias == manga) {
				$.each(m.chapters, function (ind, c) {
					if (c.chapterNumber == chapter) {
						maxPages = c.pages;
						return false;
					}
				});
			}
		});
		return maxPages;
	};
	
	mangaAPI.get = function (manga, chapter, page) {
		var maxPage = mangaAPI.getMaxChapterPage(manga, chapter);
		
		if (page >= maxPage) {
			page = maxPage;
		}
		
		if(page < 1) {
			page = 1;
		}
		
		mangaAPI.page = page;
		
		return $http.get('/api/manga/' + manga + '/' + chapter + '/' + page);
	};
	
	mangaAPI.nextPage = function (manga, chapter) {
		mangaAPI.page++;
		return mangaAPI.get(manga, chapter, mangaAPI.page);
	};

	mangaAPI.prevPage = function (manga, chapter) {
		mangaAPI.page--;
		return mangaAPI.get(manga, chapter, mangaAPI.page);
	};

	mangaAPI.initialPage = function (manga, chapter) {
		mangaAPI.page = 1;
		return mangaAPI.get(manga, chapter, mangaAPI.page);
	};

	mangaAPI.goToPage = function (manga, chapter, page) {
		return mangaAPI.get(manga, chapter, page);
	};

	mangaAPI.getMangaList = function () {
		return mangaAPI.mangaList;
	};

	return mangaAPI;

});

