import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router ,private activatedRoute:ActivatedRoute) { }
deparment:any=[
  {"id":1,"name":"Angular"},
  {"id":2,"name":"NodeJs"},
  {"id":3,"name":"Reactjs"},


]
itemId:any=0
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.itemId=params.get("id")
          })
  }
  goToDepartmentDetails(item:any){
this.router.navigate(["/department",item.id])

  }

  isSelected(item:any){
return parseInt(item.id)===parseInt(this.itemId)
  }

 
}
