class HomeViewCtrl {
    constructor(BeerService) {
        BeerService.getBeers().then(response => {
                this.beers = response.data
            });
        console.log('Home view controller', this);
    }
}

HomeViewCtrl.$inject = ['BeerService'];

module.exports = {
    template: require('./home-view.html'),
    controller: HomeViewCtrl,
};
