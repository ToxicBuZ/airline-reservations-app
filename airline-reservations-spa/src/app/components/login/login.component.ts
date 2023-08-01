import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { FormService } from 'src/app/services/form.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public showSpinner: boolean = false;

  private subscriptions: Subscription;

  constructor(
    private formService: FormService,
    private router: Router,
    private userService: UserService
  ) {
    this.form = this.formService.buildLoginForm();
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onSubmit() {
    this.showSpinner = true;
    this.subscriptions.add(
      this.userService
        .verifyApiKey(this.form.get('apiKey')?.value)
        .subscribe((result) => {
          if (Object.keys(result).length === 0) {
            /* Timeout of 2 seconds to imitate API call */
            setTimeout(() => {
              this.showSpinner = false;
            }, 2000);
          } else {
            this.router.navigate(['/']);
          }
        })
    );
  }
}
