class HomeViewCtrl {
    constructor(BeerService) {
        BeerService.getBeers().then(response => {
                this.beers = response.data
            });
    }
}

HomeViewCtrl.$inject = ['BeerService'];

module.exports = {
    template: require('./home-view.html'),
    controller: HomeViewCtrl,
};
