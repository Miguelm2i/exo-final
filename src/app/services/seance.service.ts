import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seance } from '../models/Seance';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  constructor(private http: HttpClient) { }

  findAll = (): Observable<Seance[]> => {
    return this.http.get<Seance[]>(`${environment.apiUrl}/seances`)
  }

  findById = (id: any): Observable<Seance> => {
    return this.http.get<Seance>(`${environment.apiUrl}/seances/${id}`);
  }

  save = (seance : Seance): Observable<Seance> => {
    return this.http.post<Seance>(`${environment.apiUrl}/seances`, seance)
  }

  update = (seance: Seance): Observable<Seance> => {
    return this.http.put<Seance>(`${environment.apiUrl}/seances`, seance)
  }

  delete = (id: any): Observable<Seance> => {
    return this.http.delete<Seance>(`${environment.apiUrl}/seances/${id}`);
  }
}
