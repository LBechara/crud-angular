import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';

import { SharedModulesModule } from './shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
