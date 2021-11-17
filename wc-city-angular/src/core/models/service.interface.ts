import {Observable} from 'rxjs';

export interface Service {
  get<T>(endpoint: string, model: any, httpOptions: any): Observable<T[]>

  post<T>(endpoint: string, body: any, model: any, httpOptions: any): Observable<T[]>
}