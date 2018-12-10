class BeerDetailsCtrl {
    constructor(BeerService) {
    }
}

BeerDetailsCtrl.$inject = ['BeerService'];

module.exports = {
    template: require('./beer-details.html'),
    controller: BeerDetailsCtrl,
    bindings: {
      beer: '='
    }
};
