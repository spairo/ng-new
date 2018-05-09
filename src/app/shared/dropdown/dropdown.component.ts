import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.styl']
})
export class DropdownComponent implements OnInit {

  @Input() options: any;
  @Input() label: string;

  public opened: boolean = true;
  //public disabled: any;
  public counter: any;
  public picked: string;

  constructor() {}

  ngOnInit() {}

  selected(contract){
    this.picked = contract;
  }

}
