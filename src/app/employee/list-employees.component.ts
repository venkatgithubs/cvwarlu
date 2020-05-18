import { Component, OnInit } from '@angular/core';
import {Employees} from '../Models/Employees.Model';


@Component({
 // selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

employee:Employees[]=[
  {
   
   
    empno: 101,
     ename:'venkat',
     job:'dev',
     mgr:201,
     hiredate:new Date('11/20/1989'),
     sal:5000,
     comm:10000,
     deptno:10,
     imgPath:'assets/Images/img3.jpg'
  },
  {
  
    empno: 102,
     ename:'swetha',
     job:'sec',
     mgr:201,
     hiredate:new Date('11/20/1989'),
     sal:6000,
     comm:10000,
     deptno:20,
     imgPath:'assets/Images/img2.jpg'
  },
  {
    
    empno: 103,
     ename:'swing',
     job:'agent',
     mgr:201,
     hiredate:new Date('11/20/1989'),
     sal:4000,
     comm:10000,
     deptno:30,
     imgPath:'assets/Images/img1.jpg'
  },
];

  constructor() { }

  ngOnInit(): void {
   
    console.log(this.employee);
  }

}
