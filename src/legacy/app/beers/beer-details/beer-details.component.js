class BeerDetailsCtrl {
    constructor($state, BeerService) {
/*
      setTimeout(()=>{
        BeerService.getBeerById($state.params.id).then(
          beer => this.beer = beer
        );
      }, 0);
*/
    }
}

BeerDetailsCtrl.$inject = ['$state', 'BeerService'];

module.exports = {
    template: require('./beer-details.html'),
    controller: BeerDetailsCtrl,
    bindings: {
      beer: '='
    }
};
