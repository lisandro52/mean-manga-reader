'use strict';

angular.module('mangaReaderApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ui.router',
	'ui.bootstrap',
	'ng-slide-down',
	'slideMenu'
])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
		.otherwise('/');

    $locationProvider.html5Mode(true);
})
	.directive('includeReplace', function () {
	return {
		require: 'ngInclude',
		restrict: 'A',
		link: function (scope, el, attrs) {
			attrs = attrs;
			el.replaceWith(el.children());
		}
	};
});