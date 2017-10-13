import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPostsComponent } from './side-bar-posts.component';

describe('SideBarPostsComponent', () => {
  let component: SideBarPostsComponent;
  let fixture: ComponentFixture<SideBarPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
