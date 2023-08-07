import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyTechniqueComponent } from './pages/page-my-technique/page-my-technique.component';
import { JournalComponent } from './pages/journal/journal.component';
import { PageProfilComponent } from './pages/page-profil/page-profil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { RedirectComponent } from './pages/redirect/redirect.component';
import { MeditationDetailComponent } from './pages/meditation-detail/meditation-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: PageHomeComponent },
  { path: 'guide', component: PageMyTechniqueComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'profil', component: PageProfilComponent },
  { path:'connexion', component: ConnexionComponent},
  { path: 'inscription', component: InscriptionComponent },
  {path:'redirect', component: RedirectComponent},
  {path: 'meditation/:id', component: MeditationDetailComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
