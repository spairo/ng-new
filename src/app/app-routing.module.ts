import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings';
import { ProgramasComponent } from './programas';
import { PortafoliosComponent } from './portafolios';

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
      title: 'portafolios'
    }
  },
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
