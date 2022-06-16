import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponentModule } from '@navi';
import { HomePageModule } from './pages/home.page-module';
import { TravelPageModule } from './pages/travel.page-module';
import { PhotoPageModule } from './pages/photo.page-module';

const routes: Routes = [{ 
        path: 'home', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'travel', 
        loadChildren: () => TravelPageModule
      },
  { 
        path: 'photo', 
        loadChildren: () => PhotoPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HomePageModule, NavbarComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
