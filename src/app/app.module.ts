import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyTechniqueComponent } from './pages/page-my-technique/page-my-technique.component';
import { PageProfilComponent } from './pages/page-profil/page-profil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { JournalComponent } from './pages/journal/journal.component';

import{HttpClientModule} from '@angular/common/http';
import { TechListComponent } from './components/tech-list/tech-list.component';
import { CardComponent } from './components/card/card.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ArticleComponent } from './components/article/article.component';
import { BtnInscriptionComponent } from './components/btn-inscription/btn-inscription.component';
import { NoteComponent } from './components/note/note.component';
import { RedirectComponent } from './pages/redirect/redirect.component'
import { FormsModule } from '@angular/forms';

import { ModalModule} from 'ngx-bootstrap/modal';
import { ModalInscriptionComponent } from './components/modal-inscription/modal-inscription.component';
import { MeditationDetailComponent } from './pages/meditation-detail/meditation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyTechniqueComponent,
    PageProfilComponent,
    PageNotFoundComponent,
    JournalComponent,
    TechListComponent,
    CardComponent,
    ConnexionComponent,
    InscriptionComponent,
    ArticleComponent,
    BtnInscriptionComponent,
    NoteComponent,
    RedirectComponent,
    ModalInscriptionComponent,
    MeditationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
