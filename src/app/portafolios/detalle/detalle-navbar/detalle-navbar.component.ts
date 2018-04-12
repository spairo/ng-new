import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'new-detalle-navbar',
  templateUrl: './detalle-navbar.component.html',
  styleUrls: ['./detalle-navbar.component.styl']
})

export class DetalleNavbarComponent implements OnInit {

  public distance: number;

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.distance = this.element.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
    onWindowScroll() {
      if (window.scrollY >= this.distance) {
        this.element.nativeElement.className = 'fixedBar';
      } else {
        this.element.nativeElement.classList.remove('fixedBar');
      }
    }
}
