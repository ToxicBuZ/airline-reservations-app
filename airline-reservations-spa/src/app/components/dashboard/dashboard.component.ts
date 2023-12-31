import { Component, OnInit } from '@angular/core';

import { zip } from 'rxjs';

import { AirlineService } from 'src/app/services/airline.service';
import { InterlineCarrier } from 'src/app/models/interlineCarriers.model';
import { NonMctRoute } from 'src/app/models/nonMctRoutes.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public interlineCarriersList: InterlineCarrier[];
  public nonMctRoutesList: NonMctRoute[];
  public showSpinner: boolean = false;

  private user: any;

  constructor(
    private airlineService: AirlineService,
    private userService: UserService
  ) {
    this.user = localStorage.getItem('user');
    this.interlineCarriersList = [];
    this.nonMctRoutesList = [];
  }
  ngOnInit(): void {
    if (this.user) {
      this.showSpinner = true;
      const nonMctRoutesObservable$ = this.airlineService.readNonMctRoutes();
      const interlineCarriersObservable$ =
        this.airlineService.readInterlineCarriers();
      const airlineObservable$ = zip(
        nonMctRoutesObservable$,
        interlineCarriersObservable$
      );
      airlineObservable$.subscribe(
        (results: [NonMctRoute[], InterlineCarrier[]]) => {
          /* Timeout of 2 seconds to imitate API call */
          setTimeout(() => {
            this.showSpinner = false;
          }, 2000);
          this.nonMctRoutesList = results[0];
          this.interlineCarriersList = results[1];
        }
      );
    }
  }

  public logout() {
    this.userService.logout();
  }
}
