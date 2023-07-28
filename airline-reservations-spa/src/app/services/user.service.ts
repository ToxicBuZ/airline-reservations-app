import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  public login(apiKey: string): Observable<User> {
    return this.httpClient
      .post(`${environment.API_URL}/api/login`, { ApiKey: apiKey })
      .pipe(
        map((userInfos: User) => {
          localStorage.setItem('user', JSON.stringify(userInfos));
          return userInfos;
        }),
        catchError((error) => {
          console.error(error);
          return of({} as User);
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
