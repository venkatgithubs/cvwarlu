import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListEmployeesComponent} from './employee/list-employees.component'
import{CreateEmpComponent} from './create/create-emp.component'


const routes: Routes = [
{path:'list',component:ListEmployeesComponent},
{path:'create',component:CreateEmpComponent},
{path:'',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
