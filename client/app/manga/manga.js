'use strict';

angular.module('mangaReaderApp')
	.config(function ($stateProvider) {
    $stateProvider
		.state('manga', {
        url: '/',
        templateUrl: 'app/manga/manga-list.html',
        controller: 'MangaCtrl'
	})
		.state('mangaParam', {
		url: '/manga/{manga}/{chapter}/{page}',
		templateUrl: 'app/manga/manga.html',
		controller: 'MangaCtrl'
	});
});