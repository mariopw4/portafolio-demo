import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutes } from './pages/pages-routing.module';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), PagesRoutes],
  exports: [RouterModule]
})
export class AppRoutingModule { }
