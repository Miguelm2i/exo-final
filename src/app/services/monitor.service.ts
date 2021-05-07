import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Monitor } from '../models/Monitor';


@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor(private http: HttpClient) { }

  findAll = (): Observable<Monitor[]> => {
    return this.http.get<Monitor[]>(`${environment.apiUrl}/monitors`)
  }

  findById = (id: any): Observable<Monitor> => {
    return this.http.get<Monitor>(`${environment.apiUrl}/monitors/${id}`);
  }

  save = (monitor: Monitor): Observable<Monitor> => {
    return this.http.post<Monitor>(`${environment.apiUrl}/monitors`, monitor)
  }

  update = (monitor: Monitor): Observable<Monitor> => {
    return this.http.put<Monitor>(`${environment.apiUrl}/monitors`, monitor)
  }

  delete = (id: any): Observable<Monitor> => {
    return this.http.delete<Monitor>(`${environment.apiUrl}/monitors/${id}`);
  }
}
