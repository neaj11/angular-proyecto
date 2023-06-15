import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SobreNosotrosComponent} from './components/sobre-nosotros/sobre-nosotros.component'
import{ClientesComponent} from './components/clientes/clientes.component'
import{ProductosComponent} from './components/productos/productos.component'
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'sobre-nosotros',component: SobreNosotrosComponent},
  {path: 'clientes',component: ClientesComponent},
  {path: 'productos',component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
