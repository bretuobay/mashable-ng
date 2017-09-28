import { TestBed, inject } from '@angular/core/testing';

import { WeatherMapEffects } from './weather-maps.service';

describe('WeatherMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherMapEffects]
    });
  });

  it('should be created', inject([WeatherMapEffects], (service: WeatherMapEffects) => {
    expect(service).toBeTruthy();
  }));
});
