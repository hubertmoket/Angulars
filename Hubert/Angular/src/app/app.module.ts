import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CouleurComponent } from './couleur/couleur.component';

import { CacherComponent } from './cacher/cacher.component';
import {ClientComponent} from './client/client.component';
import { AscBoldComponent } from './asc-bold/asc-bold.component';
import { AscBoldElementComponent } from './asc-bold-element/asc-bold-element.component';
import { AscTooltipComponent } from './asc-tooltip/asc-tooltip.component';
import { SortieComponent } from './sortie/sortie.component';
import { EquipeComponent } from './equipe/equipe.component';
import { EquipesComponent } from './equipes/equipes.component';
import { TestDirective } from './test.directive';
import { ClientsComponent } from './clients/clients.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { ParamComponent } from './param/param.component';
import { PersoPipe } from './pipe/perso.pipe';
import {FirstService} from './services/first.service';
import {TableauService} from './services/tableau.service';
import { VueComponent } from './vue/vue.component';
import { CrudClientMemoireComponent } from './crud-client-memoire/crud-client-memoire.component';
import { CrudClientEdithComponent } from './crud-client-edit/crud-client-edit.component';

@NgModule({
   // tout les components du module
  declarations: [
    AppComponent,
    CouleurComponent,
    ClientComponent,
    CacherComponent,
    AscBoldComponent,
    AscBoldElementComponent,
    AscTooltipComponent,
    SortieComponent,
    EquipeComponent,
    EquipesComponent,
    TestDirective,
    ClientsComponent,
    ParamComponent,
    PersoPipe,
    VueComponent,
    CrudClientMemoireComponent,
    CrudClientEdithComponent

  ],
  // tout les imports du module
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  // provider les services
  providers: [FirstService, TableauService],
  bootstrap: [AppComponent]
})
export class AppModule { }
