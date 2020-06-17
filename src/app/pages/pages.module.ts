import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PagesComponent } from './pages.component';
import { PagesRoutes } from './pages-routing.module';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [
    InicioComponent,
    BlogComponent,
    PortafolioComponent,
    PagesComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutes
  ],
  exports:[
    PagesComponent
  ]
})
export class PagesModule { }
