import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '@app/core';
import { PortafoliosService } from '@app/portafolios/portafolios/portafolios.service';

@Component({
  selector: 'new-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.styl'],
  providers: [PortafoliosService]
})
export class PdfComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;

  constructor() { }

  ngOnInit() {
  }

}
