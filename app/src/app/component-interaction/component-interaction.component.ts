import { Component, Input,Output, OnInit,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `

    <h2>{{'Hello ' + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>

  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  public name="Vishwas"

  constructor() { }

  // Sending Data from child to Parent(root) , we have to use Event because we do not have parent component Selector component  in child component. 

  @Output() public childEvent=new EventEmitter;  


  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Hey Codevolution")
  }

}
