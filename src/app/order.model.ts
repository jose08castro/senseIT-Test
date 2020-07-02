export interface Detail {
    orderId: number;
    productId: number;
    unitPrice: number;
    quantity: number;
    discount: number;
}

export interface Order {
    id: number;
    customerId: string;
    employeeId: number;
    orderDate: Date;
    requiredDate: Date;
    shipVia: number;
    freight: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    shipPostalCode: number;
    shipCountry: string;
    orderDetails: Detail[];
}

export interface OrderResults {
    order: Order;
    orderDetails: Detail[];
}

export interface DataOrder {
    results: OrderResults[];
    responseStatus: any;
}

