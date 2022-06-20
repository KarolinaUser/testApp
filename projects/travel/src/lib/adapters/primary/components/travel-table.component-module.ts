import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelTableComponent } from './travel-table.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TravelTableComponent],
  	providers: [],
  	exports: [TravelTableComponent] })
export class TravelTableComponentModule {
}
