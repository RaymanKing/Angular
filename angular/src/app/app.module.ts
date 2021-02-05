import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { CandidatosComponent } from './candidatos/candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CandidatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
