import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorHoraComponent } from "./pages/por-hora/por-hora.component";
import { PorDiaComponent } from './pages/por-dia/por-dia.component';
import { PorSemanaComponent } from "./pages/por-semana/por-semana.component";
import { SensoresComponent } from "./components/sensors/sensores.component";
import { ChartsComponent } from './components/charts/charts.component';
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'inicio',
    component: ChartsComponent
  },
  {
    path: 'hora',
    component: PorHoraComponent
  },
  {
    path: 'dia',
    component: PorDiaComponent
  },
  {
    path: 'semana',
    component: PorSemanaComponent
  },
  {
    path: 'sensor/:id',
    component: SensoresComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
