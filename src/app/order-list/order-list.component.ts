import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client.model';
import { Order } from '../order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input() client: Client;
  @Input() order: Order;
  @Input() lista: [];

  constructor() { }

  ngOnInit(): void {
  }

}
