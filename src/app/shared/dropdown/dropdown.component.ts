import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'new-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.styl']
})
export class DropdownComponent implements OnInit {

  public opened: boolean = true;
  public counter: any;
  public picked: string;
  public disabled: any;

  @Input('options') options: any;
  @Input('label') label: string;
  @Output() modelo = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selected(item){
    this.picked = item;
    this.modelo.emit({
      modelo: item
    });
  }

}
