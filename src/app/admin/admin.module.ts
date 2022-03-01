import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MatTableModule } from '@angular/material/table';
import { MaterialExampleModule } from 'src/material.module';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AddEditFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
