import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription-eleve/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './_components/user/user.component';
import { InscriptionMoniteurComponent } from './pages/inscription-moniteur/inscription-moniteur.component';
import { MonitorComponent } from './_components/monitor/monitor.component';
import { InscriptionSeanceComponent } from './pages/inscription-seance/inscription-seance.component';
import { SeanceListComponent } from './pages/seance-list/seance-list.component';
import { SeanceComponent } from './_components/seance/seance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    InscriptionComponent,
    UserListComponent,
    UserComponent,
    InscriptionMoniteurComponent,
    MonitorComponent,
    InscriptionSeanceComponent,
    SeanceListComponent,
    SeanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
