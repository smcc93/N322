import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GearTrackerPage } from './gear-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: GearTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GearTrackerPageRoutingModule {}
