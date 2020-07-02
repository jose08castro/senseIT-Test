export interface Client {
     id: string;
     companyName: string;
     contactName: string;
     contactTitle: string;
     address: string;
     city: string;
     postalCode: string;
     country: string;
     phone: string;
     fax: string;
}

export interface DataClient {
   offset: number;
   total: number;
   results: Client[];
   meta: any;
}