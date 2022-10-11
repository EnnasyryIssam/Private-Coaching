import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoachProgramDetailsComponent } from './user-coach-program-details.component';

describe('UserCoachProgramDetailsComponent', () => {
  let component: UserCoachProgramDetailsComponent;
  let fixture: ComponentFixture<UserCoachProgramDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoachProgramDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCoachProgramDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
