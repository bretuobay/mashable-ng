import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDashboardComponent } from './light-dashboard.component';

describe('LightDashboardComponent', () => {
  let component: LightDashboardComponent;
  let fixture: ComponentFixture<LightDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
