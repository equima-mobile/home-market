import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MentionsLegalesPage } from './mentions-legales.page';

describe('MentionsLegalesPage', () => {
  let component: MentionsLegalesPage;
  let fixture: ComponentFixture<MentionsLegalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsLegalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MentionsLegalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
