import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { GearTrackerPageRoutingModule } from './gear-tracker-routing.module';
import { GearTrackerPage } from './gear-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GearTrackerPageRoutingModule
  ],
  declarations: [GearTrackerPage]
})
export class GearTrackerPageModule {}
