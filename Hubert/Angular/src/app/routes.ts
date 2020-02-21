import {Route, Routes} from '@angular/router';
import {EquipesComponent} from './equipes/equipes.component';
import {ClientsComponent} from './clients/clients.component';
import {ParamComponent} from './param/param.component';
import {CrudClientMemoireComponent} from './crud-client-memoire/crud-client-memoire.component';
import {CrudClientEdithComponent} from './crud-client-edit/crud-client-edit.component';

export const routes: Route[] = [
  {path: 'equipes', component: EquipesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'param/:nom', component: ParamComponent},
  {path: 'crudClient', component: CrudClientMemoireComponent},
  {path: 'crudEditClient', component: CrudClientEdithComponent},
  {path: 'crudEditClient/:index', component: CrudClientEdithComponent}
]
