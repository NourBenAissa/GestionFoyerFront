import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { FoyerComponent } from './foyer/foyer.component';
import { BlocComponent } from './bloc/bloc.component';
import { ChambreComponent } from './chambre/chambre.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FoyerComponent,
    BlocComponent,
    ChambreComponent,
    AddReservationComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule
  ]
})
export class UniversityModule { }
