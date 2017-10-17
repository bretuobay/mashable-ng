import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RssNewsComponent } from './rss-news.component';

describe('RssNewsComponent', () => {
  let component: RssNewsComponent;
  let fixture: ComponentFixture<RssNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RssNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RssNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
