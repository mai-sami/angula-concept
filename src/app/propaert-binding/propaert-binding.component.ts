import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propaert-binding',
  templateUrl: './propaert-binding.component.html',
  styleUrls: ['./propaert-binding.component.css']
})
export class PropaertBindingComponent implements OnInit {

  constructor() { }
  myId:string="ok"
  isDisable:boolean=true
  textColor:string="succes"
  hasError:boolean=false
  isSpecail:boolean=true
  massgeClass={
    "succes":!this.hasError,
   "danger" :this.hasError
,   "isSpecail" :this.isSpecail

  }
  ngOnInit(): void {
  }
}
