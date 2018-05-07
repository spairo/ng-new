import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'new-dropdown',
  //template: ``,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.styl']
})
export class DropdownComponent implements OnInit {

  public opened: boolean = true;
  public foo: string;
  public disabled: any;

  @Input() options: any;
  @Input() label: string;
  @Output() public onUpdate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  runOnComplete(): void {
    console.log(this.onUpdate);
    this.onUpdate.emit();
  }


  on_complete(){}

  onOpen(){}

}
