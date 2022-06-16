import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponentModule } from '@navi';
import { PhotoPage } from './photo.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: PhotoPage,
        }
      ]),
  NavbarComponentModule
],
  	declarations: [PhotoPage],
  	providers: [],
  	exports: [] })
export class PhotoPageModule {
}
