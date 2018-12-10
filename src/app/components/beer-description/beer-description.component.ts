import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-beer-description',
  templateUrl: './beer-description.component.html'
})

export class BeerDescriptionComponent {
  @Input() description: string;
}
