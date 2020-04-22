import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListagentsPage } from './listagents.page';

describe('ListagentsPage', () => {
  let component: ListagentsPage;
  let fixture: ComponentFixture<ListagentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListagentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
