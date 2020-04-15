import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, PreAuthComponent } from '@rms-frontend/core';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./explorer/explorer.module').then(m => m.ExplorerModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
