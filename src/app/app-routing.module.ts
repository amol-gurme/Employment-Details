import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo:"/employee", pathMatch: 'full' },
  { path: 'employee', loadChildren: () => import(`./employee-details/employee-details.module`).then(m => m.EmployeeDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
