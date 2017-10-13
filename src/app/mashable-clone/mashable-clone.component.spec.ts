import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MashableCloneComponent } from './mashable-clone.component';

describe('MashableCloneComponent', () => {
  let component: MashableCloneComponent;
  let fixture: ComponentFixture<MashableCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MashableCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MashableCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
