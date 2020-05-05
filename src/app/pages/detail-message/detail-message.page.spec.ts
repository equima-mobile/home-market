import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMessagePage } from './detail-message.page';

describe('DetailMessagePage', () => {
  let component: DetailMessagePage;
  let fixture: ComponentFixture<DetailMessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
