routes.$inject = ['$locationProvider'];

export default function routes($locationProvider) {
  $locationProvider.hashPrefix('');

/*
    $stateProvider
      .state('home', {
        url: '/',
        template: ''
      })
        .state('beers', {
            url: '/beers',
            template: ''
        })
        .state('beer-details', {
            url: '/beer/:id',
            template: ''
        });
*/
}
