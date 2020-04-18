import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCardComponent } from './pages/project-list/components/project-card/project-card.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
