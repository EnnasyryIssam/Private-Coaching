import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachInfoComponent } from './user-coach-info.component';

describe('UserCoachInfoComponent', () => {
  let component: UserCoachInfoComponent;
  let fixture: ComponentFixture<UserCoachInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoachInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCoachInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
