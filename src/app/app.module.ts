import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { from } from 'rxjs';
import { CreateEmpComponent } from './create/create-emp.component';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmpComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule,
   BsDatepickerModule.forRoot(),
   BrowserAnimationsModule,
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
