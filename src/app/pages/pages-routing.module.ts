import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        children: [
            {path: 'inicio', component: InicioComponent},
            {path: 'blog', component: BlogComponent},
            {path: 'portafolio', component: PortafolioComponent},
            {path: 'contacto', component: ContactoComponent},
            {path: '', pathMatch: 'full', redirectTo: '/inicio'}
        ]
     }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutes {}
