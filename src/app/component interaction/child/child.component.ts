import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  // parent to child
// @Input() parentData:any; parent to child
@Input("parentData") fullNames:any;
// child to paerents

@Output() childEvent =new EventEmitter();
sendData(){
  this.childEvent.emit("Hello from child")
}

// view child
showMassge(){
  console.log("show view child")
}
  ngOnInit(): void {
  }

}
