import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreSectionComponent } from './components/store-section/store-section.component';



@NgModule({
  declarations: [
    HomeComponent,
    StoreSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StoreModule { }
