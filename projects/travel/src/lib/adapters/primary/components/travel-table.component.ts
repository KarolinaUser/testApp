import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TravelPlaceDTO } from '../../../application/ports/secondary/dto/travel-place.dto';
import { GETS_ALL_TRAVEL_PLACE_DTO, GetsAllTravelPlaceDtoPort } from '../../../application/ports/secondary/dto/gets-all-travel-place.dto-port';
import { TravelTableQuery } from '../../../application/ports/primary/query/travel-table.query';
import { TravelTableRowQuery } from '../../../application/ports/primary/query/travel-table-row.query';

@Component({ selector: 'lib-travel-table', 
templateUrl: './travel-table.component.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush })
export class TravelTableComponent {
  TravelTableQuery$: Observable<TravelTableQuery> = this._getsAllTravelPlaceDto
  .getAll()
  .pipe(map((TravelPlaceDtos) => new TravelTableQuery(TravelPlaceDtos)));

  constructor(@Inject(GETS_ALL_TRAVEL_PLACE_DTO) 
  private _getsAllTravelPlaceDto: GetsAllTravelPlaceDtoPort) {
  }
}
