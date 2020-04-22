import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnepropertyPage } from './oneproperty.page';

describe('OnepropertyPage', () => {
  let component: OnepropertyPage;
  let fixture: ComponentFixture<OnepropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnepropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
