import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GearTrackerPage } from './gear-tracker.page';

describe('GearTrackerPage', () => {
  let component: GearTrackerPage;
  let fixture: ComponentFixture<GearTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearTrackerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GearTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
