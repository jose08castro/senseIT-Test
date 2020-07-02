import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Detail, Order, OrderResults, DataOrder } from './order.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl = 'http://northwind.netcore.io/orders.json'; 

  constructor(private http: HttpClient) { }

  getData(): Order[]{
    const orderResult: Order[] = [];
    this.http.get<DataOrder>(this.ordersUrl).toPromise().then(data => {
      for (const order of data.results) {
        const details: Detail[] = [];
        for (const d of order.orderDetails){
          details.push(d)
        }
        const or = order.order;
        orderResult.push({id: or.id, customerId: or.customerId, employeeId: or.employeeId, 
          orderDate: or.orderDate, requiredDate: or.requiredDate, shipVia: or.shipVia, 
          freight: or.freight, shipName: or.shipName, shipAddress: or.shipAddress, 
          shipCity: or.shipCity, shipPostalCode: or.shipPostalCode, shipCountry: or.shipCountry, 
          orderDetails: details}); 
      }
    })
    return orderResult
  }

  getOrders(): Observable<Order[]> {
    return of(this.getData());
  }
}