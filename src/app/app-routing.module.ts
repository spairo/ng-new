import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortafoliosComponent } from './portafolios';
import { DetalleComponent } from './portafolios/detalle/detalle.component';
import { PdfComponent } from './portafolios/pdf/pdf.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portafolios',
    pathMatch: 'full',
    data: {
      title: 'Portafolios Inversion'
    }
  },
  {
    path: 'portafolios',
    component: PortafoliosComponent,
    data: {
      title: 'Portafolios Inversion'
    }
  },
  {
    path: 'portafolios/detalle/:serie/:id',
    component: DetalleComponent,
    data: {
      title: 'Detalle Portafolio'
    }
  },
  {
    path: 'portafolios/pdf/:tab/:contrato/:subyacente',
    component: PdfComponent,
    data: {
      title: 'Detalle Portafolio'
    }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule',
  },
  {
    path: '**',
    redirectTo: 'portafolios'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
