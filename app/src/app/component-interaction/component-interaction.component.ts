import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
  
    <h2>Hello, {{parentData}}</h2>
    <h2>Hello, {{name}}</h2>

  `,
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }

  // Sending Data from Parent(root) to Child //

    @Input() public parentData:any;

    // Using parentData but given a  different name // 

    @Input('parentData') public name:any;

  // Sending Data from child to Parent(root) , we have to use Event because we do not have parent component Selector component  in child component. 

  ngOnInit(): void {
  }

}
