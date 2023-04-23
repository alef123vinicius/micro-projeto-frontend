import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Estados } from '../interfaces/states';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class StadosService {

  constructor(private http: HttpClient) { }

  getServicoStados(): Observable<Estados[]> {
    return this.http.get<Estados[]>(`${environment.REST_URL}/estados`)
      .pipe(
        tap({
          error: (error) => console.error(error)
        })
      );
  }
}
