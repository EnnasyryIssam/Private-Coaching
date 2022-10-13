import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSecondCoachInfoComponent } from './user-second-coach-info.component';

describe('UserSecondCoachInfoComponent', () => {
  let component: UserSecondCoachInfoComponent;
  let fixture: ComponentFixture<UserSecondCoachInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSecondCoachInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSecondCoachInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
