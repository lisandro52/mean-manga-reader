'use strict';

angular.module('mangaReaderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manga', {
        url: '/manga',
        templateUrl: 'app/manga/manga.html',
        controller: 'MangaCtrl'
      });
  });