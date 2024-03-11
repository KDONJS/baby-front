import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapsComponent } from './components/maps/maps.component';
import { SiginComponent } from './components/helper/sigin/sigin.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'mapa', component: MapsComponent},
  {path: 'login', component: SiginComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
