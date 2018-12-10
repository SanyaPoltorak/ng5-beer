import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'beer-details',
  templateUrl: './beer-details.component.html'
})

export class BeerDetailsComponent implements OnInit {
  isLoaded = false;
  beer: object;

  constructor(
    private route: ActivatedRoute,
    @Inject('BeerService') private beerService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.beerService.getBeerById(params.id)
        .then(res => {
          this.beer = res;
          this.isLoaded = true;
        });
    });
  }
}
