import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { downgradeComponent, UpgradeModule} from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { beerAppModule } from '../legacy/app/app.module';
import { BeerListDirective } from './components/beer-list/beer-list.directive';
import { ContainerComponent } from './components/container/container.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';
import { BeerDetailsDirective } from './components/beer-details/beer-details.directive';
import { BeerDescriptionComponent } from './components/beer-description/beer-description.component';
import { BeerServiceProvider } from './services/beer-service/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListDirective,
    BeerDetailsDirective,
    BeerDetailsComponent,
    BeerDescriptionComponent,
    ContainerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UpgradeModule
  ],
  providers: [
    {provide: '$scope', useExisting: '$rootScope'},
    BeerServiceProvider
  ],
  entryComponents: [
    BeerDescriptionComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(upgrade: UpgradeModule) {
    angular.module(beerAppModule.name)
      .directive('beerDescription', downgradeComponent({ component: BeerDescriptionComponent }));
    upgrade.bootstrap(document.documentElement, [beerAppModule.name]);
  }
}
