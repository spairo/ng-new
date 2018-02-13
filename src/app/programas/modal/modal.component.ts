import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('rosarito');
  }

}
