import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments-details',
  templateUrl: './departments-details.component.html',
  styleUrls: ['./departments-details.component.css']
})
export class DepartmentsDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute ,private router: Router) { }
itemId:any
  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
this.itemId=params.get("id")
    })
    // this.itemId=this.activatedRoute.snapshot.paramMap.get("id")
  }
  goPrev(){

    let prevId=parseInt(this.itemId)-1
    this.router.navigate(["/department",prevId])
  }


  goNext(){
    let prevId=parseInt(this.itemId)+1
    this.router.navigate(["/department",prevId])
  }
  gooToDList(){
    this.router.navigate(["/department",{id:this.itemId}])

  }

  goToOverView(){
    this.router.navigate(["over"],{relativeTo:this.activatedRoute})


  }
  goToContact(){
    this.router.navigate(["contect"],{relativeTo:this.activatedRoute})

  }
}
