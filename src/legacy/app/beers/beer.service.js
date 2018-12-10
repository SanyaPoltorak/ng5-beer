export default class BeerService {
  constructor($http) {
    this.$http = $http;
    this.beers = [];
  }

  getBeers() {
    return this.$http.get('/assets/output.json').then(response => {
      this.beers = response.data;
      return this.beers;
    });
  }

  getBeerById(id) {
      return this.beers.length ?
          Promise.resolve(this.beers.find(beer => beer.id === id)) :
          this.getBeers().then(() => Promise.resolve(
            this.beers.find(beer => beer.id === id))
          );
      }
}
