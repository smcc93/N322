import { Component, OnInit } from '@angular/core';
import {CraftingService} from '../services/crafting.service';
@Component({
  selector: 'app-gear-tracker',
  templateUrl: './gear-tracker.page.html',
  styleUrls: ['./gear-tracker.page.scss'],
})
export class GearTrackerPage implements OnInit {

  constructor(public craftingService: CraftingService) { }

  ngOnInit() {
  }

}
