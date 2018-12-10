function beerCardCtrl() {
}

module.exports = {
    template: require('./beer-card.html'),
    controller: beerCardCtrl,
    bindings: {
        item: '='
    }
}
