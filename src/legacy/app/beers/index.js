import angular from 'angular'
/*
import uirouter from 'angular-ui-router'
*/

import homeView from './home-view/home-view.component'
import beerList from './beer-list/beer-list.component';
import beerCard from './beer-card/beer-card.component';
import beerDetails from './beer-details/beer-details.component';
import BeerService from './beer.service'

export default angular.module('beerApp.beers', [])
  .component('homeView', homeView)
  .component('beerList', beerList)
  .component('beerCard', beerCard)
  .component('beerDetails', beerDetails)
  .service('BeerService', BeerService)
  .name
