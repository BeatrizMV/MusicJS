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
//Angular material import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

//Angular fire
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';


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
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase), //Importamos FireModule y le pasamos la configuración de enviroment.ts
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
