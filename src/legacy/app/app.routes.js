routes.$inject = ['$locationProvider', '$stateProvider'];

export default function routes($locationProvider, $stateProvider) {
  $locationProvider.hashPrefix('');

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
}
