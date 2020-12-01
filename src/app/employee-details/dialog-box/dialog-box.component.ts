import {  Component,OnInit,Inject,Optional,ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';
import { restrictSpace } from '../../custom.validator';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  local_data : any ;
  action : any ;
  createEmpForm : FormGroup ;
  titleList= ['Software Developer','BA','HR','Project Manager'];
  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
    this.createEmpForm = this.formBuilder.group({
      'sEmployeeId' : ['',[Validators.required,restrictSpace]],
      'sEmployeeName':['',[Validators.required,Validators.pattern("^[a-zA-Z ]+$")]],
      'sEmployeeTitle':['',[Validators.required]],
      'sDateOfJoining':['',[Validators.required]],
    });
    this.action != 'Add' ? this.createEmpForm.patchValue(this.local_data.empDetls) : '' ;
   }

  ngOnInit(): void {
  }

  doAction(){
    this.dialogRef.close({ event: this.action, data: this.createEmpForm.value });
  }

  closeDialog(){
    this.dialogRef.close({ event: 'Cancel' });
  }
}


