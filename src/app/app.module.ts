import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
