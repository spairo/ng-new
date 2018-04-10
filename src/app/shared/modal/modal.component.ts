import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'new-modal',
  template: `
  <div [@dialog] *ngIf="visible" class="modal">
    <div *ngIf="visible" class="overlay" (click)="close()"></div>
    <div class="modal-box" [ngClass]="size">
      <i class="close" (click)="close()"></i>
      <ng-content class="modal-content"></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./modal.component.styl'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.5, .5, .5)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {

  @Input() closable = true;
  @Input() visible: boolean;
  @Input() size: string;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
