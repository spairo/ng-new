import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { ProgramasComponent } from './programas';
import { PortafoliosComponent } from './portafolios';
import { DetalleComponent } from './portafolios/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings'
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
  /*
  '/portafolios-inversion/detalle/:serie/:id': {
				deps: [
					'app/seguimiento/portafolios-inversion/detalle-portafolio/detail-portafolio-controller.js',
					'app/seguimiento/portafolios-inversion/detalle-portafolio/detail-portafolio-service.js'
				],
				templateUrl: 'app/seguimiento/portafolios-inversion/detalle-portafolio/main.html'
			},
  */
  {
    path: 'programas',
    component: ProgramasComponent,
    data: {
      title: 'Programas'
    }
  },
  {
    path: 'examples',
    loadChildren: 'app/examples/examples.module#ExamplesModule'
  },
  {
    path: '**',
    redirectTo: 'about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
