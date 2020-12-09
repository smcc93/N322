import { Component } from '@angular/core';
import { CraftingService } from '../services/crafting.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public craftingService: CraftingService) {}

    login():void{
      this.craftingService.signInAnonymously();
    }

    logout():void{
      this.craftingService.logoutUser();
    }

    viewGear():void{
      
      this.craftingService.show = !this.craftingService.show;

      if(this.craftingService.show == true){
        this.craftingService.getGear();
      }else{
        this.craftingService.gears = [];
      }
    }

    
}
