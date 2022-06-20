import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelListComponent } from './travel-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TravelListComponent],
  	providers: [],
  	exports: [TravelListComponent] })
export class TravelListComponentModule {
}
