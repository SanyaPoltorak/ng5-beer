// import angular from 'angular';

import routes from './app.routes'
import beers from './beers'

export const beerAppModule = angular.module('beerApp', [beers])
  .config(routes);

/*
angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['beerApp'], {
        strictDi: false
    });
});
*/
