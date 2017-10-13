import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBySourceComponent } from './news-by-source.component';

describe('NewsBySourceComponent', () => {
  let component: NewsBySourceComponent;
  let fixture: ComponentFixture<NewsBySourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBySourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBySourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
