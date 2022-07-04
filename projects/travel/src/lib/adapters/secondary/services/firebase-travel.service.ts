import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { GetsAllTravelPlaceDtoPort } from '../../../application/ports/secondary/dto/gets-all-travel-place.dto-port';
import { TravelPlaceDTO } from '../../../application/ports/secondary/dto/travel-place.dto';

@Injectable()
export class FirebaseTravelService implements GetsAllTravelPlaceDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  getAll(): Observable<TravelPlaceDTO[]> {
    return this._client.collection<TravelPlaceDTO>('travel').valueChanges(({idField: 'id'}));
  }
}
