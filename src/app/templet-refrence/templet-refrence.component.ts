import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templet-refrence',
  templateUrl: './templet-refrence.component.html',
  styleUrls: ['./templet-refrence.component.css']
})
export class TempletRefrenceComponent implements OnInit {
  constructor() { }
  logMesg(inputName:any){
    console.log("wellcome")
    console.log(inputName)

  }
  ngOnInit(): void {
  }

}
