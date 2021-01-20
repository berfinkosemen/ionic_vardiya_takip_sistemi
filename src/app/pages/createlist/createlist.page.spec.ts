import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatelistPage } from './createlist.page';

describe('CreatelistPage', () => {
  let component: CreatelistPage;
  let fixture: ComponentFixture<CreatelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
