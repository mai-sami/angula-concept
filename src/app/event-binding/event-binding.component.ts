import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }


  massge="wellcom"
  printM(eventOccurd:any){
    console.log("its Work fine")
    this.massge="wellcome this funcation"
    console.log(eventOccurd)
  }
  ngOnInit(): void {
  }

}
