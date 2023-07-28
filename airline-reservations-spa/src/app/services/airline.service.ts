import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { InterlineCarrier } from '../models/interlineCarriers.model';
import { NonMctRoute } from '../models/nonMctRoutes.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private httpClient: HttpClient) {
    // call for interline carriers
    // call for NonMct Routes
  }
}
