import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesInfosPage } from './mes-infos.page';

describe('MesInfosPage', () => {
  let component: MesInfosPage;
  let fixture: ComponentFixture<MesInfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesInfosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesInfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
