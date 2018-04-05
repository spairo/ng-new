import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';

import { ApibuilderModule } from '@app/apibuilder'
import { SettingsModule } from '@app/settings';
import { ProgramasModule } from '@app/programas';
import { PortafoliosModule } from '@app/portafolios';
import { StaticModule } from '@app/static';

import { PushNotificationsModule } from 'ng-push';

import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';

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
