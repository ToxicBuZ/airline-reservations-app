import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  private subscriptions: Subscription;

  constructor(
    private alertService: AlertService,
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
    console.log(this.form.get('apiKey')?.value);
    this.alertService.showSuccessToaster('Api Key Logged');
  }
}
