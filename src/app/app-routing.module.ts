import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InscriptionComponent } from './pages/inscription-eleve/inscription.component';
import { InscriptionMoniteurComponent } from './pages/inscription-moniteur/inscription-moniteur.component';
import { InscriptionSeanceComponent } from './pages/inscription-seance/inscription-seance.component';
import { SeanceListComponent } from './pages/seance-list/seance-list.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'signup', component : InscriptionComponent},
  {path : 'signup-monitor', component : InscriptionMoniteurComponent},
  {path : 'user-list', component : UserListComponent},
  {path : 'add-meeting', component : InscriptionSeanceComponent},
  {path : 'meeting-list', component : SeanceListComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
