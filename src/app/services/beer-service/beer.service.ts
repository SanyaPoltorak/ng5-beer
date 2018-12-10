function beerServiceServiceFactory(i: any) {
  return i.get('BeerService');
}

export const BeerServiceProvider = {
  provide: 'BeerService',
  useFactory: beerServiceServiceFactory,
  deps: ['$injector']
};
