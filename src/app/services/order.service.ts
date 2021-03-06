import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {api} from '../constants/api';
import {BaseService} from './base.service';
import {Order} from "../models/order";

@Injectable()
export class OrderService extends BaseService {

  private static ORDERS_URL = api.ORDERS_ALL;

  constructor(private http: HttpClient) {
    super();
  }

  getOrders(page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(OrderService.ORDERS_URL + '?' + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

  getClientOrders(userId: number, page: number, size: number): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.get(OrderService.ORDERS_URL + '?search=user.id:' + userId + '&' +
      + 'page=' + page + '&' + 'size=' + size, {
      headers: headers
    });
  }

  createOrder(userId: number, order: Order): Observable<any> {
    const headers = this.getBearerHeaders();
    return this.http.post('api/v1/users/' + userId + '/orders', order, {
      headers: headers
    });
  }

}
