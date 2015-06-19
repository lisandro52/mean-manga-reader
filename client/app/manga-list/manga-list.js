'use strict';

angular.module('mangaReaderApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manga-list', {
        url: '/manga-list',
        templateUrl: 'app/manga-list/manga-list.html',
        controller: 'MangaListCtrl'
      });
  });