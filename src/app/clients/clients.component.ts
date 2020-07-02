import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  orders: Order[];

  selectedOrder: Order;

  onSelect(client: Client): void {
    for(const i of this.orders){
      if(i.customerId===client.id){
        this.selectedOrder=i;
        console.log(i);
      }
    }
  }
  
  constructor(private clientService: ClientService, private orderService: OrderService) { }

  getClients(): void {
    this.clientService.getClients()
        .subscribe(clients => this.clients = clients);
  }

  getOrders(): void {
    this.orderService.getOrders()
        .subscribe(orders => this.orders = orders);
  }

  ngOnInit(): void {
    this.getOrders();
    this.getClients();
  }
}