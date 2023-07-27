import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private alertService: AlertService) {}

  public onSubmit() {
    this.alertService.showErrorToaster('Incorrect API key');
  }
}
