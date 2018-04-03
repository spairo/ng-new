import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { ApibuilderModule } from '@app/apibuilder'
import { PushNotificationsModule } from 'ng-push';
import { CoreModule } from '@app/core';

import { SettingsModule } from './settings';
import { ProgramasModule } from './programas';
import { PortafoliosModule } from './portafolios';
import { StaticModule } from './static';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,
    ApibuilderModule,

    // features
    StaticModule,
    SettingsModule,
    ProgramasModule,
    PortafoliosModule,

    // libs
    PushNotificationsModule,

    // app
    AppRoutingModule,

  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
