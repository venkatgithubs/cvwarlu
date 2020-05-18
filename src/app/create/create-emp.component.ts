import { Component, OnInit } from '@angular/core';
import {Employees} from '../Models/Employees.Model';
import{dept} from '../Models/dept.Model';
import { NgForm } from '@angular/forms';


@Component({
  //selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {
  //Employees:Employees;
  // Employees:Employees={
  //   empno: 101,
  //    ename:'venkat',
  //    job:'dev',
  //    mgr:201,
  //    hiredate:new Date('11/20/1989'),
  //    sal:5000,
  //    comm:10000,
  //    deptno:10,
  //    imgPath:'assets/Images/img3.jpg'
  // }; 

  dept:dept[]=[{

    deptno:10,
    dname:'ACCOUNTING',
    loc:'NEW YORK',
  }, 
  {deptno:20,
  dname:'RESEARCH',
  loc:'DALLAS'
}, {deptno:30,
  dname:'SALES',
  loc:'CHICAGO'
}, 
{deptno:40,
  dname:'OPERATIONS',
  loc:'BOSTON'
}];
gender="Male";
dname="40";
ename="venkatesh";
job="developer";
mgr="manager";
hdata="";
comm="0";
sal="";
loc="Hyderabad";
loc2="Achampet";
  constructor() { }
 
  ngOnInit(): void {
  }

  saveEmployee(employeeForm:NgForm):void{
    console.log(employeeForm);
  }

}
