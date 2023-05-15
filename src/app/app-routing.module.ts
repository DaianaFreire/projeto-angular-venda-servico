import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./pagina-inicial/pagina-inicial.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CheckoutClientesComponent} from "./checkout-clientes/checkout-clientes.component";
import {CheckoutCartaoComponent} from "./checkout-cartao/checkout-cartao.component";
import {FinalizarCompraComponent} from "./finalizar-compra/finalizar-compra.component";
import {NavbarComponent} from "./navbar/navbar.component";

const routes: Routes = [
  {path:'', redirectTo: '/pagina-inicial', pathMatch: 'full'},
  {path: 'pagina-inicial', component: PaginaInicialComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'checkout-clientes', component: CheckoutClientesComponent},
  {path:'checkout-cartao', component: CheckoutCartaoComponent},
  {path:'finalizar-compra', component: FinalizarCompraComponent},
  {path:'navbar', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
