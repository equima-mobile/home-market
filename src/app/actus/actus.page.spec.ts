import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActusPage } from './actus.page';

describe('ActusPage', () => {
  let component: ActusPage;
  let fixture: ComponentFixture<ActusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
