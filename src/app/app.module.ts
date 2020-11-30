import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListacancionesComponent } from './listacanciones/listacanciones.component';

import { FormsModule} from '@angular/forms';
import { DetallescancionComponent } from './detallescancion/detallescancion.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListacancionesComponent,
    DetallescancionComponent,
    MainWindowComponent,
    ReproductorComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
