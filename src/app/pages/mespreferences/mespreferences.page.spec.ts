import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MespreferencesPage } from './mespreferences.page';

describe('MespreferencesPage', () => {
  let component: MespreferencesPage;
  let fixture: ComponentFixture<MespreferencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MespreferencesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MespreferencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
