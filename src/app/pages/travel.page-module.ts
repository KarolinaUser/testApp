import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TravelPage } from './travel.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TravelPage,
        }
      ])],
  	declarations: [TravelPage],
  	providers: [],
  	exports: [] })
export class TravelPageModule {
}
