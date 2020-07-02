import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client, DataClient } from './client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientsUrl = 'http://northwind.netcore.io/query/customers.json'; 

  constructor(private http: HttpClient) { }

  getData(): Client[]{
    const result = []
    this.http.get<DataClient>(this.clientsUrl).toPromise().then(data => {
      for (const c of data.results) {
        result.push(c);
      }
    })
    return result
  }

  getClients(): Observable<Client[]> {
    return of(this.getData());
  }
}
