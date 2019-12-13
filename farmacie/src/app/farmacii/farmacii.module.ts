import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from "@angular/router";
import { ApiModule } from "src/app/api/api.module";

import { IonicModule } from '@ionic/angular';

import { FarmaciiPageRoutingModule } from './farmacii-routing.module';

import { FarmaciiPage } from './farmacii.page';


@NgModule({
  imports: [
    ApiModule,
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciiPageRoutingModule
    
  ],
  declarations: [FarmaciiPage]
})
export class FarmaciiPageModule {}
