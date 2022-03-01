import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(`http://localhost:3000/list`);
  }
  getDataOne(id:number): Observable<Data[]> {
    return this.http.get<Data[]>(`http://localhost:3000/list/${id}`);
  }

  postData(data: any) {
    return this.http.post<any>(`http://localhost:3000/list`, data);
  }

  DeleteData(id: number) {
    return this.http.delete<any>(`http://localhost:3000/list/${id}`);
  }

  EditData(id: number , data:Data) {
    return this.http.put<any>(`http://localhost:3000/list/${id}`, data);
  }
}
