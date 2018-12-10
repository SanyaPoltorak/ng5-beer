// import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './app.routes'
import beers from './beers'

export const beerAppModule = angular.module('beerApp', [uirouter, beers])
  .config(routes);

/*
angular.element(document).ready(function () {
    angular.bootstrap(document.documentElement, ['beerApp'], {
        strictDi: false
    });
});
*/
