import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSquareComponent } from './map-square.component';

describe('MapSquareComponent', () => {
  let component: MapSquareComponent;
  let fixture: ComponentFixture<MapSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
