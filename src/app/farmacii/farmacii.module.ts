import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from '@ionic/angular';

import { FarmaciiPageRoutingModule } from './farmacii-routing.module';

import { FarmaciiPage } from './farmacii.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmaciiPageRoutingModule
    
  ],
  declarations: [FarmaciiPage]
})
export class FarmaciiPageModule {}
