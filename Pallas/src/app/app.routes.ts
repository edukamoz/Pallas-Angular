import { Routes } from '@angular/router';
import { DesafiosComponent } from './desafios/desafios.component';
import { JogosComponent } from './jogos/jogos.component';
import { RecursosComponent } from './recursos/recursos.component';
import { HomeMainComponent } from './home-main/home-main.component';

export const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'jogos', component: JogosComponent},
  { path: 'desafios', component: DesafiosComponent},
  //{ path: 'login', component: LoginComponent},
  //{ path: 'cadastro', component: CadastroComponent},
  { path: 'recursos', component: RecursosComponent},
  //{ path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  //{ path: 'duvidas', component: DuvidasComponent},
];
