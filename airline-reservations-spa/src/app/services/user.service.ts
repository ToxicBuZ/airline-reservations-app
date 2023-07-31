import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, map, Observable, of } from 'rxjs';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  public verifyApiKey(apiKey: string): Observable<User> {
    return this.httpClient
      .get<User>(`${environment.API_URL}user/verify/${apiKey}`)
      .pipe(
        map((data: User) => {
          localStorage.setItem('user', JSON.stringify(data));
          return {
            ...data,
          };
        }),
        catchError((error) => {
          console.error(error);
          return of({} as User);
        })
      );
  }
}
