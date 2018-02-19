import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApibuilderService } from './apibuilder.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ApibuilderService]
})
export class ApibuilderModule {

  constructor() { }
}

