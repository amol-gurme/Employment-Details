import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent} from './dialog-box/dialog-box.component';
import { Subscription } from 'rxjs';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  private subscription: Subscription = new Subscription();
  selectedIndex : any ;
  empList = [];
  constructor(
    private utility:UtilityService,
    private dialog : MatDialog,
  ) { }

  ngOnInit(): void {

    // let requestJson = {
    //   "id": 11,
    //   "name": "AMol Gurme",
    //   "username": "gurme95",
    //   "email": "Sincere@april.biz",
    //   "phone": "1-770-736-8031 x56442",
    //   "website": "hildegard.org",
    // }
    // this.utility.postDataToServer('https://jsonplaceholder.typicode.com/users',requestJson).subscribe(response => {
    //   console.log('resp',response);
    //     this.utility.getDataToServer('https://jsonplaceholder.typicode.com/users').subscribe(res => {
    //   console.log('getResp',res);
    // })
    // })
  }
  openDialog(actionName,rowObj,index){
    let obj = {};
    obj['empDetls'] = rowObj ;
    obj['action'] = actionName ;
    this.selectedIndex = index ;
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      width: '60%',
      data: obj,
      backdropClass: 'backdropBackground'
    })
    this.subscription.add(dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addEmplDetls(result);
      }else if(result.event == 'Update'){
        this.updateEmpDtls(result);
      }else if(result.event == 'Delete'){
        this.deleteEmplDetls();
      }
      this.selectedIndex = undefined ;
    }));
  }

  trackByFn(index) {
    return index;
  }

  addEmplDetls(result){
   this.empList.push(result.data);
  }

  updateEmpDtls(result){
   this.empList[this.selectedIndex] = result.data ;
  }

  deleteEmplDetls(){
   this.empList.splice(this.selectedIndex,1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
