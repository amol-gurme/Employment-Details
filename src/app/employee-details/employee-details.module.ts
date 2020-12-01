import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [EmployeeDetailsComponent, DialogBoxComponent],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule  
  ],
})
export class EmployeeDetailsModule { }
