import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
  { path: 'tarjetas', loadChildren: './pages/tarjetas/tarjetas.module#TarjetasPageModule' },
  { path: 'checkbox', loadChildren: './pages/checkbox/checkbox.module#CheckboxPageModule' },
  { path: 'datetime', loadChildren: './pages/datetime/datetime.module#DatetimePageModule' },
  { path: 'fab', loadChildren: './pages/fab/fab.module#FabPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'infinite', loadChildren: './pages/infinite/infinite.module#InfinitePageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
  { path: 'reorder', loadChildren: './pages/reorder/reorder.module#ReorderPageModule' },
  { path: 'loading', loadChildren: './pages/loading/loading.module#LoadingPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'progess-bar', loadChildren: './pages/progess-bar/progess-bar.module#ProgessBarPageModule' },
  { path: 'refresh', loadChildren: './pages/refresh/refresh.module#RefreshPageModule' },
  { path: 'searchbar', loadChildren: './pages/searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'segment', loadChildren: './pages/segment/segment.module#SegmentPageModule' },
  { path: 'slides', loadChildren: './pages/slides/slides.module#SlidesPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
