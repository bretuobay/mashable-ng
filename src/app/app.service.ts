import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class AppService {
  map: Map;

  constructor() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYnJldHVvYmF5IiwiYSI6ImNqOGE3bzR2azBjZTgzOHFsNXo0eTg4ZnUifQ.EXC2BhP7pogDpkRZ7FjBpg';
  }
}