import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from '@navi';
import { FirebaseTravelServiceModule, TravelListComponentModule, TravelTableComponentModule } from '@travel';
import { TravelPage } from './travel.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TravelPage,
        }
      ]),
  NavbarComponentModule,
  TravelListComponentModule,
  FirebaseTravelServiceModule,
  TravelTableComponentModule
],
  	declarations: [TravelPage],
  	providers: [],
  	exports: [] })
export class TravelPageModule {
}
