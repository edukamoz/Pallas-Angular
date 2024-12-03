import { Routes } from '@angular/router';
import { DesafiosComponent } from './desafios/desafios.component';
import { JogosComponent } from './jogos/jogos.component';
import { RecursosComponent } from './recursos/recursos.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DuvidasComponent } from './duvidas/duvidas.component';

export const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'jogos', component: JogosComponent },
  { path: 'desafios', component: DesafiosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'recursos', component: RecursosComponent },
  //{ path: 'esqueceu-senha', component: EsqueceuSenhaComponent},
  { path: 'duvidas', component: DuvidasComponent},
  //{ path: 'outros-projetos', component: OutrosProjetosComponent},
  //{ path: 'carreiras', component: CarreirasComponent},
  //{ path: 'canal-suporte', component: CanalSuporteComponent},
  //{ path: 'depoimentos', component: DepoimentosComponent},
  //{ path: 'ranking', component: RankingComponent},
];
