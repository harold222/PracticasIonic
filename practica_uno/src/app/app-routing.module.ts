import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'calendario', loadChildren: './pages/calendario/calendario.module#CalendarioPageModule' },
  { path: 'recomendaciones', loadChildren: './pages/recomendaciones/recomendaciones.module#RecomendacionesPageModule' },
  { path: 'pierna', loadChildren: './pages/ejercicioscuerpo/pierna/pierna.module#PiernaPageModule' },
  { path: 'estomago', loadChildren: './pages/ejercicioscuerpo/estomago/estomago.module#EstomagoPageModule' },
  { path: 'brazo', loadChildren: './pages/ejercicioscuerpo/brazo/brazo.module#BrazoPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
