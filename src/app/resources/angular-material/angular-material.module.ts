import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  exports: [
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
