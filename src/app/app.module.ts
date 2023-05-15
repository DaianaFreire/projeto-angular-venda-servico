import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutClientesComponent } from './checkout-clientes/checkout-clientes.component';
import { CheckoutCartaoComponent } from './checkout-cartao/checkout-cartao.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CheckoutComponent,
    CheckoutClientesComponent,
    CheckoutCartaoComponent,
    FinalizarCompraComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
