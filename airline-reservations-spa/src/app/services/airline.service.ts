import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map, Observable, of } from 'rxjs';

import { InterlineCarrier } from '../models/interlineCarriers.model';
import { NonMctRoute } from '../models/nonMctRoutes.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AirlineService {
  constructor(private httpClient: HttpClient) {}

  public readInterlineCarriers(apiKey: string): Observable<InterlineCarrier[]> {
    return this.httpClient
      .get<InterlineCarrier[]>(
        `${environment.API_URL}reservations/interline-carriers/${apiKey}`
      )
      .pipe(
        map((data: InterlineCarrier[]) => {
          return data;
        }),
        catchError((error) => {
          console.error(error);
          return of([] as InterlineCarrier[]);
        })
      );
  }

  public readNonMctRoutes(apiKey: string): Observable<NonMctRoute[]> {
    return this.httpClient
      .get<NonMctRoute[]>(
        `${environment.API_URL}reservations/non-mct-routes/${apiKey}`
      )
      .pipe(
        map((data: NonMctRoute[]) => {
          return data;
        }),
        catchError((error) => {
          console.error(error);
          return of([] as NonMctRoute[]);
        })
      );
  }
}
