import { Directive, Injector, ElementRef } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'beer-list-directive'
})
export class BeerListDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('beerList', elementRef, injector);
  }
}
