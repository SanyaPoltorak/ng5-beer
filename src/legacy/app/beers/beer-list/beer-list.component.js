class BeerListCtrl {
    constructor(BeerService) {
        BeerService.getBeers().then(response => {
            this.beers = response;
        });
    }
}

BeerListCtrl.$inject = ['BeerService'];

module.exports = {
    template: require('./beer-list.html'),
    controller: BeerListCtrl,
};
