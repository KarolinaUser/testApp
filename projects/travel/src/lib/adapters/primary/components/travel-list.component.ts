import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TravelPlaceDTO } from '../../../application/ports/secondary/dto/travel-place.dto';
import { GETS_ALL_TRAVEL_PLACE_DTO, GetsAllTravelPlaceDtoPort } from '../../../application/ports/secondary/dto/gets-all-travel-place.dto-port';
import { TravelListQuery } from '../../../application/ports/primary/query/travel-list.query';
import { TravelListItemQuery } from '../../../application/ports/primary/query/travel-list-item.query';

@Component({ selector: 'lib-travel-list', 
templateUrl: './travel-list.component.html', 
encapsulation: ViewEncapsulation.None, 
changeDetection: ChangeDetectionStrategy.OnPush })
export class TravelListComponent {
  TravelListQuery$: Observable<TravelListQuery> = this._getsAllTravelPlaceDto
  .getAll()
  .pipe(
    map(
      (TravelPlaceDtos) => 
      new TravelListQuery(
        TravelPlaceDtos.map(
          (TravelPlaceDto) =>
           new TravelListItemQuery(TravelPlaceDto.name, TravelPlaceDto.continent)
           ))));

  constructor(@Inject(GETS_ALL_TRAVEL_PLACE_DTO) private _getsAllTravelPlaceDto: GetsAllTravelPlaceDtoPort) {
  }
}
