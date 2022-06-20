import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelPlaceDTO } from './travel-place.dto';

export const GETS_ALL_TRAVEL_PLACE_DTO = new InjectionToken<GetsAllTravelPlaceDtoPort>('GETS_ALL_TRAVEL_PLACE_DTO');

export interface GetsAllTravelPlaceDtoPort {
  getAll(): Observable<TravelPlaceDTO[]>;
}
