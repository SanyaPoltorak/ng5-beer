import {Directive, Injector, ElementRef, Input} from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'beer-details-directive'
})
export class BeerDetailsDirective extends UpgradeComponent {
  @Input() beer: any;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('beerDetails', elementRef, injector);
  }
}
