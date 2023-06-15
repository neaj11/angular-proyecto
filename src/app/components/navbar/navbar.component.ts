import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 public busqueda: string='';

  constructor(private router: Router) {}

  onSubmit() {
    // Convertir cualquier letra mayúscula a minúscula
    this.busqueda = this.busqueda.toLowerCase();

    // Reemplazar espacios en blanco por "-"
    this.busqueda = this.busqueda.replace(/\s+/g, '-');

    if (this.busqueda === 'sobre-nosotros') {
      this.router.navigateByUrl('/sobre-nosotros');
    } else if (this.busqueda === 'productos') {
      this.router.navigateByUrl('/productos');
    } else if (this.busqueda === 'clientes') {
      this.router.navigateByUrl('/clientes');
    }
  }
}
    // Otras inicializaciones si es necesario