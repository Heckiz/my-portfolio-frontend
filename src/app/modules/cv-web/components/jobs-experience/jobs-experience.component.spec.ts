import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsExperienceComponent } from './jobs-experience.component';

describe('JobsExperienceComponent', () => {
  let component: JobsExperienceComponent;
  let fixture: ComponentFixture<JobsExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
