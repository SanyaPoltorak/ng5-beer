import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/beers',
      pathMatch: 'full'
    },
    {
      path: 'beers',
      component: ContainerComponent,
    },
    {
      path: 'beer/:id',
      component: BeerDetailsComponent,
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
