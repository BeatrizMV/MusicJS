import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionDetallesComponent } from './cancion-detalles/cancion-detalles.component';

import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CancionDetallesComponent
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
