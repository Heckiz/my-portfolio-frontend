import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvWebComponent } from './cv-web.component';

describe('CvWebComponent', () => {
  let component: CvWebComponent;
  let fixture: ComponentFixture<CvWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
