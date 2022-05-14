import { ContactComponent } from './contact/contact.component';
import { OverViewComponent } from './over-view/over-view.component';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';
import { DepartmentsComponent } from './departments/departments.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailsComponent } from './Services/employee-details/employee-details.component';
import { EmployeeListComponent } from './Services/employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:DepartmentsComponent},
  {path:"department/:id",component:DepartmentsDetailsComponent,
children:[
 {path:"over",component:OverViewComponent},
 {path:"contect",component:ContactComponent}
]
},
  {path:"department",component:DepartmentsComponent},

  // {path:"",redirectTo:"employee",pathMatch:"full"},
{path:"employee",component:EmployeeListComponent},
{path:"detals",component:EmployeeDetailsComponent},
{path:"**" ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
