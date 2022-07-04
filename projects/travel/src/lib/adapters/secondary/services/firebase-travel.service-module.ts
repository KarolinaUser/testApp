import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseTravelService } from './firebase-travel.service';
import { GETS_ALL_TRAVEL_PLACE_DTO } from '../../../application/ports/secondary/dto/gets-all-travel-place.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseTravelService, { provide: GETS_ALL_TRAVEL_PLACE_DTO, useExisting: FirebaseTravelService }],
  	exports: [] })
export class FirebaseTravelServiceModule {
}
