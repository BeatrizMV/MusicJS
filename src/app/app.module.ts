import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionDetallesComponent } from './cancion-detalles/cancion-detalles.component';

import { FormsModule} from '@angular/forms';
import { DetallescancionComponent } from './detallescancion/detallescancion.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ReproductorComponent } from './reproductor/reproductor.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionDetallesComponent,
    DetallescancionComponent,
    MainWindowComponent,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
