import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TravelPlaceDTO } from '../../../application/ports/secondary/dto/travel-place.dto';
import { GETS_ALL_TRAVEL_PLACE_DTO, GetsAllTravelPlaceDtoPort } from '../../../application/ports/secondary/dto/gets-all-travel-place.dto-port';

@Component({ selector: 'lib-travel-table', 
templateUrl: './travel-table.component.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush })
export class TravelTableComponent {
  list$: Observable<TravelPlaceDTO[]> = this._getsAllTravelPlaceDto.getAll();

  constructor(@Inject(GETS_ALL_TRAVEL_PLACE_DTO) private _getsAllTravelPlaceDto: GetsAllTravelPlaceDtoPort) {
  }
}
