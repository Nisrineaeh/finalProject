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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageMyTechniqueComponent,
    PageProfilComponent,
    PageNotFoundComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
