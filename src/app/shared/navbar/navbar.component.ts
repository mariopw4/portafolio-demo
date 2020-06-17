import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items = [
    {nombre: 'Inicio', path: '/inicio'},
    {nombre: 'Blog', path:'/blog'},
    {nombre: 'Portafolio', path:'/portafolio'},
    {nombre: 'Contacto', path: '/contacto'}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
